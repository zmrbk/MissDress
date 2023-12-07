import { FC } from "react";

import { ISocialTypes } from "../../../types/socialTypes/socialTypes";

import classes from "./SocialList.module.scss";

interface SocialListProps {
  socials: ISocialTypes[];
}

const SocialList: FC<SocialListProps> = ({ socials }) => {
  return (
    <ul className={classes.socialList}>
      {socials.map((socialItem: ISocialTypes) => (
        <li className={classes.socialListItem}>
          {socialItem.icon}
          <span>{socialItem.contacts}</span>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
