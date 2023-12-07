import React, { FC } from "react";

import classes from "./EditBtn.module.scss";

interface EditBtnProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const EditBtn: FC<EditBtnProps> = ({ children, onClick }) => (
  <>
    <button className={classes.editBtn} onClick={onClick}>
      {children}
    </button>
  </>
);

export default EditBtn;
