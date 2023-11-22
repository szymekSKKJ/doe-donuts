import "./Page404.scss";
import page404Image from "../../../assets/404.webp";
import Button from "../../UI/Button/Button";
import { changeRoute } from "../Routing/Routing";

const Page404 = () => {
  return (
    <div className="page-404">
      <p className="main">
        4<img src={page404Image}></img>4
      </p>
      <p className="not-found">PAGE NOT FOUND</p>
      <Button onClick={() => changeRoute("/")}>
        Powróć na główną <i className="fa-regular fa-right"></i>
      </Button>
    </div>
  );
};

export default Page404;
