import dress1 from "../../assets/ProductPage/dress1.png";
import dress2 from "../../assets/ProductPage/dress2.png";
import dress3 from "../../assets/ProductPage/dress3.png";
import dress4 from "../../assets/ProductPage/dress4.png";

import same1 from "../../assets/ProductPage/same1.png";
import same2 from "../../assets/ProductPage/same2.png";
import same3 from "../../assets/ProductPage/same3.png";

import secondImg from "../../assets/mainPage/news/second.png";
import thirdImg from "../../assets/mainPage/news/third.png";
import forthImg from "../../assets/mainPage/news/six.png";
import fillIcon from "../../assets/mainPage/icons/fill.svg";
import start from "../../assets/mainPage/icons/Vector.svg";
import heart from "../../assets/mainPage/icons/heart.svg";

// Dress Swiper
export const dressDatabase = [
  { id: 1, dress: dress1 },
  { id: 2, dress: dress2 },
  { id: 3, dress: dress3 },
  { id: 4, dress: dress4 },
  { id: 5, dress: dress1 },
  { id: 6, dress: dress2 },
  { id: 7, dress: dress3 },
  { id: 8, dress: dress4 },
];

export interface IArrDress {
  id: number;
  dress: string;
}

export const dress_description = {
  title: "Benito Kate Wrap Dress",
  article: "Платья AD857",
  quantity: 5,
  price_old: 7500,
  price_new: 5900,
  size: "29 - 49",
  cloth: "Полиэстер",
  length: 115,
  style: "А - Силуэт",
  description:
    " В наши дни платья по-прежнему пользуются спросом и популярностью среди молодежи, они занимают почетные места на презентациях мод. Однако постепенно в моду входит повседневный стиль, который не подразумевает использование красочных и ярких образов.Платье Benito Kate Wrap Dress отличный пример этому.",
};

export const similarDresses = [
  {
    img: same1,
    oldPrice: "7500",
    newPrice: "5990",
    title: "Choper Shoulder Frill Vent Dress",
    colors: {
      img: fillIcon,
      count: "8",
    },
    size: `Размер 29-49`,
    stars: [start, start, start, start, start],
    heart: heart,
  },
  {
    img: same2,
    oldPrice: "7500",
    newPrice: "5990",
    title: "JUSTONE Shy Embo Can Skirt",
    colors: {
      img: fillIcon,
      count: "9",
    },
    size: `Размер 29-49`,
    stars: [start, start, start, start, start],
    heart: heart,
  },
  {
    img: same3,
    oldPrice: "7500",
    newPrice: "5990",
    title: "Envy Look Button Eco Dress",
    colors: {
      img: fillIcon,
      count: "4",
    },
    size: `Размер 29-49`,
    stars: [start, start, start, start, start],
    heart: heart,
  },
  {
    img: thirdImg,
    oldPrice: "7500",
    newPrice: "5990",
    title: "Benito Kate Wrap Dress",
    colors: {
      img: fillIcon,
      count: "5",
    },
    size: `Размер 29-49`,
    stars: [start, start, start, start, start],
    heart: heart,
  },
  {
    img: forthImg,
    oldPrice: "7500",
    newPrice: "5990",
    title: "Envy Look The Elle Linen Dress",
    colors: {
      img: fillIcon,
      count: "5",
    },
    size: `Размер 29-49`,
    stars: [start, start, start, start, start],
    heart: heart,
  },
  {
    img: secondImg,
    oldPrice: "7500",
    newPrice: "5990",
    title: "JUSTONE Shy Embo Can Skirt",
    colors: {
      img: fillIcon,
      count: "5",
    },
    size: `Размер 29-49`,
    stars: [start, start, start, start, start],
    heart: heart,
  },
];

export interface ISimilarDresses {
  img: string;
  oldPrice: string;
  newPrice: string;
  title: string;
  colors: {
    img: string;
    count: string;
  };
  size: string;
  stars: Array<string>[];
  heart: string;
}
