import { FC } from "react";
import { Link } from "react-router-dom";

import { IHeaderNav } from "../../../types/headerTypes/headerTypes";

import { BURGER } from "../../../utils/modalHelper";

import classes from "./HeaderNav.module.scss";

interface NavItemsProps {
  navItems: IHeaderNav[];
  currentOpen: string | null;
}

const HeaderNav: FC<NavItemsProps> = ({ navItems, currentOpen }) => (
  <nav
    className={`
      ${classes.headerNav} 
      ${currentOpen === BURGER && classes.active}`}
  >
    <ul className={classes.headerNavInner}>
      {navItems.map((nav) => (
        <li key={nav.path}>
          <Link
            to={nav.path}
            title={nav.title}
            className={
              window.location.pathname === nav.path ? classes.link_active : ""
            }
          >
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderNav;
