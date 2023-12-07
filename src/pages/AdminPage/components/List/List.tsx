import { FC } from "react";

import { colors } from "../../../../types/colorTypes/colorTypes";

import { Button } from "../../../../components/common";

import classes from "./List.module.scss";
import ProductList from "./ProductList";
import UserList from "./UserList";

interface ListProps {
  title: string;
  itemsList: any[];
}

const List: FC<ListProps> = ({ title, itemsList }) => (
  <div className={classes.list}>
    <h3 className={classes.title}>{title}</h3>
    {itemsList[0]?.product_title ? (
      <ProductList productList={itemsList} />
    ) : (
      <UserList userList={itemsList} />
    )}
    <div className={classes.buttonBox}>
      <Button
        style={{
          backgroundColor: colors.primary,
          color: colors.blackText,
          borderRadius: "18px",
        }}
      >
        Посмотреть все
      </Button>
    </div>
  </div>
);

export default List;
