import { FC } from "react";

import { IItemCard } from "../../../../components/ProductCard/types";

import SearchSlider from "../SearchSlider/SearchSlider";

import classes from "./OthersProducts.module.scss";

interface SearchOthersProps {
  slides: IItemCard[];
}

const OthersProducts: FC<SearchOthersProps> = ({ slides }) => (
  <div className={classes.searchOthersWrapper}>
    <h3>Похожие товары</h3>
    <SearchSlider slides={slides} />
  </div>
);

export default OthersProducts;
