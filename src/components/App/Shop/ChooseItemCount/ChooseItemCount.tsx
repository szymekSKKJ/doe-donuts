import { currentShopCart } from "../../App";
import "./ChooseItemCount.scss";
import { useState } from "react";

interface chooseItemCountIntereface {
  count?: number;
  itemId: number;
}

const ChooseItemCount = ({ count = 0, itemId }: chooseItemCountIntereface) => {
  const [currentCount, setCurrentCount] = useState(count);

  return (
    <div className="choose-item-count">
      <button
        onClick={() => {
          setCurrentCount((currentValue) => (currentValue > 0 ? currentValue - 1 : currentValue));

          const currentShopCartValue = [...currentShopCart.value];

          const existingItem = currentShopCartValue.find((item) => item.id === itemId);

          if (existingItem) {
            existingItem.count = existingItem.count - 1;

            if (existingItem.count === 0) {
              currentShopCartValue.splice(currentShopCartValue.indexOf(existingItem), 1);
            }
          }

          currentShopCart.value = currentShopCartValue;

          localStorage.setItem("cart", JSON.stringify(currentShopCart.value));
        }}>
        <i className="fa-solid fa-minus"></i>
      </button>
      <div className="count">{currentCount}</div>
      <button
        onClick={() => {
          setCurrentCount((currentValue) => currentValue + 1);

          const currentShopCartValue = [...currentShopCart.value];

          const existingItem = currentShopCartValue.find((item) => item.id === itemId);

          if (existingItem) {
            existingItem.count = existingItem.count + 1;
          } else {
            currentShopCartValue.push({
              id: itemId,
              count: 1,
            });
          }

          currentShopCart.value = currentShopCartValue;

          localStorage.setItem("cart", JSON.stringify(currentShopCart.value));
        }}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default ChooseItemCount;
