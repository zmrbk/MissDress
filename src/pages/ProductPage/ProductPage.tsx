import React, { FC, useEffect, useState } from "react";

import { CircularProgress, Grid } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Icon from "react-icons-kit";
import { Link, useParams } from "react-router-dom";
import { caretLeft } from "react-icons-kit/fa/caretLeft";
import { caretRight } from "react-icons-kit/fa/caretRight";

import heartFull from "../../assets/mainPage/icons/heartfull.svg";
import heart from "../../assets/mainPage/icons/heart.svg";
import mainDress from "../../assets/ProductPage/mainDress.png";
import { Loader } from "../../utils/Loader/Loader";
import { Error } from "../../utils/Error/Error";

import { BreadCrumbs } from "../../utils/BreadCrumbs/BreadCrumbs";

import ProductCard from "../../components/ProductCard/ProductCard";

import { productGetAllApi } from "../../store/features/Product/productGetAll/ProductGetAllQuery";
import { useGetProductByIdQuery } from "../../store/features/Product/productId/productIdQuery";
import { IItemCard } from "../../components/ProductCard/types";
import {
  useAddProductFavoritesMutation,
  useFetchProductFavoritesQuery,
} from "../../store/features/Product/productFavorites/productFavoritesQuery";
import {
  useAddProductToCartMutation,
  useDeleteProductFromCartMutation,
  useGetProductFromCardQuery,
} from "../../store/features/Cart/cartQuery";

import ModalFullPhoto from "./modal/ModalFullPhoto";
import SwiperVertical from "./SwiperVertical";

import styles from "./ProductPage.module.scss";

interface IColors {
  id: number;
  color: string;
}

SwiperCore.use([Navigation]);

