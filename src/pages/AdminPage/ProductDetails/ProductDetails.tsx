import React from "react";
import { useParams } from "react-router-dom";

import { ADMIN_PAGE_PRODUCTS } from "../../../utils/path";

import { IProduct } from "../../../types/productsTypes/productsTypes";

import photo from "../../../assets/mainPage/categories/first.png";

import { useGetProductByIdQuery } from "../../../store/features/Product/productId/productIdQuery";

import SideBar from "../components/SideBar/SideBar";
import BackButton from "../components/BackButton/BackButton";
import Profile from "../components/Profile/Profile";

import Photos from "./Photos/Photos";
import Details from "./Details/Details";
import Information from "./Information/Information";

import classes from "./ProductsDetails.module.scss";

const product: IProduct = {
  id: 1,
  status: 1,
  createDate: "2022-07-25T01:12:06.420Z",
  updateDate: "2022-07-29T00:19:56.051Z",
  title: "ADress",
  description: "Some product description",
  price: 500,
  amount: 91,
  article: "123456accaall",
  rate: 4,
  discount: null,
  images: [
    {
      id: 1,
      url: photo,
    },
    {
      id: 2,
      url: photo,
    },
    {
      id: 3,
      url: photo,
    },
    {
      id: 4,
      url: photo,
    },
    {
      id: 5,
      url: photo,
    },
  ],
};
const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  const { data = {}, isSuccess } = useGetProductByIdQuery(productId);
  const product = isSuccess && data.result;
  return (
    <div className={classes.productDetails}>
      <SideBar />
      <div className={classes.productDetailsContainer}>
        <div className={classes.header}>
          <BackButton path={ADMIN_PAGE_PRODUCTS}>
            Вернуться ко всем товарам
          </BackButton>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>

        <div className={classes.productDetailsContent}>
          <div className={classes.infoBlock}>
            <div className={classes.left}>
              <h3>Информация о товаре</h3>
              <Photos images={product?.images} />
              <Details product={product} />
            </div>
            <div className={classes.right}>
              <Information product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
