import { FC } from "react";

import { Button } from "../../../../components/common";

import { IOrderFormValues } from "../../../../types/cartPageTypes/orderFormTypes";

import classes from "./OrderCheck.module.scss";

interface OrderCheckProps {
  orderFormValues: IOrderFormValues | null;
  setSaved: (value: boolean) => void;
}

const OrderCheck: FC<OrderCheckProps> = ({ orderFormValues, setSaved }) => {
  const edit = () => setSaved(false);

  return (
    <div className={classes.orderCheck}>
      <h3 className={classes.orderCheckTitle}>Адрес Доставки</h3>
      <address className={classes.orderCheckInfo}>
        <span>
          {orderFormValues?.firstName} {orderFormValues?.lastName} &nbsp;
          {orderFormValues?.phoneNumber}
        </span>
        <br />
        <span>
          {orderFormValues?.cityId}, {orderFormValues?.countryId}
        </span>
      </address>
      <div className={classes.orderCheckEditBtn}>
        <Button onClick={edit}>Редактировать</Button>
      </div>
    </div>
  );
};

export default OrderCheck;
