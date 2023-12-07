import React from "react";
import { Link } from "react-router-dom";

import {
  ADMIN_PAGE_DASHBOARD,
  ORDERS_PAGE,
  PROFILE_PAGE,
} from "../../../utils/path";

import classes from "./HeaderNavProfile.module.scss";

const navs = [
  {
    title: "Профиль",
    path: PROFILE_PAGE,
  },
  {
    title: "Заказы",
    path: ORDERS_PAGE,
  },
  {
    title: "Выйти",
  },
];

interface HeaderNavProfileProps {
  setUserEnter: (user: boolean) => void;
}

const HeaderNavProfile: React.FC<HeaderNavProfileProps> = ({
  setUserEnter,
}) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const handleRemoveToken = () => {
    if (localStorage.getItem("accessToken")) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      localStorage.removeItem("city");
      localStorage.removeItem("country");
      localStorage.removeItem("contactInfoId");
      setUserEnter(false);
    }
  };
  return (
    <div className={classes.headerProfileNav}>
      <ul>
        {navs.map((nav) => {
          return (
            <li key={nav.title}>
              {nav.path ? (
                <Link to={nav.path}>{nav.title}</Link>
              ) : (
                <button onClick={handleRemoveToken}>{nav.title}</button>
              )}
            </li>
          );
        })}
        {user.role !== "USER" && (
          <li>
            <Link to={ADMIN_PAGE_DASHBOARD}>Админ</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default HeaderNavProfile;
