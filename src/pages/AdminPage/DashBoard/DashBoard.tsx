import { useState } from "react";

import SideBar from "../components/SideBar/SideBar";
import Widget from "../components/Widget/Widget";
import Profile from "../components/Profile/Profile";
import TableStats from "../components/TableStats/TableStats";
import List from "../components/List/List";

import { ADMIN_PAGE_USERS } from "../../../utils/path";

import { useFetchAllStatQuery } from "../../../store/features/Admin/allStatQuery";
import { useFetchPopularProductsQuery } from "../../../store/features/Admin/productStatisticsQuery";
import {
  useFetchUsersStatsQuery,
  useFetchPopularUsersQuery,
} from "../../../store/features/Admin/usersStatisticsQuery";
import { Pagination } from "../../../components";

import { separateList } from "../../../utils/separateList";

import { TableTypes } from "../../../types/adminTypes/tableTypes";

import classes from "./Dashboard.module.scss";

const DashBoard = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("createDate");

  const { data: allUsers } = useFetchUsersStatsQuery({ page });
  const { data: statData = {}, isSuccess: isStatsDataSuccess } =
    useFetchAllStatQuery("");
  const { data: popularProducts = {}, isSuccess: isPopularProductsSuccess } =
    useFetchPopularProductsQuery("");
  const { data: popularUsers, isSuccess: isPopularUsersSuccess } =
    useFetchPopularUsersQuery("");

  const totalCount: number = allUsers?.result.count;
  const popularProductList = separateList(
    isPopularProductsSuccess && popularProducts.result
  );
  const popularUserList = separateList(
    isPopularUsersSuccess && popularUsers.result
  );
  const stats = isStatsDataSuccess && statData.result;

  return (
    <div className={classes.dashboard}>
      <SideBar />
      <div className={classes.dashboardContainer}>
        <div className={classes.header}>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>
        <div className={classes.dashboardContent}>
          <div className={classes.left}>
            <div className={classes.widgetsContainer}>
              <h3 className={classes.widgetsTitle}>За последние 30 дней</h3>
              <div className={classes.widgets}>
                <Widget
                  widget={{
                    widgetStat: stats.lastDateNewOrderAmount || 0,
                    widgetTitle: "проданных товаров",
                  }}
                />
                <Widget
                  widget={{
                    widgetStat: stats.lastDateNewUsers || 0,
                    widgetTitle: "новых пользователей",
                  }}
                />
                <Widget
                  widget={{
                    widgetStat: stats.lastDateNewOrderPrices || 0,
                    widgetTitle: "полученный доход",
                  }}
                />
              </div>
            </div>

            <div className={classes.tableContainer}>
              <TableStats
                setSort={setSort}
                navigateToPage={ADMIN_PAGE_USERS}
                type={TableTypes.USERS}
                rows={allUsers?.result.data || []}
              />
            </div>
            <Pagination totalCount={totalCount} setPage={setPage} />
          </div>
          <div className={classes.right}>
            {isPopularProductsSuccess && (
              <div className={classes.popularProducts}>
                <List
                  title={"Популярные товары"}
                  itemsList={popularProductList || []}
                />
              </div>
            )}
            {isPopularUsersSuccess && (
              <div className={classes.popularUsers}>
                <List
                  title={"Постоянные пользователи"}
                  itemsList={popularUserList || []}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
