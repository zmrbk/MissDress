import { BreadCrumbs } from "../../utils/BreadCrumbs/BreadCrumbs";
import { DELIVERY_PAGE, MAIN_PAGE } from "../../utils/path";

import classes from "../DeliveryPage/DeliveryPage.module.scss";

import DeliveryComponents from "./DeliveryComponents/DeliveryComponents";

const DeliveryPage = () => {
  const links = [
    { title: "Главная", path: MAIN_PAGE },
    { title: "Доставка", path: DELIVERY_PAGE },
  ];

  return (
    <div className={classes.container}>
      <BreadCrumbs links={links} />
      <div className={classes.deliv}>
        <DeliveryComponents />
        <div className={classes.flex}>
          <div className={classes.deliv__item}>
            <h1 className={classes.deliv__h1}>Доставка</h1>
            <p className={classes.deliv__p}>
              После того, как Вы сделали заказ, наши менеджеры связываются с
              Вами для подтверждения заказа (обработка заказов происходит с
              понедельника по пятницу с 10:00 до 20:00)
            </p>
            <p>Заказ без оплаты остается в резерве 3 рабочих дня. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
