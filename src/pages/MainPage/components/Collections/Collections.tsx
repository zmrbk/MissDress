import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Container } from "@mui/material";
import { Link } from "react-router-dom";

import winter from "../../../../assets/сollectionPage/collectionsSeason/winter.png";
import spring from "../../../../assets/сollectionPage/collectionsSeason/spring.png";
import summer from "../../../../assets/сollectionPage/collectionsSeason/summer.png";
import autumn from "../../../../assets/сollectionPage/collectionsSeason/autumn.png";

import classes from "./Collections.module.scss";

function Collections() {
  const seasons = [
    { id: 1, img: winter, title: "Зима", path: "winter" },
    { id: 2, img: spring, title: "Весна", path: "spring" },
    { id: 3, img: summer, title: "Лето", path: "summer" },
    { id: 4, img: autumn, title: "Осень", path: "autumn" },
  ];

  return (
    <div className={classes.collections}>
      <Container>
        <h1 className={classes.collections__title}>Коллекция</h1>
        <div className={classes.collections__items}>
          {seasons.map((season) => {
            return (
              <Link key={season.id} to={`/collection/${season.path}`}>
                <Card className={classes.collections__item}>
                  <CardMedia
                    component="img"
                    className={classes.collections__img}
                    sx={season.id % 2 == 0 ? { order: 2 } : {}}
                    image={season.img}
                    alt={season.title}
                  />
                  <CardContent
                    className={classes.collections__content}
                    sx={season.id % 2 == 0 ? { order: 1 } : {}}
                  >
                    <Typography
                      component="div"
                      variant="h5"
                      className={classes.collections__text}
                    >
                      {season.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Collections;
