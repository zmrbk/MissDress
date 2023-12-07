import { useEffect } from "react";

import NewsComponents from "./NewsComponents";

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NewsComponents />
    </>
  );
};

export default NewsPage;
