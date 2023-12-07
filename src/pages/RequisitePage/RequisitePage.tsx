import { requisiteItems } from "./RequisiteDb";

import classes from "./RequisitePage.module.scss";

const RequisitePage = () => (
  <div className={classes.requisitePage}>
    <div className="container">
      <h3 className={classes.header}>Наши реквизиты</h3>
      <div className={classes.items}>
        {requisiteItems.map((item) => {
          return (
            <p className={classes.item}>
              <strong>{item.title}: </strong>
              <span>{item.info}</span>
            </p>
          );
        })}
      </div>
    </div>
  </div>
);

export default RequisitePage;
