import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import same3 from "../../../assets/ProductPage/same3.png";
import { CategoryItem } from "../types/types";

import classes from "./CollectionImagesCard.module.scss";

interface CollectionImagesCardProps {
  item: CategoryItem;
  btnTitle: string;
  type: string;
}

const CollectionImagesCard: React.FC<CollectionImagesCardProps> = ({
  item,
  btnTitle,
  type,
}) => {
  const [changeColor] = useState(false);

  return (
    <Grid className={classes.btnDiv}>
      <img className={classes.categoryImg} src={same3} alt="imageCategory" />

      <Link
        style={{
          color: changeColor ? "#372E24" : "#F1DAC5",
          textDecoration: "none",
        }}
        to={`/dresses/category=${item.category_id}/collectionType=${type}`}
      >
        <button
          style={{
            background: changeColor ? "#F1DAC5" : "#372e24",
          }}
          className={classes.btn}
        >
          {btnTitle}
        </button>
      </Link>
    </Grid>
  );
};

export default CollectionImagesCard;
