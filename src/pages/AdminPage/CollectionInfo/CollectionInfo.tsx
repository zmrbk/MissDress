import { useState } from "react";
import { useParams } from "react-router-dom";

import SideBar from "../components/SideBar/SideBar";
import Widget from "../components/Widget/Widget";
import List from "../components/List/List";
import Profile from "../components/Profile/Profile";
import TableStats from "../components/TableStats/TableStats";

import { Pagination } from "../../../components";

import {
  useFetchPopularProductsQuery,
  useFetchProductsStatQuery,
} from "../../../store/features/Admin/productStatisticsQuery";

import { ADMIN_PAGE_PRODUCTS } from "../../../utils/path";

import { separateList } from "../../../utils/separateList";

import { Status, TableTypes } from "../../../types/adminTypes/tableTypes";

import { orderHelper } from "../../../utils/orderHelper";

import classes from "./CollectionInfo.module.scss";

const listOfProducts = [
  {
    name: "Benito Kate Wrap Dress",
    sales: "254 продаж",
    income: "1.2m+ доход",
  },
  {
    name: "JUSTONE Shy Embo Can Skirt",
    sales: "254 продаж",
    income: "1.2m+ доход",
  },
  {
    name: "Envy Look Button Eco Dress",
    sales: "159 продаж",
    income: "790k+ доход",
  },
];

const CollectionInfo = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("createDate");

  const { data: products = [], isSuccess } = useFetchProductsStatQuery({
    collection: id,
    page,
  });
  const { data: popularProducts = {}, isSuccess: isPopularProductsSuccess } =
    useFetchPopularProductsQuery("");
  const popularProductList = separateList(
    isPopularProductsSuccess && popularProducts.result
  );
  const totalCount = 5;

  console.log("product>>>>>", products);

  return (
    <div className={classes.collectionInfo}>
      <SideBar />
      <div className={classes.collectionInfoContainer}>
        <div className={classes.header}>
          <div className={classes.headerLeft}>
            <div className={classes.widgets}>
              <Widget
                widget={{
                  widgetStat: "1500",
                  widgetTitle: "проданных товаров",
                }}
              />
            </div>
            <div className={classes.popularProducts}>
              <List
                title={"Популярные товары"}
                itemsList={popularProductList || []}
              />
            </div>
          </div>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>
        <div className={classes.collectionInfoContent}>
          <div className={classes.left}>
            <div className={classes.tableContainer}>
              <TableStats
                navigateToPage={ADMIN_PAGE_PRODUCTS}
                type={TableTypes.ALL_PRODUCTS}
                rows={products.result || []}
                subTitle={"Весенняя коллекция"}
                setSort={setSort}
              />
            </div>
            <Pagination totalCount={totalCount} setPage={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;
