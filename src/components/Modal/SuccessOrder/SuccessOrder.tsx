import { FC } from "react";

import { Button } from "../../common";

import classes from "./SuccessOrder.module.scss";

interface SuccessOrderProps {
  closeModal: () => void;
}

const SuccessOrder: FC<SuccessOrderProps> = ({ closeModal }) => {
  return (
    <div className={classes.successOrder}>
      <h5 className={classes.successOrderTitle}>Поздравляем!</h5>
      <p className={classes.successOrderText}>Ваш заказ успешно оформлен.</p>
      <p className={classes.successOrderText}>
        В ближайшее время мы <br /> обязательно свяжемся с Вами!
      </p>
      <div className={classes.buttonBlock}>
        <Button onClick={closeModal}>Продолжить покупки</Button>
      </div>
    </div>
  );
};

export default SuccessOrder;
