import Logo from "../../../Logo/Logo";
import "./Header.scss";
import headerImage from "../../../../assets/headerImage.webp";
import Button from "../../../UI/Button/Button";

const Header = () => {
  return (
    <header>
      <Logo></Logo>
      <div className="title-and-order-button">
        <h1>
          Pączki ponad <br></br>wszystko
        </h1>
        <Button
          onClick={() => {
            const createBoxElement = document.querySelector(".create-box") as HTMLElement;

            createBoxElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}>
          Stwórz box <i className="fa-regular fa-right"></i>
        </Button>
      </div>
      <div className="header-image">
        <img src={headerImage}></img>
      </div>
    </header>
  );
};

export default Header;
