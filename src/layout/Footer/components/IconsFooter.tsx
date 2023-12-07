import React, { useEffect, useState } from "react";

import { IFooterIcons } from "../../../types/FooterTypes/FooterTypes";
import whatsAppIcon from "../../../assets/Footer/Whatsapp.svg";
import telegramIcon from "../../../assets/Footer/telegram.svg";
import instagramIcon from "../../../assets/Footer/instagram.svg";
import facebookIcon from "../../../assets/Footer/facebook.svg";

import classes from "../style.module.scss";

const IconsFooter = () => {
  const [icons, setIcons] = useState<IFooterIcons[]>([]);

  useEffect(() => {
    setIcons([
      {
        icon: whatsAppIcon,
        path: `https://api.whatsapp.com/send/?phone=996555569965`,
      },
      {
        icon: telegramIcon,
        path: `https://t.me/missDress`,
      },
      {
        icon: instagramIcon,
        path: `https://www.youtube.com/results?search_query=missdress`,
      },
      {
        icon: facebookIcon,
        path: `https://t.me/missDress`,
      },
    ]);
  }, []);

  return (
    <div className={classes.iconsMin}>
      {icons.map((item, index) => (
        <a target="_blank" key={index} href={item.path} rel="noreferrer">
          <img src={item.icon} alt="" />
        </a>
      ))}
    </div>
  );
};

export default IconsFooter;
