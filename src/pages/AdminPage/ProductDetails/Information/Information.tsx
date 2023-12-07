import { FC } from "react";

import { IProduct } from "../../../../types/productsTypes/productsTypes";
import { colors } from "../../../../types/colorTypes/colorTypes";

import EditBtn from "../../components/EditBtn/EditBtn";

import { Button } from "../../../../components/common";

import classes from "./Information.module.scss";

interface InformationProps {
  product: IProduct;
}

const Information: FC<InformationProps> = ({ product }) => {
  return (
    <div className={classes.info}>
      <div className={classes.header}>
        <h4>О товаре:</h4>
        <div className={classes.editBtn}>
          <EditBtn>Редактировать</EditBtn>
        </div>
      </div>
      <p className={classes.description}>{product.description}</p>
      <div className={classes.deleteBtn}>
        <Button
          style={{
            backgroundColor: colors.primary,
            color: colors.blackText,
          }}
        >
          Удалить товар
        </Button>
      </div>
    </div>
  );
};

export default Information;
