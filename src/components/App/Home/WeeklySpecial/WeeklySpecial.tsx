import "./WeeklySpecial.scss";

import Button from "../../../UI/Button/Button";
import { isCreateBoxComponentVisible } from "../CreateBox/CreateBox";
import { changeRoute } from "../../Routing/Routing";
import shopItems from "../../Shop/shopItems";
import { currentCurrencuformatter } from "../../App";

const WeeklySpecial = () => {
  const weeklyOffer = shopItems.filter((item) => item.id < 4 && item);

  return (
    <main className={`${isCreateBoxComponentVisible.value === true ? "not-visible" : ""}`}>
      <h2>Tygodniowy specjał</h2>
      <div className="weekly-special">
        {weeklyOffer.map((item) => {
          const { name, price, image, id } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image}></img>
              </div>
              <p className="title">{name}</p>
              <p className="price">{currentCurrencuformatter.format(price)}</p>
            </div>
          );
        })}
      </div>
      <Button theme={isCreateBoxComponentVisible.value === true ? "white-orange" : "pink-white"} onClick={() => changeRoute("/shop")}>
        Zobacz więcej <i className="fa-regular fa-right"></i>
      </Button>
    </main>
  );
};

export default WeeklySpecial;
