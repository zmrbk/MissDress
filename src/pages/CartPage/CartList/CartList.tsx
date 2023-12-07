import { FC } from "react";

import CartItem from "../../../components/CartItem/CartItem";
import { Products } from "../../../types/cartPageTypes/orderFormTypes";

import classes from "./CartList.module.scss";
interface CartListProps {
  cartList: Products[];
}
const CartList: FC<CartListProps> = ({ cartList }) => (
  <div className={classes.cartPageList}>
    {cartList.map((item) => {
      return (
        <div className={classes.cartItem} key={item.id}>
          <CartItem product={item.product} countProduct={item.amount} />
        </div>
      );
    })}
  </div>
);

export default CartList;
