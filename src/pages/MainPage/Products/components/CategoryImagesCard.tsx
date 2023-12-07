import { useState } from "react";
import { Grid } from "@mui/material";

import { Link } from "react-router-dom";

import classes from "./CategoryImagesCard.module.scss";

interface CategoryImagesCardProps {
  item: {
    id: number;
    title: string;
    image: string;
  };
  btnTitle: string;
  type: string;
  title: string;
}

function CategoryImagesCard({
  item,
  btnTitle,
  type,
  title,
}: CategoryImagesCardProps) {
  const [changeColor] = useState(false);

  return (
    <Grid className={classes.btnDiv}>
      <img className={classes.categoryImg} src={item.image} alt="category" />
      <Link
        style={{
          color: changeColor ? "#372E24" : "#F1DAC5",
          textDecoration: "none",
        }}
        to={
          title === item?.title
            ? `/dresses/category=${item?.id}/collectionType=${type}`
            : `/dresses/category=${item?.id}/collectionType=summer`
        }
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
}

export default CategoryImagesCard;
