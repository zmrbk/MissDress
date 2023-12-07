import NewsList from "../MainPage/components/News/NewsList";

import news from "../../assets/News/newstitle.png";

import classes from "./NewsComponents.module.scss";

const NewsComponents = () => (
  <>
    <div className={classes.news}>
      <div className={classes.news__item}>
        <img className={classes.news__img} src={news} alt="" />
        <div className={classes.news__text}>
          <h2 className={classes.news__h2}>Она создала свой бренд в 20</h2>
          <p className={classes.news__p}>
            Стать успешным можно в любом возрасте. Главное — найти дело, которое
            нравится. Только в этом случае работа будет приносить счастье. И
            деньги. В качестве подтверждения этих слов расскажем одну совершенно
            необычную истории успеха, в которой предприниматель моложе 20 лет
            превратил свои личные интересы в прибыльный бизнес.
          </p>
        </div>
      </div>
      <span className={classes.news__span}>20.01.2022</span>
      <h1 className={classes.h1__margin}>Другие новости</h1>
    </div>
    <NewsList />
  </>
);

export default NewsComponents;
