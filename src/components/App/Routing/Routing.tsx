import { signal } from "@preact/signals-react";
import { LazyExoticComponent, Suspense, useEffect, useLayoutEffect, useState } from "react";

const currentRouteSignal = signal<string>(window.location.href)!;

export const getCurrentRoute = () => {
  // Forcing rerender
  currentRouteSignal.value;

  const currentUrlPath = `/${window.location.href
    .split("?")[0]
    .split("/")
    .slice(3)
    .map((path, index, array) => (index < array.length - 1 ? path : path !== "" ? path : undefined))
    .filter((path) => path !== undefined)
    .join("/")}`;

  return currentUrlPath;
};

export const changeRoute = (route: string) => {
  const currentRoute = getCurrentRoute();
  const newRoute = `${window.location.origin}${route}`;

  if (route !== currentRoute) {
    history.pushState({ route: route }, "", new URL(newRoute));
    currentRouteSignal.value = newRoute;
  }
};

const findPageElement = (
  router: {
    component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
    route: string;
  }[]
) => {
  const currentRoute = getCurrentRoute();

  const foundRoute = router.find((routeData) => routeData.route === currentRoute);

  if (foundRoute) {
    return foundRoute.component;
  } else {
    changeRoute("/404");
  }
};

interface routingProps {
  router: {
    component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
    route: string;
  }[];
}

const Routing = ({ router }: routingProps) => {
  const [currentRoute, setCurrentRoute] = useState<undefined | LazyExoticComponent<() => JSX.Element> | (() => JSX.Element)>(() => findPageElement(router));

  useLayoutEffect(() => {
    setCurrentRoute(() => findPageElement(router));
  }, [currentRouteSignal.value]);

  useEffect(() => {
    const listenerCallback = () => {
      currentRouteSignal.value = window.location.href;
    };
    window.addEventListener("popstate", listenerCallback);

    return () => {
      window.removeEventListener("popstate", listenerCallback);
    };
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [currentRouteSignal.value]);

  if (currentRoute) {
    const CurrentRoute = currentRoute;

    return <Suspense>{<CurrentRoute></CurrentRoute>}</Suspense>;
  } else {
    <></>;
  }
};

export default Routing;
