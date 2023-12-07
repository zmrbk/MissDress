import { Grid } from "@mui/material";

import classes from "../style.module.scss";
import { categoryMainApi } from "../../../../store/features/Category/categoryMain/categoryMainQuery";

import Bryuki from "../../../../assets/mainPage/categories/Bryuki.png";
import Jeans from "../../../../assets/mainPage/categories/Jeans.png";
import Platye from "../../../../assets/mainPage/categories/Platye.png";
import Ubki from "../../../../assets/mainPage/categories/Ubki.png";

import CategoryImagesCard from "./CategoryImagesCard";

export interface ICategoryItems {
  createDate: string;
  id: number;
  status: number;
  title: string;
  updateDate: string;
  image: any;
}
const ProductsCategory = () => {
  const btnTitle = "Смотреть";
  const type = "summer";
  const data = categoryMainApi.useFetchCategoryMainQuery(6);

  const allCategories = data?.data?.result;
  const categories: ICategoryItems[] = allCategories
    ?.filter((item: any) => item.children.length === 0)
    .slice(0, 4);
  const images = [Platye, Ubki, Jeans, Bryuki];

  const newData = categories?.map((item) =>
    Object.assign({}, item, { selected: false })
  );
  if (newData) {
    for (let i = 0; i < newData.length; i++) {
      newData[i].image = images[i];
    }
  }

  return (
    <Grid container spacing={2}>
      {newData?.map((item, index) => (
        <Grid key={index} className={classes.categoryDiv} item xs={6} md={4}>
          <div className={classes.btnDiv}>
            <CategoryImagesCard
              btnTitle={btnTitle}
              item={item}
              title={item.title}
              type={type}
            />
            <h4>{item.title}</h4>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsCategory;
