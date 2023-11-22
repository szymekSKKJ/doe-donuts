import { useEffect, useRef } from "react";
import Button from "../../../UI/Button/Button";
import "./CustomOrder.scss";
import rightSideImage from "../../../../assets/rightSideCustomOrder.webp";
import leftSideImage from "../../../../assets/leftSideCustomOrder.webp";
import { isCreateBoxComponentVisible } from "../CreateBox/CreateBox";
import { changeRoute } from "../../Routing/Routing";

const CustomOrder = () => {
  const customOrderElementRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;

        if (isIntersecting && isCreateBoxComponentVisible.value === false) {
          document.body.style.backgroundColor = "#76bd51";
        }
      });
    }, options);

    observerRef.current.observe(customOrderElementRef.current!);
  }, [isCreateBoxComponentVisible.value]);

  return (
    <article className="custom-order" ref={customOrderElementRef}>
      <div className="background-images">
        <div className="image">
          <img src={leftSideImage}></img>
        </div>
        <div className="image">
          <img src={rightSideImage}></img>
        </div>
      </div>
      <h2>
        Szukasz czegoś bardziej <br></br> personalnego?
      </h2>
      <p>Sprawdź nasze produkcje</p>
      <Button theme={isCreateBoxComponentVisible.value ? "white-orange" : "white-green"} onClick={() => changeRoute("/create-custom")}>
        Sprawdź <i className="fa-regular fa-right"></i>
      </Button>
    </article>
  );
};

export default CustomOrder;
