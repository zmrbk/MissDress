import React, { FC } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useNavigate } from "react-router-dom";

import { IUser } from "../../../../../types/usersTypes/usersTypes";
import { IAllStatus, Status } from "../../../../../types/adminTypes/tableTypes";

import { Button } from "../../../../../components/common";

import { colors } from "../../../../../types/colorTypes/colorTypes";

import classes from "../TableStats.module.scss";
import { useDeleteUserMutation } from "../../../../../store/features/Admin/usersStatisticsQuery";
interface UsersTableBodyProps {
  users: IUser[];
  allStatus: IAllStatus;
}

const UsersTableBody: FC<UsersTableBodyProps> = ({ users, allStatus }) => {
  const navigate = useNavigate();
  const [deleteUserTrigger] = useDeleteUserMutation();

  const deleteUser = (e: React.MouseEvent<HTMLButtonElement>, id: any) => {
    e.stopPropagation();
    deleteUserTrigger(id);
  };
  return (
    <>
      {users.map((row: IUser) => (
        <TableRow
          key={row.user_id}
          className={classes.tableRow}
          onClick={() => navigate(row.user_id)}
        >
          <TableCell
            className={`${classes.tableCell} ${classes.tableCellName}`}
          >
            {`${row.user_first_name} ${row.user_last_name}`}
          </TableCell>
          <TableCell className={classes.tableCell}>
            {row.user_phone_number}
          </TableCell>

          <TableCell className={classes.tableCell}>
            {row.price || 0} продаж
          </TableCell>
          <TableCell className={classes.tableCell}>
            {row.amount || 0} доход
          </TableCell>
          <TableCell align="center" className={classes.tableCell}>
            <span
              className={`${classes.status} ${
                classes[allStatus[`${row.user_status}`]]
              }`}
            >
              {allStatus[`${row.user_status}`]}
            </span>
          </TableCell>
          <TableCell align="center" className={classes.tableCell}>
            {row.user_status == Status.DELETED ? (
              <Button
                onClick={(e) => deleteUser(e, row.user_id)}
                style={{
                  padding: "5px",
                  backgroundColor: colors.deleteBtn,
                  color: colors.blackText,
                }}
              >
                Восстановить
              </Button>
            ) : (
              <Button
                onClick={(e) => deleteUser(e, row.user_id)}
                style={{
                  padding: "5px",
                  backgroundColor: colors.deleteBtn,
                  color: colors.blackText,
                }}
              >
                Удалить
              </Button>
            )}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default UsersTableBody;
