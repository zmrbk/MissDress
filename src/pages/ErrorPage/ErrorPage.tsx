import errorBg from "../../assets/errorPage/errorBg1.jpg";
import { BreadCrumbs } from "../../utils/BreadCrumbs/BreadCrumbs";
import { MAIN_PAGE } from "../../utils/path";

import classes from "./style.module.scss";

const ErrorPage = () => {
  const links = [
    { title: "Главная", path: MAIN_PAGE },
    { title: "Страница ошибки" },
  ];

  return (
    <div className={classes.mainDiv}>
      <BreadCrumbs links={links} />
      <div className={classes.errorDiv}>
        <img width="70%" src={errorBg} alt="error" />
      </div>
    </div>
  );
};

export default ErrorPage;
