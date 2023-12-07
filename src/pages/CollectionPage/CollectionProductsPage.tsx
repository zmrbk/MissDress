import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";
import Select from "../CategoriesPage/components/Select";

import { useFetchProductByCategoryQuery } from "../../store/features/Product/productGetAll/ProductGetAllQuery";
import { CATEGORIES_PAGE, MAIN_PAGE } from "../../utils/path";

import classes from "../CategoriesPage/CategoryPage.module.scss";

import CategoryPagination from "../../components/Pagination/CategoryPagination";
import { IItemCard } from "../../components/ProductCard/types";
import { Loader } from "../../utils/Loader/Loader";
import { Error } from "../../utils/Error/Error";
import { BreadCrumbs } from "../../utils/BreadCrumbs/BreadCrumbs";

const CollectionProductsPage = () => {
  const btnTitle = "Открыть";
  const { category = "", type } = useParams<string>();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("createDate");
  const [productsData, setProductsData] = useState({
    categoryId: category,
    collectionType: type,
    take: 6,
    page: 1,
    sort: "createDate",
  });
  const {
    data = [],
    isLoading,
    isError,
  } = useFetchProductByCategoryQuery(productsData);
  const collectionItems: IItemCard[] = data.result?.data || [];
  const dressType = collectionItems[0]?.category?.title || "";
  const totalCount = data?.result?.count;

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isLoading]);

  useEffect(() => {
    setProductsData({
      ...productsData,
      page,
    });
  }, [page]);

  useEffect(() => {
    setProductsData({
      ...productsData,
      sort,
    });
  }, [sort]);

  if (isLoading) {
    return <Loader center="center" />;
  }

  if (isError) {
    return <Error center="center" />;
  }
  const links = [
    { title: "Главная", path: MAIN_PAGE },
    { title: "Товары", path: CATEGORIES_PAGE },
    { title: "Коллекция", path: `/collection/${type}` },
    { title: dressType },
  ];

  return (
    <div className={classes.mainDiv}>
      <BreadCrumbs links={links} />
      <Container sx={{ flexGrow: 1 }}>
        <Grid className={classes.mainGrid} container>
          <Grid className={classes.allProdBlock} item xs={12} sm={12} md={12}>
            <div className={classes.selectBlock}>
              <h2 className={classes.mediumH}>{dressType}</h2>
              <Select setSort={setSort} />
            </div>
          </Grid>
          <Grid container spacing={4}>
            {collectionItems.length > 0 ? (
              collectionItems.map((item, index) => (
                <Grid key={index} item xs={6} md={4}>
                  <ProductCard btnTitle={btnTitle} item={item} />
                </Grid>
              ))
            ) : (
              <div style={{ margin: "0 auto" }}>В категории пусто!</div>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            <CategoryPagination totalCount={totalCount} setPage={setPage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CollectionProductsPage;
