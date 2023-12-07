import { FC, useState } from "react";

import vector from "../../../assets/categoriesPage/Vector.svg";
import vectorfull from "../../../assets/categoriesPage/Vectorfull.svg";

import classes from "../CategoryPage.module.scss";

interface IProps {
  setSort: (value: string) => void;
}

const Select: FC<IProps> = ({ setSort }) => {
  const [openDd, setOpenDd] = useState(false);

  const sort = [
    {
      title: "По обновлению",
      path: "/#",
      value: "updateDate",
    },
    {
      title: "По цене",
      path: "/#",
      value: "price",
    },
    {
      title: "По алфавиту",
      path: "/#",
      value: "title",
    },
    {
      title: "По умолчанию",
      path: "/#",
      value: "createDate",
    },
  ];

  return (
    <div className={classes.filterDropDown}>
      <div
        className={classes.filterDropDownBtn}
        onClick={() => setOpenDd(!openDd)}
      >
        <h2 className={classes.filterDropdownTitle}>Сортировать по</h2>
        <img src={openDd ? vectorfull : vector} />
      </div>
      <div
        className={
          openDd
            ? classes.filterDropDownContentOn
            : classes.filterDropdownContent
        }
      >
        <ul>
          {sort?.map((item: any) => {
            return (
              <li
                key={Math.random()}
                className={classes.filterListItem}
                onClick={() => {
                  setSort(item.value);
                  setOpenDd(!openDd);
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Select;
