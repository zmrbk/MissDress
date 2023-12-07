import { FC, useState } from "react";

import EditBtn from "../EditBtn/EditBtn";

import banner from "../../../../assets/adminPage/banner.png";

import classes from "./AdvertisingCard.module.scss";

const AdvertisingCard: FC = () => {
  const [advertisingName] = useState<string>("Реклама тренажерного зала");
  return (
    <div className={classes.advertisingCard}>
      <div className={classes.header}>
        <h5 className={classes.advertisingCardName}>{advertisingName}</h5>
        <div className={classes.startAdBtn}>
          <EditBtn>Запустить</EditBtn>
        </div>
      </div>
      <div className={classes.banner}>
        <img src={banner} alt="" />
      </div>
      <div className={classes.editBanner}>
        <EditBtn>Редактировать</EditBtn>
      </div>
    </div>
  );
};

export default AdvertisingCard;
