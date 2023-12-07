import { FC } from "react";

import { Grid, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useGetOrderQuery } from "../../store/features/Order/orderQuery";

import { getDate } from "../../helpers/dateConverter";

import { Loader } from "../../utils/Loader/Loader";

import styles from "./Order.module.scss";

const OrderPage: FC = () => {
  const { data, isLoading } = useGetOrderQuery("");
  const products =
    (data?.result.length > 0 && data?.result[0].cart.products) || [];
  const orders = data?.result || [];

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Мои заказы</h2>
      <hr></hr>
      {isLoading && (
        <div style={{ marginTop: "8rem" }}>
          <Loader />
        </div>
      )}
      {orders.length > 0 ? (
        orders.map((el: any) => (
          <Grid
            key={el.id}
            container
            spacing={3}
            className={styles.gridContainer}
          >
            <Grid item md={3} xs={5} sm={4} style={{ fontWeight: "bold" }}>
              Заказ: №{el.id}
            </Grid>
            <Grid item md={8} xs={4} sm={6} style={{ fontWeight: "lighter" }}>
              {el.status === 1 && "Отправлено"}
            </Grid>
            <Grid item md={1} xs={3} sm={2}>
              {getDate(el.updateDate)}
            </Grid>
            <Grid md={11} xs={12} sm={10} className={styles.images}>
              {el?.cart?.products[0] && (
                <img
                  src={el?.cart?.products[0].product?.images[0].url}
                  alt="orderPhoto"
                />
              )}
              {el?.cart?.products[1] && (
                <img
                  src={el?.cart?.products[1].product?.images[0].url}
                  alt="orderPhoto"
                />
              )}
              {el?.cart?.products[2] && (
                <img
                  src={el?.cart?.products[2].product?.images[0].url}
                  alt="orderPhoto"
                />
              )}
              <button
                className={styles.empty_div}
                style={{ fontWeight: "lighter" }}
                onClick={() => navigate(`/orders:${el.orderId}`)}
              >
                <p className={styles.empty_div_text}>
                  {products?.length > 3
                    ? `+${products?.length - 3}`
                    : "Перейти к заказу"}
                </p>
              </button>
            </Grid>
            <Grid md={1} xs={12} sm={2} className={styles.price}>
              {el.cart.price} с.
            </Grid>
          </Grid>
        ))
      ) : (
        <Typography sx={{ fontSize: "1.3rem", mt: "5px" }}>
          Данные отсутствуют
        </Typography>
      )}
      {data?.result.map((el: any) => (
        <Grid
          key={el.id}
          container
          spacing={3}
          className={styles.gridContainer}
        >
          <Grid item md={3} xs={5} sm={4} style={{ fontWeight: "bold" }}>
            Заказ: №{el.id}
          </Grid>
          <Grid item md={8} xs={4} sm={6} style={{ fontWeight: "lighter" }}>
            {el.status === 1 && "Отправлено"}
          </Grid>
          <Grid item md={1} xs={3} sm={2}>
            {getDate(el.updateDate)}
          </Grid>
          <Grid md={11} xs={12} sm={10} className={styles.images}>
            {el?.cart?.products[0] && (
              <img
                src={el?.cart?.products[0].product?.images[0].url}
                alt="orderPhoto"
              />
            )}
            {el?.cart?.products[1] && (
              <img
                src={el?.cart?.products[1].product?.images[0].url}
                alt="orderPhoto"
              />
            )}
            {el?.cart?.products[2] && (
              <img
                src={el?.cart?.products[2].product?.images[0].url}
                alt="orderPhoto"
              />
            )}
            <button
              className={styles.empty_div}
              style={{ fontWeight: "lighter" }}
              onClick={() => navigate(`/orders:${el.orderId}`)}
            >
              <p className={styles.empty_div_text}>
                {products?.length > 3
                  ? `+${products?.length - 3}`
                  : "Перейти к заказу"}
              </p>
            </button>
          </Grid>
          <Grid md={1} xs={12} sm={2} className={styles.price}>
            {el.cart.price} с.
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default OrderPage;
