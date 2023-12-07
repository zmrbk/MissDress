import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SEARCH_PAGE } from "../../utils/path";

import classes from "./SearchInput.module.scss";

const SearchInput = () => {
  const [title, setTitle] = useState<string>("");
  const navigate = useNavigate();

  const onHandleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title !== "") {
      navigate(SEARCH_PAGE + `/title=${title}`);
    }
    return false;
  };

  return (
    <form className={classes.searchInputBlock} onSubmit={onHandleSearch}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Поиск"
      />
      <button type="submit"></button>
    </form>
  );
};

export default SearchInput;
