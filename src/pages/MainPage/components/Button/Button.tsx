import React, { FC } from "react";

import classes from "../Button/Button.module.scss";
interface ButtonPoros {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: any;
}

const ButtonImage: FC<ButtonPoros> = ({ children, type, onClick }) => (
  <div className={classes.image}>
    <button onClick={onClick} type={type} className={classes.btn}>
      {children}
    </button>
  </div>
);
export default ButtonImage;