const ProductPage: FC = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [url, setUrl] = useState<number>(0);
  // modalFullPhoto
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // modalFullPhoto
  const { id } = useParams();
  const [changeColor, setChangeColor] = useState(false);
  const [addProductFavorites] = useAddProductFavoritesMutation();
  const { data: favoriteProducts = [] } = useFetchProductFavoritesQuery("");
  const countFavorites: IItemCard[] = favoriteProducts.result?.data || [];
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);
  const productCurrent: IItemCard = product?.result || {};
  const { data = [] } = productGetAllApi.useFetchProductGetAllQuery(6);
  const similarDresses = data?.result?.data;
  //cart
  // getProductCart
  const [added, setAdd] = useState<boolean>(false);
  const { data: cartProducts = {} } = useGetProductFromCardQuery();
  const allProductsCart = cartProducts?.result?.products || [];
  // getProductCart
  // addProductCart
  const [addProductToCart, { isLoading: addLoading }] =
    useAddProductToCartMutation();
  //addProductCart
  // deleteProductCart
  const [deleteProductFromCart, { isLoading: deleteLoading }] =
    useDeleteProductFromCartMutation();
  // deleteProductCart
  //cart
  const [color] = useState<IColors[]>([
    { id: 0, color: "#000000" },
    { id: 1, color: "#B89981" },
    { id: 2, color: "#25B133" },
    { id: 3, color: "#49C7EF" },
    { id: 4, color: "#4E53DB" },
    { id: 5, color: "#FB9BBD" },
    { id: 6, color: "#F45656" },
  ]);

  const handleAddFavorite = async () => {
    if (!localStorage.getItem("accessToken")) {
      return;
    }
    await addProductFavorites(productCurrent);
    setChangeColor(!changeColor);
  };

  const handleAddCart = async () => {
    if (!localStorage.getItem("accessToken")) {
      return;
    }
    await addProductToCart(productCurrent);
  };

  const handleDeleteCart = async () => {
    await deleteProductFromCart(productCurrent.id);
  };

  useEffect(() => {
    if (countFavorites.length !== 0) {
      setChangeColor(countFavorites.some((el) => el.id === productCurrent.id));
    }
  }, [productCurrent, countFavorites]);

  useEffect(() => {
    if (allProductsCart.length >= 0) {
      setAdd(
        allProductsCart.some((prod) => prod.product.id === productCurrent.id)
      );
    }
  }, [productCurrent, allProductsCart]);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [id, isLoading]);

  if (isLoading) {
    return <Loader center="center" />;
  }

  if (isError) {
    return <Error center="center" />;
  }
  const links = [
    { title: "Главная", path: "/" },
    { title: "Товары", path: "/categories" },
    { title: productCurrent.title },
  ];
  return (
    <div className={styles.background_container}>
      <BreadCrumbs links={links} />
      <div className={styles.product_container}>
        <Grid container>
          <Grid item xs={11} md={3} order={{ xs: 3, md: 1 }}>
            <SwiperVertical
              setUrl={setUrl}
              images={
                productCurrent.images && productCurrent.images.length > 0
                  ? productCurrent.images
                  : []
              }
            />
          </Grid>
          <Grid item xs={6} md={4} order={{ xs: 1, md: 2 }}>
            <img
              onClick={handleOpen}
              src={
                productCurrent.images && productCurrent.images.length > 0
                  ? productCurrent.images[url].url
                  : mainDress
              }
              alt="main dress"
              width="87%"
              className={styles.main_dress}
            />
          </Grid>

          <Grid item xs={6} md={5} order={{ xs: 2, md: 3 }}>
            <div className={styles.text_dress}>
              <h3 className={styles.title}>{productCurrent.title}</h3>
              <div className={styles.like_flex}>
                <p>Артикул: {productCurrent.article}</p>
                <img
                  onClick={handleAddFavorite}
                  src={changeColor ? heartFull : heart}
                  alt="like"
                  className={styles.likeIcon}
                />
              </div>

              <p>Количество в линейке: {productCurrent.amount}</p>
              <p className={styles.colors}>
                Цвет:
                <span className={styles.color}>
                  {color.map((el) => (
                    <p
                      key={el.id}
                      className={styles.each_color}
                      style={{ backgroundColor: el.color }}
                    ></p>
                  ))}
                </span>
              </p>
              <h3 className={styles.prices}>
                {productCurrent.price}
                <span>{productCurrent.discount}</span>
              </h3>
              <div className={styles.description_change}>
                <h4>О товаре:</h4>
                <p className={styles.description}>
                  {productCurrent.description}
                </p>
                {added ? (
                  <button
                    className={`${styles.btn} ${styles.btn__delete}`}
                    onClick={handleDeleteCart}
                  >
                    {deleteLoading ? (
                      <CircularProgress sx={{ color: "white" }} />
                    ) : (
                      "Удалить из корзины"
                    )}
                  </button>
                ) : (
                  <button className={styles.btn} onClick={handleAddCart}>
                    {addLoading ? (
                      <CircularProgress sx={{ color: "white" }} />
                    ) : (
                      "Добавить в корзину"
                    )}
                  </button>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={styles.description_change_mobile}>
          <h4>О товаре:</h4>
          <p className={styles.description}>{productCurrent.description}</p>
          <Link to="/cart">
            <button className={styles.btn}>Перейти в корзину</button>
          </Link>
        </div>

        <div className={styles.similar_container}>
          <h1>Похожие товары</h1>
          <div ref={navigationPrevRef} className={styles.similar_swiper_left}>
            <Icon size={55} icon={caretLeft} />
          </div>
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper: any) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            mousewheel={true}
            modules={[Navigation]}
            className={styles.similarSwiper}
            slidesPerView={2}
            direction={"horizontal"}
            spaceBetween={50}
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
            }}
          >
            {similarDresses?.map((el: any, index: any) => (
              <SwiperSlide key={index}>
                {/* <ProductCard item={el} btnTitle="Открыть" /> */}
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={navigationNextRef} className={styles.similar_swiper_right}>
            <Icon size={55} icon={caretRight} />
          </div>
        </div>
        <div className={styles.btnBottom}>
          <button>Millana</button>
        </div>
        <div className={styles.btnMobileDiv}>
          <Link to="/">
            <button className={styles.btnMobile}>Смотреть все товары</button>
          </Link>
        </div>
      </div>
      <ModalFullPhoto
        handleClose={handleClose}
        open={open}
        photo={
          productCurrent.images && productCurrent.images.length > 0
            ? productCurrent.images[url].url
            : mainDress
        }
      />
    </div>
  );
};

export default ProductPage;
