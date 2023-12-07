import { FC } from "react";

import classes from "./Widget.module.scss";

interface WidgetProps {
  widget: {
    widgetStat: string | number;
    widgetTitle: string;
  };
}

const Widget: FC<WidgetProps> = ({ widget }) => (
  <div className={classes.widget}>
    <strong>{widget.widgetStat}</strong>
    <span>{widget.widgetTitle}</span>
  </div>
);

export default Widget;
