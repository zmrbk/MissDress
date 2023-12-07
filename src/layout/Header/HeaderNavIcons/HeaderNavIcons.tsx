import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CART_PAGE, FAVORITES_PAGE } from "../../../utils/path";

import { ReactComponent as SearchIcon } from "../../../assets/header/searchIcon.svg";
import { ReactComponent as FavIcon } from "../../../assets/header/favIcon.svg";
import { ReactComponent as CartIcon } from "../../../assets/header/cartIcon.svg";
import { ReactComponent as LoginIcon } from "../../../assets/header/loginIcon.svg";
import { ReactComponent as AccIcon } from "../../../assets/header/accountIcon.svg";

import HeaderNavProfile from "../HeaderNavProfile/HeaderNavProfile";

import SearchInput from "../../../components/SearchInput/SearchInput";

import { MODAL, PROFILE_NAV, SEARCH } from "../../../utils/modalHelper";

import { useFetchProductFavoritesQuery } from "../../../store/features/Product/productFavorites/productFavoritesQuery";

import { useGetProductFromCardQuery } from "../../../store/features/Cart/cartQuery";

import classes from "./HeaderNavIcons.module.scss";

interface HeaderNavIconsProps {
  isUserEnter: boolean;
  currentOpen: string | null;
  toggleCurrent: (value: string) => () => void;
  setUserEnter: any;
}

const HeaderNavIcons: FC<HeaderNavIconsProps> = ({
  isUserEnter,
  toggleCurrent,
  currentOpen,
  setUserEnter,
}) => {
  const { data = [], refetch } = useFetchProductFavoritesQuery("");
  const { data: productsCart = {} } = useGetProductFromCardQuery();
  const countFavorites = data.result?.count || 0;
  const countProductsCart = productsCart?.result?.products.length || 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentOpen == null && localStorage.getItem("accessToken")) refetch();
  }, [currentOpen]);

  return (
    <div className={classes.headerNavIcons}>
      <div className={classes.headerSearch}>
        <i className={classes.icon} onClick={toggleCurrent(SEARCH)}>
          <SearchIcon />
        </i>
        {currentOpen === SEARCH && <SearchInput />}
      </div>

      <div className={classes.headerFav}>
        <Link to={FAVORITES_PAGE}>
          <i className={classes.icon}>
            <FavIcon />
            {isUserEnter && countFavorites > 0 && (
              <span className={classes.counter}>{countFavorites}</span>
            )}
          </i>
        </Link>
      </div>

      <div className={classes.headerCart}>
        <i className={classes.icon} onClick={() => navigate(CART_PAGE)}>
          <CartIcon />
          {isUserEnter && countProductsCart > 0 && (
            <span className={classes.counter}>{countProductsCart}</span>
          )}
        </i>
      </div>

      {!isUserEnter ? (
        <div className={classes.headerLogin}>
          <i className={classes.icon} onClick={toggleCurrent(MODAL)}>
            <LoginIcon />
          </i>
        </div>
      ) : (
        <div className={classes.headerAcc}>
          <i className={classes.icon} onClick={toggleCurrent(PROFILE_NAV)}>
            <AccIcon />
          </i>
          {currentOpen === PROFILE_NAV && (
            <HeaderNavProfile setUserEnter={setUserEnter} />
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderNavIcons;
