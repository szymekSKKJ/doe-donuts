import { useEffect, useState } from "react";
import Logo from "../../Logo/Logo";
import Button from "../../UI/Button/Button";
import { currentShopCart } from "../App";
import { changeRoute } from "../Routing/Routing";
import "./Navigation.scss";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let sumOfShopCartItemsCount = 0;

  currentShopCart.value.forEach((item) => {
    const { count } = item;

    sumOfShopCartItemsCount += count;
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const changeSize = () => {
      if (window.screen.width > 780) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  const defaultOptions = (
    <>
      <button
        className="option hide-on-mobile"
        onClick={() => {
          setIsMobileMenuOpen(false);
          changeRoute("/contact");
        }}>
        Kontakt
      </button>
      <button
        className="option hide-on-mobile"
        onClick={() => {
          setIsMobileMenuOpen(false);
          changeRoute("/create-custom");
        }}>
        Stwórz własny
      </button>
      <button
        className="option hide-on-mobile"
        onClick={() => {
          setIsMobileMenuOpen(false);
          changeRoute("/about-donuts");
        }}>
        O pączkach
      </button>
      <Button
        className="hide-on-mobile"
        theme={`${isMobileMenuOpen ? "white-pink" : "pink-white"}`}
        style={{ margin: isMobileMenuOpen ? "0px" : "0px 0px 0px auto" }}
        onClick={() => {
          setIsMobileMenuOpen(false);
          changeRoute("/shop");
        }}>
        Stwórz box <i className="fa-regular fa-right"></i>
      </Button>
    </>
  );

  return (
    <div className="main-navigation-wrapper">
      <nav className={`main-navigation ${isMobileMenuOpen ? "mobile" : ""}`}>
        <button
          className="option logo"
          onClick={() => {
            setIsMobileMenuOpen(false);
            changeRoute("/");
          }}>
          <Logo color={isMobileMenuOpen ? "white" : "#f684ab"}></Logo>
        </button>
        <button
          className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen((currentValue) => (currentValue === false ? true : false))}>
          <i className="fa-solid fa-bars"></i>
        </button>
        {defaultOptions}
        <button
          className={`shop-cart-button ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => {
            setIsMobileMenuOpen(false);
            changeRoute("/shop-cart");
          }}>
          <i className="fa-regular fa-cart-shopping"></i>
          <p className="items-count">{sumOfShopCartItemsCount > 99 ? "99+" : sumOfShopCartItemsCount}</p>
        </button>
      </nav>
      {<div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>{defaultOptions}</div>}
    </div>
  );
};

export default Navigation;
