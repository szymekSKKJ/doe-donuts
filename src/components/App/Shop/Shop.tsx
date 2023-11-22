import "./Shop.scss";

import ChooseItemCount from "./ChooseItemCount/ChooseItemCount";
import shopItems from "./shopItems";
import { currentCurrencuformatter, currentShopCart } from "../App";

const Shop = () => {
  // Jeżeli id się równa to co mamy w koszykuu, to bierzmy ilość tego przedmiotu z koszyka i renderujemy w ChooseItemCount

  return (
    <div className="shop">
      <h1>Stwórz swój box!</h1>
      <div className="items">
        {shopItems.map((item) => {
          const { id, name, price, image } = item;

          const itemInUserShopCart = currentShopCart.value.find((item) => item.id === id);

          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image}></img>
              </div>
              <div className="name-and-price-and-choose-item-count-wrapper">
                <div className="name-and-price-wrapper">
                  <p className="name">{name}</p>
                  <p className="price">{currentCurrencuformatter.format(price)}</p>
                </div>
                <ChooseItemCount count={itemInUserShopCart ? itemInUserShopCart.count : 0} itemId={id}></ChooseItemCount>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
