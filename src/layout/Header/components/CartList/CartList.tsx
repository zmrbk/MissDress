import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../../../components/common";
import { ICartList } from "../../../../types/headerTypes/headerTypes";

import { CART_PAGE } from "../../../../utils/path";

import classes from "./CartList.module.scss";

interface CartListProps {
  cartList: ICartList[];
}

const CartList: FC<CartListProps> = ({ cartList }) => {
  return (
    <div className={classes.headerCartList}>
      {cartList.map((item: ICartList) => {
        return "";
      })}
      <div className={classes.headerCartListBtn}>
        <Link to={CART_PAGE}>
          <Button>Смотреть еще</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartList;
