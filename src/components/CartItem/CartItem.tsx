import React, { useState } from "react";

import item from "../../assets/mainPage/categories/first.png";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";

import {
  useAddProductToCartMutation,
  useDeleteProductFromCartMutation,
  useReduceProductFromCartMutation,
} from "../../store/features/Cart/cartQuery";

import { Product } from "../../types/cartPageTypes/orderFormTypes";

import classes from "./CartItem.module.scss";

interface CartItemProps {
  product: Product;
  countProduct: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, countProduct }) => {
  const [counter, setCounter] = useState(countProduct);
  const [addProductToCart] = useAddProductToCartMutation();
  const [reduceProductFromCart] = useReduceProductFromCartMutation();
  const [deleteProductFromCart] = useDeleteProductFromCartMutation();

  const handleDeleteCart = async () => {
    await deleteProductFromCart(product.id);
  };

  const increment = async () => {
    await addProductToCart(product);
    setCounter((prev) => prev + 1);
  };
  const decrement = async () => {
    await reduceProductFromCart(product.id);
    setCounter((prev) => prev - 1);
  };

  return (
    <div className={classes.cartItem}>
      <div className={classes.cartItemContent}>
        <div className={classes.cartItemImage}>
          <img src={item} alt={"item"} />
        </div>
        <div className={classes.cartItemInfo}>
          <div className={classes.cartItemHeader}>
            <div className={classes.cartItemHeaderText}>
              <h4 className={classes.cartItemTitle}>{product.title}</h4>
              <p className={classes.cartItemSeries}>
                <span>Артикул:</span> <strong>{product.article}</strong>
              </p>
              <p className={classes.cartItemSize}>
                <span>Размер:</span> <strong>14-29</strong>
              </p>
              <p className={classes.cartItemColor}>
                <span>Цвет:</span> <strong>Черный</strong>
              </p>
              <p className={classes.cartItemQuantity}>
                <span>Кличество товара в линейке:</span>{" "}
                <strong>{product.amount}</strong>
              </p>
            </div>
            <span className={classes.cartItemCross} onClick={handleDeleteCart}>
              <CrossIcon />
            </span>
          </div>

          <div className={classes.cartItemFooter}>
            <div className={classes.cartItemButtons}>
              <button
                onClick={decrement}
                className={`${classes.decreaseBtn} ${
                  counter === 1 && classes.disable
                }`}
                disabled={counter === 1 ? true : false}
              >
                -
              </button>
              <div className={classes.counter}>
                <span>{counter}</span>
              </div>
              <button onClick={increment} className={classes.increaseBtn}>
                +
              </button>
            </div>
            <div className={classes.cartItemPrice}>
              <span className={classes.cartItemCurrentPrice}>
                {product.price * countProduct} с.
              </span>
              <br />
              <s className={classes.cartItemOldPrice}>{product.discount}</s>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
