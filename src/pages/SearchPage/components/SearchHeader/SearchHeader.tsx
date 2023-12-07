import { FC } from "react";

import classes from "./SearchHeader.module.scss";
import Select from "./../../../CategoriesPage/components/Select";

interface SearchHeaderProps {
  quantity: number;
  setSort: (value: string) => void;
}

const SearchHeader: FC<SearchHeaderProps> = ({ quantity, setSort }) => (
  <div className={classes.searchPageHeader}>
    <div className={classes.searchPageHeaderLeft}>
      <h3 className={classes.searchPageTitle}>Результаты поиска</h3>
      <span className={classes.searchPageHeaderQuantity}>
        Найдено {quantity} моделей
      </span>
    </div>
    {quantity > 0 ? <Select setSort={setSort} /> : null}
  </div>
);

export default SearchHeader;
