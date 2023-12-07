import React from "react";

import classes from "../style.module.scss";
import amount from "../../../assets/ProductPage/Amount.svg";
import { IItemCard } from "../types";

interface DescriptionProps {
  item: IItemCard;
}

const Description: React.FC<DescriptionProps> = ({ item }) => (
  <>
    <div className={classes.priceDiv}>
      <div className={classes.priceP}>
        <p>1000</p>
        <p>{item.discount}</p>
        <p>{item.price}</p>
      </div>
      <div className={classes.colorDiv}>
        <img width={33} src={amount} alt="" />
        <p>{item.amount}</p>
      </div>
    </div>
    <p className={classes.titleP}>{item.title}</p>
  </>
);

export default Description;
