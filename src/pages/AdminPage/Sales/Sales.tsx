import { Chart } from "react-google-charts";

import SideBar from "../components/SideBar/SideBar";
import Profile from "../components/Profile/Profile";

import Widget from "../components/Widget/Widget";

import List from "../components/List/List";

import { separateList } from "../../../utils/separateList";

import { useFetchAllStatQuery } from "../../../store/features/Admin/allStatQuery";
import { useFetchPopularProductsQuery } from "../../../store/features/Admin/productStatisticsQuery";
import { useFetchGraphStatQuery } from "../../../store/features/Admin/allStatQuery";

import classes from "./Sales.module.scss";

interface IMonth {
  [key: string | number]: string;
}

const getMonth = (month: string | number) => {
  const months: IMonth = {
    "1": "янв",
    "2": "фев",
    "3": "мар",
    "4": "апр",
    "5": "май",
    "6": "июн",
    "7": "июл",
    "8": "авг",
    "9": "сен",
    "10": "окт",
    "11": "ноя",
    "12": "дек",
  };

  return months[month || 1];
};

const newGraph = [
  {
    collection: "summer",
    sales: [
      {
        count: 5,
        month: "1",
      },
    ],
  },

  {
    collection: "spring",
    sales: [
      {
        count: 1,
        month: "2",
      },
    ],
  },
  {
    collection: "autumn",
    sales: [
      {
        count: 2000,
        month: "1",
      },
    ],
  },
  {
    collection: "winter",
    sales: [
      {
        count: 100,
        month: "7",
      },
    ],
  },
];

const getData = (arr: any[]) => {
  const seasons: { [key: string]: string } = {
    winter: "Зимняя коллекция",
    spring: "Весенняя коллекция",
    summer: "Летняя коллекция",
    autumn: "Осенняя коллекция",
  };
  const newArr = [];

  for (let i = 0; i < 12; i++) {
    const protoOfArr: any[] = [getMonth(i + 1)];
    newArr.push(protoOfArr);
  }

  const newSeasons = [""];
  for (let i = 0; i < arr.length; i++) {
    newSeasons.push(seasons[arr[i].collection]);
    for (let j = 0; j < newArr.length; j++) {
      const candidate = arr[i].sales.find(
        (item: { count: number; month: string }) => +item.month === j + 1
      );
      if (candidate) {
        newArr[j].push(candidate.count);
      } else {
        newArr[j].push(0);
      }
    }
  }

  return [newSeasons, ...newArr];
};

const options = {
  hAxis: {
    title: "Year",
    titleTextStyle: { color: "#333" },
  },
  vAxis: { minValue: 0 },
  chartArea: {},
  BackgroundColor: "#E4E4E4",
};
const Sales = () => {
  const { data: statData = {}, isSuccess: isStatsDataSuccess } =
    useFetchAllStatQuery("");
  const { data: popularProducts = {}, isSuccess: isPopularProductsSuccess } =
    useFetchPopularProductsQuery("");
  const { data: popularUsers, isSuccess: isPopularUsersSuccess } =
    useFetchPopularProductsQuery("");

  const { data: graphStat, isSuccess: isGraphSuccess } =
    useFetchGraphStatQuery("");
  const popularProductList = separateList(
    isPopularProductsSuccess && popularProducts.result
  );
  const popularUserList = separateList(
    isPopularUsersSuccess && popularUsers.result
  );
  const stats = isStatsDataSuccess && statData.result;

  console.log(isGraphSuccess && getData(newGraph));

  return (
    <div className={classes.sales}>
      <SideBar />
      <div className={classes.salesContainer}>
        <div className={classes.header}>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>

        <div className={classes.salesContent}>
          <div className={classes.left}>
            <div className={classes.totalInfo}>
              <h4> Информация о доходах</h4>
              <ul className={classes.totalList}>
                <li>
                  <strong>Доход за неделю</strong>
                  <span>354k+</span>
                </li>
                <li>
                  <strong>Доход за месяц</strong>
                  <span>1.5m+</span>
                </li>
                <li>
                  <strong>Общая сумма дохода за год</strong>
                  <span>257m+</span>
                </li>
              </ul>
            </div>

            <div className={classes.chart}>
              <h4>Статистика продаж</h4>
              <Chart
                className={classes.svg}
                chartType="Line"
                width="100%"
                height="400px"
                data={isGraphSuccess && getData(graphStat?.result)}
                options={options}
              />
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.widget}>
              <Widget
                widget={{
                  widgetStat: stats.lastDateNewOrderPrices || 0,
                  widgetTitle: "полученный доход",
                }}
              />
            </div>

            <div className={classes.list}>
              {(popularProductList && (
                <List
                  title={"Товары с большим числом продаж"}
                  itemsList={popularProductList || []}
                />
              )) ||
                ""}
              {(popularUserList && (
                <List
                  title={"Пользователи с большим числом продаж"}
                  itemsList={popularUserList || []}
                />
              )) ||
                ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
