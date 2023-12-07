import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useGetCityQuery } from "../../store/features/City/CityQuery";
import { useGetCountryQuery } from "../../store/features/Country/CountryQuery";

import { ReactComponent as LogoIcon } from "../../assets/icons/logoIcon.svg";
import { ReactComponent as BurgerIcon } from "../../assets/header/burgerIcon.svg";
import {
  ABOUT_PAGE,
  CATEGORIES_PAGE,
  CONTACTS_PAGE,
  DELIVERY_PAGE,
  NEWS_PAGE,
} from "../../utils/path";
import { MAIN_PAGE } from "../../utils/path";
import { IHeaderNav } from "../../types/headerTypes/headerTypes";

import { Modal } from "../../components";

import SignInForm from "../../components/Modal/SignInForm/SignInForm";
import LoginInForm from "../../components/Modal/LoginInForm/LoginInForm";

import { BURGER, MODAL } from "../../utils/modalHelper";

import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderNavIcons from "./HeaderNavIcons/HeaderNavIcons";
import classes from "./Header.module.scss";

const navItems: IHeaderNav[] = [
  {
    title: "Товары",
    path: CATEGORIES_PAGE,
  },
  {
    title: "О нас",
    path: ABOUT_PAGE,
  },
  {
    title: "Доставка",
    path: DELIVERY_PAGE,
  },
  {
    title: "Контакты",
    path: CONTACTS_PAGE,
  },
  {
    title: "Новости",
    path: NEWS_PAGE,
  },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // localStorage
  const { data: getCountry = [], isSuccess: countrySuccess } =
    useGetCountryQuery("");
  const { data: getCity = [], isSuccess: citySuccess } = useGetCityQuery("");
  // localStorage
  const [isSignIn, setSignIn] = useState<boolean>(false);
  const [isUserEnter, setUserEnter] = useState<boolean>(
    localStorage.getItem("accessToken") ? true : false
  );
  const [currentOpen, setCurrentOpen] = useState<string | null>(null);

  const handleClickLogo = () => navigate(MAIN_PAGE);
  const closeCurrent = () => setCurrentOpen(null);

  const toggleCurrent = (current: string) => {
    return () => {
      if (currentOpen === current) return closeCurrent();
      setCurrentOpen(current);
    };
  };

  useEffect(() => {
    if (isUserEnter) {
      if (citySuccess && countrySuccess) {
        localStorage.setItem("city", JSON.stringify(getCity.result));
        localStorage.setItem("country", JSON.stringify(getCountry.result));
      }
    }
  }, [countrySuccess, citySuccess, isUserEnter]);

  useEffect(() => {
    return () => closeCurrent();
  }, [location.pathname]);

  return (
    <>
      <header className={classes.header}>
        <div className={`${classes.container} ${classes.headerInner}`}>
          <div className={classes.leftSideBlock}>
            <div
              className={classes.burgerMenuBtn}
              onClick={toggleCurrent(BURGER)}
            >
              <i>
                <BurgerIcon />
              </i>
            </div>
            <div className={classes.headerLogo} onClick={handleClickLogo}>
              <i>
                <LogoIcon />
              </i>
            </div>
          </div>

          <HeaderNav navItems={navItems} currentOpen={currentOpen} />
          <HeaderNavIcons
            currentOpen={currentOpen}
            isUserEnter={isUserEnter}
            toggleCurrent={toggleCurrent}
            setUserEnter={setUserEnter}
          />
        </div>
      </header>

      {!isSignIn && currentOpen === MODAL ? (
        <Modal isModalOpen={MODAL === currentOpen} closeModal={closeCurrent}>
          <LoginInForm setSignIn={setSignIn} setUserEnter={setUserEnter} />
        </Modal>
      ) : (
        <Modal isModalOpen={MODAL === currentOpen} closeModal={closeCurrent}>
          <SignInForm setUserEnter={setUserEnter} setSignIn={setSignIn} />
        </Modal>
      )}
    </>
  );
};

export default Header;
