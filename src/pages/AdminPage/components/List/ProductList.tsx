import { FC } from "react";

import { IPopularProduct } from "../../../../types/productsTypes/productsTypes";

interface ProductListProps {
  productList: IPopularProduct[];
}

const ProductList: FC<ProductListProps> = ({ productList }) => (
  <ul>
    {productList.map((item: IPopularProduct, index) => {
      return (
        <li key={item.product_title + index}>
          <strong>{item.product_title}</strong>
          <span>{item.amount} продаж</span>
          <span>{item.totalCount} доход</span>
        </li>
      );
    })}
  </ul>
);

export default ProductList;
