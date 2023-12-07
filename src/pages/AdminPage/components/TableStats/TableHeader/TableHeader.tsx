import { FC } from "react";

import { colors } from "../../../../../types/colorTypes/colorTypes";

import { InputField } from "../../../../../components/common";

import Select from "../../../../CategoriesPage/components/Select";

import classes from "./TableHeader.module.scss";

interface TableHeaderProps {
  title: string;
  subTitle?: string | null;
  setSort: (value: string) => void;
}

const TableHeader: FC<TableHeaderProps> = ({ title, subTitle, setSort }) => (
  <div className={classes.tableHeader}>
    <div className={classes.title}>
      <h3>{title}</h3>
      {subTitle && <span>{subTitle}</span>}
    </div>

    <div className={classes.navs}>
      <div className={classes.inputBlock}>
        <InputField
          color={colors.secondary}
          placeholder={
            title.toLowerCase() == "все пользователи"
              ? "Поиск пользователей"
              : "Поиск товаров"
          }
          type={"text"}
        />
      </div>

      <div className={classes.sort}>
        <Select setSort={setSort} />
      </div>
    </div>
  </div>
);

export default TableHeader;
