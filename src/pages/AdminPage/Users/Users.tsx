import { useState } from "react";

import SideBar from "../components/SideBar/SideBar";
import Profile from "../components/Profile/Profile";
import Widget from "../components/Widget/Widget";
import TableStats from "../components/TableStats/TableStats";
import List from "../components/List/List";

import { Pagination } from "../../../components";

import { ADMIN_PAGE_USERS } from "../../../utils/path";

import { TableTypes } from "../../../types/adminTypes/tableTypes";

import { separateList } from "../../../utils/separateList";

import { useFetchUsersStatsQuery } from "../../../store/features/Admin/usersStatisticsQuery";
import { useFetchAllStatQuery } from "../../../store/features/Admin/allStatQuery";
import { useFetchPopularProductsQuery } from "../../../store/features/Admin/productStatisticsQuery";

import classes from "./Users.module.scss";

const Users = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("createDate");

  const { data: users } = useFetchUsersStatsQuery({
    page,
    sort,
  });
  const { data: popularUsers, isSuccess: isPopularUsersSuccess } =
    useFetchPopularProductsQuery("");
  const { data: stats = {} } = useFetchAllStatQuery("");
  const popularUserList = separateList(
    isPopularUsersSuccess && popularUsers.result
  );
  const totalCount = users?.result.count;
  return (
    <div className={classes.users}>
      <SideBar />
      <div className={classes.usersContainer}>
        <div className={classes.header}>
          <div className={classes.headerLeft}>
            <div className={classes.widgets}>
              <Widget
                widget={{
                  widgetStat: stats?.result?.lastDateNewUsers || 0,
                  widgetTitle: "новых пользователей",
                }}
              />
            </div>
            <div className={classes.popularUsers}>
              {isPopularUsersSuccess && (
                <List
                  title={"Постоянные пользователи"}
                  itemsList={popularUserList || []}
                />
              )}
            </div>
          </div>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>
        <div className={classes.usersContent}>
          <div className={classes.left}>
            <div className={classes.tableContainer}>
              <TableStats
                setSort={setSort}
                navigateToPage={ADMIN_PAGE_USERS}
                type={TableTypes.USERS}
                rows={users?.result.data || []}
              />
            </div>
            <Pagination totalCount={totalCount} setPage={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
