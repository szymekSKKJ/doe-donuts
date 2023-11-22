import { useEffect } from "react";

import "./CheckOut.scss";
import { changeRoute } from "../Routing/Routing";
import { addNotification } from "../Notifications/Notifications";

const CheckOut = () => {
  useEffect(() => {
    setTimeout(() => {
      changeRoute("/shop-cart");
      addNotification("unknown");
    }, 1000 * (1 + Math.random() * 2));
  }, []);

  return (
    <div className="check-out">
      <h1>Zamówienie</h1>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CheckOut;
