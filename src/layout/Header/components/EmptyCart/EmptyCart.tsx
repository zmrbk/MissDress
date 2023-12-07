import { FC } from "react";

import { ReactComponent as CartIcon } from "../../../../assets/header/cartIcon.svg";
import { Button } from "../../../../components/common";

import classes from "./EmptyCart.module.scss";

interface EmptyCartProps {
  closeCart: () => void;
}

const EmptyCart: FC<EmptyCartProps> = ({ closeCart }) => (
  <div className={classes.emptyCart}>
    <div className={classes.emptyCartInner}>
      <i>
        <CartIcon />
      </i>
      <p>Ваша корзина пуста</p>
      <Button onClick={closeCart}>Продолжить покупки</Button>
    </div>
  </div>
);

export default EmptyCart;
