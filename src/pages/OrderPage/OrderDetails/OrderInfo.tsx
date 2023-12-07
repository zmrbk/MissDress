import { FC } from "react";

import { Grid } from "@mui/material";

import { useGetOrderQuery } from "../../../store/features/Order/orderQuery";

import styles from "./OrderInfo.module.scss";

const OrderDetails: FC = () => {
  const { data } = useGetOrderQuery("");
  const orderData = data?.result[0];
  const products = data?.result[0].cart.products;

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <h3>Мои заказы</h3>
        <p>
          <span className={styles.orderId}>Заказ №{orderData?.id}</span>
          <span className={styles.status}>
            {orderData?.status === 1 && "Отправлено"}
          </span>
        </p>

        <article>
          {products?.map((el: any) => (
            <Grid container spacing={2} className={styles.grid}>
              <Grid md={12} xs={12}>
                <hr className={styles.lineThrough}></hr>
              </Grid>
              <Grid md={2} xs={2}>
                <img
                  src={el?.product.images[0].url}
                  alt="dress"
                  className={styles.img}
                />
              </Grid>
              <Grid md={9} xs={9} className={styles.description}>
                <p className={styles.title}>{el.title}</p>
                <p>
                  Артикул: <span>{el.product.article}</span>
                </p>
                <p>
                  Размер: <span>29-49</span>
                </p>
                <p>
                  Цвет: <span>Бежевый</span>
                </p>
                <p>
                  Количество товара в линейке: <span>{el.product.amount}</span>
                </p>
              </Grid>
              <Grid md={1} xs={1}>
                <p className={styles.newPrice}>{el.product.price}</p>
                <p className={styles.oldPrice}>{el.product.price + 500}</p>
              </Grid>
            </Grid>
          ))}
        </article>
        <hr></hr>
        <Grid container spacing={2} className={styles.orderInfo}>
          <Grid item md={3} xs={6} className={styles.questions}>
            <p>Получатель: </p>
            <p>Номер телефона: </p>
            <p> Адрес доставки: </p>
            <p>Итого к оплате: </p>
          </Grid>
          <Grid item md={9} xs={6} className={styles.answers}>
            <p>
              {orderData?.contactInfo?.firstName +
                " " +
                orderData?.contactInfo?.lastName}
            </p>
            <p>{orderData?.contactInfo?.phoneNumber}</p>
            <p>
              {orderData?.contactInfo?.address.country.title +
                ", " +
                orderData?.contactInfo?.address.city.title}
            </p>
            <p>{orderData?.cart?.price} c.</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OrderDetails;
