import React from "react";
import { Avatar } from "@mui/material";

import { ReactComponent as NotificationsIcon } from "../../../../assets/icons/notificationsIcon.svg";

import { useFetchUserInfoQuery } from "../../../../store/features/Admin/usersStatisticsQuery";

import adminAvatar from "../../../../assets/adminPage/adminIcons/adminAvatar.png";

import classes from "./Profile.module.scss";

const Profile = () => {
  const { data, isLoading } = useFetchUserInfoQuery("");
  const user = data?.result;

  if (isLoading) {
    return <>Загрузка...</>;
  }

  return (
    <div className={classes.profile}>
      <Avatar alt="Манки Д. Луффи" src={adminAvatar} />
      <div className={classes.profileInfo}>
        <h5 className={classes.name}>
          {user?.firstName + " " + user?.lastName}
        </h5>
        <p className={classes.role}>
          {user?.role === "SUPER_ADMIN" && "Супер Админ"}
        </p>
      </div>
      <i className={classes.icon}>
        <NotificationsIcon />
      </i>
    </div>
  );
};

export default Profile;
