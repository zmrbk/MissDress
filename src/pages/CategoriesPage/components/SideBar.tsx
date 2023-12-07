import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "../CategoryPage.module.scss";

import vector from "../../../assets/categoriesPage/Vector.svg";
import vectorfull from "../../../assets/categoriesPage/Vectorfull.svg";

import { categoryApi } from "../../../store/features/Category/category/categoryQuery";

interface ISetProducts {
  setCategory: (value: number) => void;
}

const SideBar: FC<ISetProducts> = ({ setCategory }) => {
  const [showChild, setShowChild] = useState(false);
  const [show, setShow] = useState(false);

  const { data } = categoryApi.useFetchCategoryQuery("");
  const categories = data?.result;

  return (
    <div onClick={() => setShow(!show)} className={classes.sideBarDiv}>
      <div className={classes.vectorSortCategory}>
        <h1>Категория</h1>
      </div>
      <ul className={classes.ulItems}>
        {categories?.map((item: any) => {
          return (
            <li
              key={item.id}
              className={classes.categoriesListItem}
              onClick={() => {
                item.children?.length === 0 && setCategory(item.id);
              }}
            >
              <NavLink
                to={item.id}
                onClick={() =>
                  item.children?.length > 0 && setShowChild(!showChild)
                }
              >
                {item.title}
              </NavLink>
              {item.children?.length > 0 && (
                <img
                  className={classes.vector}
                  src={showChild ? vectorfull : vector}
                  alt=""
                  onClick={() => setShowChild(!showChild)}
                />
              )}
              <ul>
                {item.children?.length > 0 &&
                  showChild &&
                  item.children.map((el: any) => {
                    return (
                      <li
                        key={el.id}
                        className={classes.childrenListItem}
                        onClick={() => setCategory(el.id)}
                      >
                        <NavLink to={el.id}>{el.title}</NavLink>
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
