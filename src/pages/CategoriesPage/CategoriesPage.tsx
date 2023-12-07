import React, { useEffect, useState } from "react";

import { Container, Grid } from "@mui/material";

import { Link } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";

import SideBar from "../CategoriesPage/components/SideBar";

import CategoryPagination from "../../components/Pagination/CategoryPagination";

import {
  productGetAllApi,
  useFetchProductsByCategoryQuery,
} from "../../store/features/Product/productGetAll/ProductGetAllQuery";
import { BreadCrumbs } from "../../utils/BreadCrumbs/BreadCrumbs";
import { CATEGORIES_PAGE, MAIN_PAGE } from "../../utils/path";

import { Loader } from "../../utils/Loader/Loader";
import { Error } from "../../utils/Error/Error";

import CategoriesDropdown from "./components/CategoriesDropdown";

import Select from "./components/Select";

import classes from "./CategoryPage.module.scss";

const CategoryPage = () => {
  const btnTitle = "Открыть";
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(1);
  const [sort, setSort] = useState("createDate");
  const [productsData, setProductsData] = useState({
    take: 6,
    category: 5,
    page: 1,
    sort: "createDate",
  });
  const { data, isLoading, isError } =
    productGetAllApi.useFetchProductsGetAllQuery(productsData);
  const { data: productsByCategory } =
    useFetchProductsByCategoryQuery(category);
  const items = data?.result.data;
  const totalCount: number = productsByCategory?.result.count;

  useEffect(() => {
    setProductsData({ ...productsData, category: category });
  }, [category]);

  useEffect(() => {
    setProductsData({ ...productsData, page: page });
  }, [page]);

  useEffect(() => {
    setProductsData({ ...productsData, sort: sort });
  }, [sort]);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isLoading]);

  if (isError) {
    return <Error />;
  }
  const links = [
    { title: "Главная", path: MAIN_PAGE },
    { title: "Товары", path: CATEGORIES_PAGE },
  ];
  return (
    <div className={classes.mainDiv}>
      <BreadCrumbs links={links} />
      <Container sx={{ flexGrow: 1 }}>
        <Grid className={classes.mainGrid} container>
          <Grid className={classes.allProdBlock} item xs={12} sm={12} md={12}>
            <div className={classes.selectBlock}>
              <h2 className={classes.mediumH}>Все товары</h2>
              <CategoriesDropdown />
              <Select setSort={setSort} />
            </div>
          </Grid>
          <div className={classes.responsiveH}>
            <h2>Все товары</h2>
          </div>
          <Grid
            sx={{ display: { xs: "none", sm: "block", md: "block" } }}
            item
            xs={6}
            sm={4}
            md={4}
          >
            <SideBar setCategory={setCategory} />
          </Grid>
          {isLoading ? (
            <div style={{ margin: "0 auto" }}>
              <Loader />
            </div>
          ) : (
            <>
              <Grid className={classes.productDiv} item xs={10} sm={8} md={8}>
                {items?.map((item: any) => (
                  <div key={item.id} className={classes.prod}>
                    <ProductCard btnTitle={btnTitle} item={item} />
                  </div>
                ))}
                {items?.length === 0 && (
                  <h2>Нет товаров в данной категории!</h2>
                )}
              </Grid>
              <Grid item xs={12} md={12}>
                <CategoryPagination totalCount={totalCount} setPage={setPage} />
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default CategoryPage;
