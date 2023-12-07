import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../../../assets/icons/logoIcon.svg";
import { ReactComponent as DashBoardIcon } from "../../../../assets/adminPage/sideBarIcons/dashboardIcon.svg";
import { ReactComponent as UserIcon } from "../../../../assets/adminPage/sideBarIcons/userIcon.svg";
import { ReactComponent as ProductsIcon } from "../../../../assets/adminPage/sideBarIcons/productsIcon.svg";
import { ReactComponent as SalesIcon } from "../../../../assets/adminPage/sideBarIcons/salesIcon.svg";
import { ReactComponent as CartIcon } from "../../../../assets/adminPage/sideBarIcons/cartIcon.svg";
import { ReactComponent as AdIcon } from "../../../../assets/adminPage/sideBarIcons/adIcon.svg";
import { ReactComponent as ChatIcon } from "../../../../assets/adminPage/sideBarIcons/chatIcon.svg";
import { ReactComponent as ExitIcon } from "../../../../assets/header/loginIcon.svg";

import { ISideBarListTypes } from "../../../../types/adminTypes/sideBarTypes";

import {
  ADMIN_PAGE_AD,
  ADMIN_PAGE_CART,
  ADMIN_PAGE_CHAT,
  ADMIN_PAGE_DASHBOARD,
  ADMIN_PAGE_PRODUCTS,
  ADMIN_PAGE_SALES,
  ADMIN_PAGE_USERS,
} from "../../../../utils/path";

import SidebarList from "./SideBarList/SidebarList";

import classes from "./SideBar.module.scss";
const sidebarList: ISideBarListTypes[] = [
  {
    icon: <DashBoardIcon />,
    title: "Dashboard",
    path: ADMIN_PAGE_DASHBOARD,
  },
  {
    icon: <UserIcon />,
    title: "Пользователи",
    path: ADMIN_PAGE_USERS,
  },
  {
    icon: <ProductsIcon />,
    title: "Товары",
    path: ADMIN_PAGE_PRODUCTS,
  },
  {
    icon: <SalesIcon />,
    title: "Продажи",
    path: ADMIN_PAGE_SALES,
  },
  {
    icon: <CartIcon />,
    title: "Корзина",
    path: ADMIN_PAGE_CART,
  },
  {
    icon: <AdIcon />,
    title: "Реклама",
    path: ADMIN_PAGE_AD,
  },
  {
    icon: <ChatIcon />,
    title: "Чат",
    path: ADMIN_PAGE_CHAT,
  },
];

const SideBar = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate();
  return (
    <div className={classes.sideBarWrapper}>
      <div className={classes.sideBar}>
        <div className={classes.top}>
          <i>
            <LogoIcon />
          </i>
        </div>
        <div className={classes.center}>
          <SidebarList sideBarList={sidebarList} pathname={pathname} />
        </div>
        <div className={classes.bottom}>
          <button
            className={classes.exitButton}
            onClick={() => navigation("/")}
          >
            <i>
              <ExitIcon />
            </i>
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
