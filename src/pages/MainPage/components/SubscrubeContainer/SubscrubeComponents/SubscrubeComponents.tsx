import { FC } from "react";

import classes from "../SubscrubeComponents/SubscrubeComponents.module.scss";

interface SubscrubeProps {
  placeholder: string;
}

const SubscrubeComponents: FC<SubscrubeProps> = ({ placeholder }) => (
  <div className={classes.image}>
    <input
      required
      placeholder={placeholder}
      className={classes.image__input}
      type="text"
    />
  </div>
);

export default SubscrubeComponents;
