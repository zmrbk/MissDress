import React, { useEffect, useState } from "react";

import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import classes from "../CategoriesPage/CategoryPage.module.scss";

import CategoryPagination from "../../components/Pagination/CategoryPagination";

import { useFetchProductByCollectionTypeQuery } from "../../store/features/Product/productCategory/productCategoryQuery";
import { BreadCrumbs } from "../../utils/BreadCrumbs/BreadCrumbs";
import { CATEGORIES_PAGE, MAIN_PAGE } from "../../utils/path";

import { Error } from "../../utils/Error/Error";
import { Loader } from "../../utils/Loader/Loader";

import { CategoryItem } from "./types/types";
import CollectionImagesCard from "./components/CollectionImagesCard";

const CollectionPage = () => {
  const btnTitle = "Смотреть";
  const [page, setPage] = useState(1);
  const { category = "" } = useParams<string>();
  const [productsData, setProductsData] = useState({
    category: category,
    page: 1,
  });
  const {
    data = [],
    isLoading,
    isError,
  } = useFetchProductByCollectionTypeQuery(productsData);
  const categories: CategoryItem[] = data?.result || [];
  const totalCount = categories?.length;
  useEffect(() => {
    setProductsData({
      ...productsData,
      page,
    });
  }, [page]);

  if (isLoading) {
    return <Loader center="center" />;
  }

  if (isError) {
    return <Error center="center" />;
  }
  const links = [
    { title: "Главная", path: MAIN_PAGE },
    { title: "Товары", path: CATEGORIES_PAGE },
    { title: "Коллекция", path: `${window.location.pathname}` },
  ];

  return (
    <div className={classes.mainDiv}>
      <BreadCrumbs links={links} />
      <Container sx={{ flexGrow: 1 }}>
        <Grid className={classes.mainGrid} container>
          <Grid className={classes.allProdBlock} item xs={12} sm={12} md={12}>
            <div className={classes.selectBlock}>
              <h2 className={classes.mediumH}>Коллекция</h2>
              {/* <Select /> */}
            </div>
          </Grid>
          <div className={classes.responsiveH}>
            <h2>Коллекция</h2>
          </div>
          {categories.length !== 0 ? (
            categories.map((item, index) => (
              <Grid
                key={item.category_id}
                item
                xs={6}
                sm={4}
                md={4}
                sx={{ mb: "30px" }}
              >
                <CollectionImagesCard
                  btnTitle={btnTitle}
                  item={item}
                  type={category}
                />
                <h4
                  style={{
                    fontWeight: 400,
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  {item.category_title}
                </h4>
              </Grid>
            ))
          ) : (
            <div style={{ margin: "0 auto" }}>В коллекции пусто!</div>
          )}
          <Grid item xs={12} md={12}>
            <CategoryPagination totalCount={totalCount} setPage={setPage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CollectionPage;
