import img1 from "../../../assets/orderPage/img1.png";

const orders = [
  {
    img: img1,
    oldPrice: "7500",
    newPrice: "5990",
    title: "Choper Shoulder Frill Vent Dress",
    size: `Размер 29-49`,
    article: "Платья AD857",
    color: "бежевый",
    count: "5",
  },
  {
    img: img1,
    oldPrice: "7500",
    newPrice: "5990",
    title: "Choper Shoulder Frill Vent Dress",
    size: `Размер 29-49`,
    article: "Платья AD857",
    color: "бежевый",
    count: "5",
  },
  {
    img: img1,
    oldPrice: "7500",
    newPrice: "5990",
    title: "Choper Shoulder Frill Vent Dress",
    size: `Размер 29-49`,
    article: "Платья AD857",
    color: "бежевый",
    count: "5",
  },
  {
    img: img1,
    oldPrice: "7500",
    newPrice: "5990",
    title: "Choper Shoulder Frill Vent Dress",
    size: `Размер 29-49`,
    article: "Платья AD857",
    color: "бежевый",
    count: "5",
  },
];

export interface IOrders {
  img: string;
  oldPrice: string;
  newPrice: string;
  title: string;
  size: string;
  article: string;
  color: string;
  count: string;
}

export const myOrder = [
  {
    orderId: "№2032a231d",
    status: "Доставлено",
    date: "23.01.2022",
    img: img1,
    newPrice: "5990",
    oldPrice: "7500",
    orders: orders,
  },
];

export interface IMyOrder {
  orderId: string;
  status: string;
  date: string;
  img: string;
  oldPrice: string;
  newPrice: string;
  orders: Array<IOrders>;
}

export const orderInfo = {
  to: "Манки Д. Луффи",
  number: "+996712345678 ",
  address: "Кыргызстан, г. Бишкек",
  total: "23960",
};

export interface IOrderInfo {
  to: string;
  number: string;
  address: string;
  total: string;
}
