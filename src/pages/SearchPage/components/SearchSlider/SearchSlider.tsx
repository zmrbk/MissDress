import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper";

import { IItemCard } from "../../../../components/ProductCard/types";

import { ProductCard } from "../../../../components";

import classes from "./SearchSlider.module.scss";

interface SearchSliderProps {
  slides: IItemCard[];
}

const SearchSlider: FC<SearchSliderProps> = ({ slides }) => {
  return (
    <div className={classes.searchSlider}>
      <Swiper
        style={{ position: "static" }}
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        navigation={true}
        freeMode={true}
        modules={[Pagination, Navigation, Controller]}
      >
        {slides?.map((slide, index: number) => {
          return (
            <SwiperSlide className={classes.slide} key={index}>
              <ProductCard btnTitle={"Открыть"} item={slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SearchSlider;
