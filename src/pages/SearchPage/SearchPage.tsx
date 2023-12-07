import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  useFetchProductBytitleQuery,
  useFetchProductGetAllQuery,
} from "../../store/features/Product/productGetAll/ProductGetAllQuery";

import SearchList from "./components/SearchList/SearchList";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import OthersProducts from "./components/OthersProducts/OthersProducts";

import classes from "./SearchPage.module.scss";

const SearchPage = () => {
  const { title } = useParams<string>();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("createDate");
  const [productsData, setProductsData] = useState({
    name: title,
    page: 1,
    sort: "createDate",
  });
  const { data: otherData = [] } = useFetchProductGetAllQuery({
    take: 6,
    sort: "createDate",
  });
  const { data = [] } = useFetchProductBytitleQuery(productsData);
  const items = data.result?.data || [];
  const otherItems = otherData.result?.data || [];
  const totalCount = data?.result?.count;

  useEffect(() => {
    setProductsData({
      ...productsData,
      name: title,
    });
  }, [title]);

  useEffect(() => {
    setProductsData({
      ...productsData,
      page,
    });
  }, [page]);

  useEffect(() => {
    setProductsData({
      ...productsData,
      sort,
    });
  }, [sort]);

  return (
    <div className={classes.searchPageWrapper}>
      <div className={`${classes.container} ${classes.searchPageContainer}`}>
        <SearchHeader quantity={totalCount} setSort={setSort} />

        {items.length > 0 ? (
          <SearchList
            searchList={items}
            totalCount={totalCount}
            setPage={setPage}
          />
        ) : (
          <OthersProducts slides={otherItems} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
