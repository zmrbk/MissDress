import { FC } from "react";

import { Button } from "../../../components/common";
import { Products } from "../../../types/cartPageTypes/orderFormTypes";

import { useSaveOrderMutation } from "../../../store/features/Order/orderQuery";

import classes from "./CartSummary.module.scss";

interface CartSummaryProps {
  openModal: () => void;
  totalPrice: number;
  thisCart: {
    id: number;
    status: number;
    createDate: string;
    updateDate: string;
    amount: number;
    price: number;
    proceedStatus: number;
    products: Products[];
  } | null;
}

const CartSummary: FC<CartSummaryProps> = ({
  totalPrice,
  openModal,
  thisCart,
}) => {
  const discount = 0;
  const [saveOrder] = useSaveOrderMutation();
  const handleSaveOrder = () => {
    const contactId = localStorage.getItem("contactInfoId");
    const body = {
      cartId: thisCart!.id,
      contactInfoId: Number(contactId),
    };
    openModal();
    saveOrder(body);
  };

  return (
    <div className={classes.cartSummary}>
      <h3 className={classes.cartSummaryTitle}>Итого</h3>
      <div className={classes.cartSummaryInfo}>
        <p>
          <span>Общая сумма</span> <strong>{totalPrice} c.</strong>
        </p>
        <p>
          <span>Скидка</span> <strong>{discount} с.</strong>
        </p>
        <p>
          <span>Итог</span> <strong>{totalPrice - discount} с.</strong>
        </p>
      </div>
      <div className={classes.cartSummaryBtn}>
        <Button
          onClick={handleSaveOrder}
          disabled={totalPrice === 0 ? true : false}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
