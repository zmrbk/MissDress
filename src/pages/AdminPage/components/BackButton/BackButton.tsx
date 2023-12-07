import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "../../../../assets/adminPage/adminIcons/arrowIcon.svg";

import classes from "./BackButton.module.scss";

interface BackButtonProps {
  path: string;
  children: React.ReactNode;
}

const BackButton: FC<BackButtonProps> = ({ path, children }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className={classes.backButton}>
      <i>
        <ArrowIcon />
      </i>
      <span>{children}</span>
    </div>
  );
};

export default BackButton;
