import { Link } from "react-router-dom";

import { CONTACTS_PAGE, DELIVERY_PAGE } from "../../utils/path";

import classes from "./ContactsTransition.module.scss";

const ContactsTransition = () => (
  <div className={classes.dilev}>
    <Link className={classes.Linkd} to={DELIVERY_PAGE}>
      Доставка
    </Link>
    <Link className={classes.Link} to={CONTACTS_PAGE}>
      Контакты
    </Link>
  </div>
);

export default ContactsTransition;
