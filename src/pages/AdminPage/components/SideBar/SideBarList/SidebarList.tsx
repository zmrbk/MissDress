import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ISideBarListTypes } from "../../../../../types/adminTypes/sideBarTypes";

import classes from "./SidebarList.module.scss";

interface SidebarListProps {
  sideBarList: ISideBarListTypes[];
  pathname: string;
}

const SidebarList: FC<SidebarListProps> = ({ sideBarList, pathname }) => {
  const navigate = useNavigate();

  return (
    <ul className={classes.sideBarList}>
      {sideBarList.map((sideBarItem) => {
        return (
          <li
            onClick={() => navigate(sideBarItem.path)}
            className={`${pathname == sideBarItem.path && classes.active}`}
            key={sideBarItem.path}
          >
            <i>{sideBarItem.icon}</i>
            <span>{sideBarItem.title}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarList;
