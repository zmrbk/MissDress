import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IItemCard } from "../types";
import classes from "../style.module.scss";

import same3 from "../../../assets/ProductPage/same3.png";

interface ImagesCardProps {
  item: IItemCard;
  btnTitle: string;
}

const ImagesCard: React.FC<ImagesCardProps> = ({ item, btnTitle }) => {
  const [changeColor] = useState(false);
  return (
    <Grid className={classes.btnDiv}>
      <img
        className={classes.categoryImg}
        src={item.images && item.images.length > 0 ? item.images[0].url : same3}
        alt="imageCard"
      />

      <Link
        style={{
          color: changeColor ? "#372E24" : "#F1DAC5",
          textDecoration: "none",
        }}
        to={`/product/${item.id}`}
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

export default ImagesCard;
