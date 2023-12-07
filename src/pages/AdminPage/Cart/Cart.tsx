import { useState } from "react";

import SideBar from "../components/SideBar/SideBar";
import Profile from "../components/Profile/Profile";
import TableStats from "../components/TableStats/TableStats";

import { ADMIN_PAGE_USERS } from "../../../utils/path";

import { TableTypes } from "../../../types/adminTypes/tableTypes";

import { orderHelper } from "../../../utils/orderHelper";

import classes from "../Users/Users.module.scss";

const Cart = () => {
  const [sort, setSort] = useState("createDate");

  return (
    <div className={classes.users}>
      <SideBar />
      <div className={classes.usersContainer}>
        <div className={classes.header}>
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
                type={TableTypes.CART}
                rows={orderHelper.result || []}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
