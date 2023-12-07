import { useEffect } from "react";

import ProductsPage from "./Products/ProductsPage";

import { MainSwiper } from "./swiper/Swiper";

import styles from "./MainPage.module.scss";
import Advantages from "./components/Advantages/Advantages";
import NewsList from "./components/News/NewsList";
import Collections from "./components/Collections/Collections";
import SubscrubeContainer from "./components/SubscrubeContainer/SubscrubeContainer";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={styles.container}>
      <MainSwiper />
      <ProductsPage />
      <Collections />
      <SubscrubeContainer />
      <Advantages />
      <NewsList />
    </div>
  );
};

export default MainPage;
