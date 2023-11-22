import { currentShopCart } from "../App";
import ChooseItemCount from "../Shop/ChooseItemCount/ChooseItemCount";
import shopItems from "../Shop/shopItems";
import "./ShopCart.scss";
import { currentCurrencuformatter } from "../App";
import Button from "../../UI/Button/Button";
import { changeRoute } from "../Routing/Routing";

const ShopCart = () => {
  let total = 0;

  currentShopCart.value.forEach((item) => {
    const { id, count } = item;

    const foundItem = shopItems.find((itemLocal) => itemLocal.id === id)!;

    total += foundItem.price * count;
  });

  return (
    <div className="shop-cart">
      <h1>Koszyk</h1>
      {currentShopCart.value.length !== 0 ? (
        <>
          <div className="items">
            {currentShopCart.value.map((item) => {
              const { id, count } = item;

              const foundItem = shopItems.find((itemLocal) => itemLocal.id === id)!;

              const { image, price, name } = foundItem;

              return (
                <div className="item" key={id}>
                  <div className="image">
                    <img src={image}></img>
                  </div>
                  <div className="title-and-price-wrapper">
                    <p className="title">{name}</p>
                    <p className="price">{currentCurrencuformatter.format(price)}</p>
                  </div>
                  <div className="quantity-and-total-wrapper">
                    <div className="quantity">{<ChooseItemCount itemId={id} count={count}></ChooseItemCount>}</div>
                    <p className="total">{currentCurrencuformatter.format(count * price)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total">
            <p>Do zapłaty: {currentCurrencuformatter.format(total)}</p>
            <Button theme="pink-white" onClick={() => changeRoute("/check-out")}>
              Zapłać <i className="fa-regular fa-right"></i>
            </Button>
          </div>
        </>
      ) : (
        <div className="empty">
          <p>Brak produktów</p>
          <Button theme="pink-white" onClick={() => changeRoute("/shop")}>
            Stwórz box <i className="fa-regular fa-right"></i>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
