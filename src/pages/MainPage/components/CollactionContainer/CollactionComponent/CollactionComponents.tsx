import React, { FC } from "react";

import classes from "../CollactionComponent/CollactionComponents.module.scss";

interface CollectionProps {
  children: React.ReactNode;
  image: string;
  reverse?: boolean;
}
const CollactionComponents: FC<CollectionProps> = ({
  children,
  image,
  reverse,
}) => {
  return (
    <>
      <div className={classes.block__all}>
        <div className={classes.collection}>
          <div
            className={`${classes.collection__flex} ${
              reverse && classes.reverse
            }`}
          >
            <div className={classes.block}>
              <img className={classes.collection__image} src={image} alt="" />
            </div>
            <div className={classes.block__dav}>
              <h3 className={classes.collection__h3}>{children}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollactionComponents;
