import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  TableTypes,
  Status,
  IAllStatus,
} from "../../../../types/adminTypes/tableTypes";

import TableHeader from "./TableHeader/TableHeader";
import UsersTableBody from "./UsersTableBody/UsersTableBody";
import ProductsTableBody from "./ProductsTableBody/ProductsTableBody";
import OrdersTableBody from "./OrdersTableBody/OrdersTableBody";

import classes from "./TableStats.module.scss";

interface TableStatsProps {
  type: TableTypes;
  subTitle?: string;
  rows: any[];
  navigateToPage: string;
  setSort: (value: string) => void;
}

const TableStats: FC<TableStatsProps> = ({
  type,
  rows,
  subTitle,
  navigateToPage,
  setSort,
}) => {
  let data;

  const allStatus: IAllStatus = {
    [Status.ACTIVE]: "Active",
    [Status.PENDING]: "Pending",
    [Status.DELETED]: "Deleted",
    [Status.BANNED]: "Banned",
  };

  switch (type) {
    case TableTypes.USERS:
      data = {
        title: "Все пользователи",
        tableCellHeader: [
          { name: "Пользователь" },
          { name: "Номер телефона" },
          { name: "Продажи" },
          { name: "Доход" },
        ],
        component: <UsersTableBody users={rows} allStatus={allStatus} />,
      };
      break;
    case TableTypes.ALL_PRODUCTS:
      data = {
        title: "Все товары",
        subTitle: subTitle || null,
        tableCellHeader: [
          { name: "Наименование товара" },
          { name: "Артикул" },
          { name: "Номер товара" },
          { name: "Продажи" },
          { name: "Доход" },
        ],
        component: <ProductsTableBody products={rows} allStatus={allStatus} />,
      };
      break;
    case TableTypes.CART:
      data = {
        title: "Товары корзины",
        subTitle: subTitle || null,
        tableCellHeader: [
          { name: "ID ордера" },
          { name: "Продажи" },
          { name: "Доход" },
        ],
        component: <OrdersTableBody orders={rows} allStatus={allStatus} />,
      };
      break;

    default:
      data = {
        title: "Все пользователи",
        tableCellHeader: [
          { name: "Пользователь" },
          { name: "Продажи" },
          { name: "Доход" },
        ],
      };
      break;
  }

  return (
    <>
      <TableHeader
        title={data.title}
        subTitle={data?.subTitle}
        setSort={setSort}
      />
      <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {data.tableCellHeader.map((tableCell) => {
                return (
                  <TableCell className={classes.tableCellHeader}>
                    {tableCell.name}
                  </TableCell>
                );
              })}
              <TableCell className={classes.tableCellHeader} align="center">
                Статус
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{data.component}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableStats;
