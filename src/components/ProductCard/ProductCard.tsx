import React, { useEffect, useState } from "react";
import { Grid, Rating, styled } from "@mui/material";

import { Box } from "@mui/system";

import heartFull from "../../assets/mainPage/icons/heartfull.svg";
import heart from "../../assets/mainPage/icons/heart.svg";
import {
  useAddProductFavoritesMutation,
  useFetchProductFavoritesQuery,
} from "../../store/features/Product/productFavorites/productFavoritesQuery";
import { useAddProductRateMutation } from "../../store/features/Product/productGetAll/ProductGetAllQuery";

import StarFull from "./components/StarFull";
import Star from "./components/Star";

import classes from "./style.module.scss";

import ImagesCard from "./components/ImagesCard";
import Description from "./components/Description";
import { IItemCard, IProductCard } from "./types";
import ResponsiveStar from "./components/ResponsiveStar";
import ResponsiveStarFull from "./components/ResponsiveStarFull";

const ProductCard = ({ item, btnTitle }: IProductCard) => {
  const [addProductFavorites] = useAddProductFavoritesMutation();
  const [addProductRate] = useAddProductRateMutation();
  const { data = [] } = useFetchProductFavoritesQuery("");
  const items: IItemCard[] = data.result?.data || [];
  const [changeColor, setChangeColor] = useState(false);
  const [newRate, setNewRate] = useState({});

  const handleAddFavorite = async () => {
    await addProductFavorites(item);
    setChangeColor(!changeColor);
  };
  const rate = item.rate;
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  const screenWidth = window.screen.width;

  const handleAddRate = (body: { rate: number | null; productId: number }) => {
    setNewRate(body);
    addProductRate(body);
  };
  useEffect(() => {
    if (items.length !== 0) {
      setChangeColor(items.some((el) => el.id === item.id));
    }
  }, [item.id]);

  return (
    <Grid className={classes.bestsellerCard}>
      <ImagesCard btnTitle={btnTitle} item={item} />
      <Description item={item} />
      <div className={classes.iconsDiv}>
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <StyledRating
            name="customized-color"
            defaultValue={rate}
            value={rate}
            getLabelText={(value: number) =>
              `${value} Heart${value !== 1 ? "s" : ""}`
            }
            precision={1}
            icon={screenWidth > 715 ? <StarFull /> : <ResponsiveStarFull />}
            emptyIcon={screenWidth > 715 ? <Star /> : <ResponsiveStar />}
            onChange={(e, newValue) =>
              handleAddRate({
                rate: newValue || Math.ceil(rate),
                productId: item.id,
              })
            }
          />
        </Box>
        <div>
          <img
            onClick={handleAddFavorite}
            width={43}
            src={changeColor ? heartFull : heart}
            alt=""
          />
        </div>
      </div>
    </Grid>
  );
};

export default ProductCard;
