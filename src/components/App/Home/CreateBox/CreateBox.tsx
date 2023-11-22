import "./CreateBox.scss";
import createBoxImage from "../../../../assets/createBox.webp";
import { useEffect, useRef, useState } from "react";
import Button from "../../../UI/Button/Button";
import { signal } from "@preact/signals-react";
import { changeRoute } from "../../Routing/Routing";

export const isCreateBoxComponentVisible = signal(false);

const CreateBox = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const createBoxElementRef = useRef<HTMLElement | null>(null);
  const obserwerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (obserwerRef.current === null) {
      const options = {
        threshold: 0.2,
      };

      obserwerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { isIntersecting } = entry;

          isCreateBoxComponentVisible.value = isIntersecting;

          if (isIntersecting) {
            setIsContentVisible(true);
            document.body.style.backgroundColor = "#e2b208";
          } else {
            setIsContentVisible(false);
            document.body.style.backgroundColor = "white";
          }
        });
      }, options);

      obserwerRef.current.observe(createBoxElementRef.current!);
    }
  }, []);

  return (
    <article className="create-box" ref={createBoxElementRef}>
      <h2 className={isContentVisible ? "visible" : ""}>Stwórz swój box!</h2>
      <p className={isContentVisible ? "visible" : ""}>Z przyjemnością przyjmiemy Twoje zamówienie</p>
      <Button theme={isContentVisible ? "white-orange" : "pink-white"} onClick={() => changeRoute("/shop")}>
        Stwórz box <i className="fa-regular fa-right"></i>
      </Button>
      <div className="image">
        <img src={createBoxImage}></img>
      </div>
    </article>
  );
};

export default CreateBox;
