import { FC } from "react";

import { IProduct } from "../../../../types/productsTypes/productsTypes";

import EditBtn from "../../components/EditBtn/EditBtn";

import classes from "./Details.module.scss";

interface DetailsProps {
  product: IProduct;
}

const Details: FC<DetailsProps> = ({ product }) => (
  <div className={classes.details}>
    <div className={classes.title}>
      <h4>{product.title}</h4>
      <span>Весенняя коллекция</span>
    </div>
    <div className={classes.info}>
      <ul className={classes.list}>
        <li>
          <span>Артикул:</span>
          <strong>{product.article}</strong>
        </li>
        <li>
          <span>Количество в линейке:</span>
          <strong>{product.amount}</strong>
        </li>
        <li>
          <span>Цена:</span>
          <strong>{product.price}</strong>
        </li>
        <li>
          <span>Рейтинг:</span>
          <strong>{product.rate}</strong>
        </li>
      </ul>
      <div className={classes.editBtn}>
        <EditBtn>Редактировать</EditBtn>
      </div>
    </div>
  </div>
);

export default Details;
