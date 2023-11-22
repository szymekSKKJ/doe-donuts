import { signal } from "@preact/signals-react";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import Page404 from "./Page404/Page404";
import Routing, { getCurrentRoute } from "./Routing/Routing";
import { lazy } from "react";
import Notifications from "./Notifications/Notifications";

const Home = lazy(() => import("./Home/Home"));
const Shop = lazy(() => import("./Shop/Shop"));
const Contact = lazy(() => import("./Contact/Contact"));
const CreateCustom = lazy(() => import("./CreateCustom/CreateCustom"));
const ShopCart = lazy(() => import("./ShopCart/ShopCart"));
const CheckOut = lazy(() => import("./CheckOut/CheckOut"));
const AboutDonuts = lazy(() => import("./AboutDonuts/AboutDonuts"));

export const currentCurrencuformatter = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
});

export const currentShopCart = signal<{ id: number; count: number }[]>(
  (() => {
    const currentCartJSON = localStorage.getItem("cart");

    if (currentCartJSON) {
      return JSON.parse(currentCartJSON);
    } else {
      return [];
    }
  })()
);

const router = [
  {
    component: Home,
    route: "/",
  },
  {
    component: Shop,
    route: "/shop",
  },
  {
    component: Contact,
    route: "/contact",
  },
  {
    component: CreateCustom,
    route: "/create-custom",
  },
  {
    component: ShopCart,
    route: "/shop-cart",
  },
  {
    component: CheckOut,
    route: "/check-out",
  },
  {
    component: AboutDonuts,
    route: "/about-donuts",
  },
  {
    component: Page404,
    route: "/404",
  },
];

const App = () => {
  const currentRoute = getCurrentRoute();

  return (
    <div className="app">
      {currentRoute !== "/404" && <Navigation></Navigation>}
      <Notifications></Notifications>
      <Routing router={router}></Routing>
      <Footer></Footer>
    </div>
  );
};

export default App;
