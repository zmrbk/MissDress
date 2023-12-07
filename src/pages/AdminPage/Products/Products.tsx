import Widget from "../components/Widget/Widget";
import List from "../components/List/List";
import Profile from "../components/Profile/Profile";
import SideBar from "../components/SideBar/SideBar";
import Collection from "../components/CollectionItem/CollectionItem";

import { useFetchPopularProductsQuery } from "../../../store/features/Admin/productStatisticsQuery";

import { separateList } from "../../../utils/separateList";

import classes from "./Products.module.scss";

const Products = () => {
  const { data: popularProducts = {}, isSuccess: isPopularProductsSuccess } =
    useFetchPopularProductsQuery("");

  const popularProductList = separateList(
    isPopularProductsSuccess && popularProducts.result
  );
  return (
    <div className={classes.products}>
      <SideBar />

      <div className={classes.productsContainer}>
        <div className={classes.header}>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>
        <div className={classes.productsContent}>
          <div className={classes.productsContentStats}>
            <div className={classes.widgets}>
              <Widget
                widget={{
                  widgetStat: "1500",
                  widgetTitle: "проданных товаров",
                }}
              />
            </div>
            <div className={classes.popularUsers}>
              <List
                title={"Постоянные пользователи"}
                itemsList={popularProductList || []}
              />
            </div>
          </div>

          <div className={classes.collections}>
            <Collection path={"winter"} title={"Зимняя коллекция"} />
            <Collection path={"summer"} title={"Летняя коллекция"} />
            <Collection path={"autumn"} title={"Осенняя коллекция"} />
            <Collection path={"spring"} title={"Летняя коллекция"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
