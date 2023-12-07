import React, { FC, useState } from "react";
import { Button } from "@mui/material";

import leftArrow from "../../assets/categoriesPage/left.svg";
import rightArrow from "../../assets/categoriesPage/right.svg";

import { useFetchProductGetAllQuery } from "../../store/features/Product/productGetAll/ProductGetAllQuery";

import classes from "./style.module.scss";

interface IProps {
  totalCount: number;
  setPage: (value: number) => void;
}

const CategoryPagination: FC<IProps> = ({ totalCount, setPage }) => {
  function scrollTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / 6); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={classes.pagination}>
        <Button
          className={classes.arrowBtn}
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            setPage(currentPage - 1);
            scrollTop();
          }}
        >
          <img src={leftArrow} alt="" />
        </Button>
        {pageNumbers.map((item: any) =>
          item <= 4 ? (
            <Button
              variant="contained"
              className={
                currentPage === item ? classes.active : classes.notActive
              }
              onClick={() => {
                setCurrentPage(item);
                setPage(item);
                scrollTop();
              }}
              key={item}
            >
              {item}
            </Button>
          ) : null
        )}
        {pageNumbers.length > 4 && (
          <Button className={classes.arrowBtn}>...</Button>
        )}
        <Button
          className={classes.arrowBtn}
          disabled={Math.ceil(totalCount / 6) === currentPage}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            setPage(currentPage + 1);
            scrollTop();
          }}
        >
          <img src={rightArrow} alt="" />
        </Button>
      </ul>
    </div>
  );
};

export default CategoryPagination;
