import { FC } from "react";
import { useNavigate } from "react-router-dom";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Button } from "../../../../../components/common";

import { IProductsStat } from "../../../../../types/productsTypes/productsTypes";
import { colors } from "../../../../../types/colorTypes/colorTypes";
import { IAllStatus } from "../../../../../types/adminTypes/tableTypes";

import classes from "../TableStats.module.scss";

interface ProductsTableBodyProps {
  products: IProductsStat[];
  allStatus: IAllStatus;
}

const ProductsTableBody: FC<ProductsTableBodyProps> = ({
  products,
  allStatus,
}) => {
  const navigate = useNavigate();

  if (!products.length) {
    return <strong>not found </strong>;
  }

  return (
    <>
      {products.map((row: IProductsStat) => (
        <TableRow
          key={row.id}
          className={classes.tableRow}
          onClick={() => navigate(row.productId)}
        >
          <TableCell
            className={`${classes.tableCell} ${classes.tableCellName}`}
          >
            {row.product.title}
          </TableCell>
          <TableCell className={classes.tableCell}>
            {row.product.article}
          </TableCell>
          {row.productId && (
            <TableCell className={classes.tableCell}>{row.productId}</TableCell>
          )}

          <TableCell className={classes.tableCell}>
            {row.allTotalCount} продаж
          </TableCell>
          <TableCell className={classes.tableCell}>
            {row.allAmount} доход
          </TableCell>
          <TableCell align="center" className={classes.tableCell}>
            <span
              className={`${classes.status} ${
                classes[allStatus[`${row.status}`]]
              }`}
            >
              {allStatus[`${row.status}`]}
            </span>
          </TableCell>
          <TableCell align="center" className={classes.tableCell}>
            <Button
              onClick={(e) => e.stopPropagation()}
              style={{
                padding: "5px",
                backgroundColor: colors.deleteBtn,
                color: colors.blackText,
              }}
            >
              Удалить
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default ProductsTableBody;
