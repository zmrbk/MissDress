import img1 from "../../assets/orderPage/img1.png";
import img2 from "../../assets/orderPage/img2.png";
import img3 from "../../assets/orderPage/img3.png";

export const myOrders = [
  {
    orderId: "№2032a231d",
    status: "Доставлено",
    date: "23.01.2022",
    img: [img1, img2, img3],
    price: "5990",
  },
  {
    orderId: "№2032a231d",
    status: "Отправлено",
    date: "23.01.2022",
    img: [img1, img2, img3],
    price: "5990",
  },
  {
    orderId: "№2032a231d",
    status: "Отменено",
    date: "23.01.2022",
    img: [img1, img2, img3],
    price: "5990",
  },
];

export interface IMyOrders {
  orderId: string;
  status: string;
  date: string;
  img: Array<string>;
  price: string;
}
