import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { Icon } from "react-icons-kit";
import { caretUp } from "react-icons-kit/fa/caretUp";
import { caretDown } from "react-icons-kit/fa/caretDown";
import { caretLeft } from "react-icons-kit/fa/caretLeft";
import { caretRight } from "react-icons-kit/fa/caretRight";

import { Images } from "../../components/ProductCard/types";

import styles from "./ProductPage.module.scss";
import { dressDatabase } from "./productDb";

interface SwiperVerticalProps {
  images: Images[];
  setUrl: (url: number) => void;
}

const SwiperVertical: React.FC<SwiperVerticalProps> = ({ images, setUrl }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className={styles.verticalSwiper}>
      <div ref={navigationPrevRef}>
        <Icon
          color="#372E24"
          size={55}
          icon={caretUp}
          className={styles.iconUp}
        />
        <Icon
          color="#372E24"
          size={55}
          icon={caretLeft}
          className={styles.iconLeftMobile}
        />
      </div>

      <Swiper
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onSwiper={(swiper: any) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[Navigation]}
        className={styles.swiper}
        slidesPerView={4}
        direction={"horizontal"}
        zoom={true}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          900: {
            direction: "vertical",
            slidesPerView: 4,
          },
        }}
      >
        {images.length !== 0
          ? images.map((img, index) => (
              <SwiperSlide key={img.id} onClick={() => setUrl(index)}>
                <img src={img.url} alt="dresses" className={styles.dress} />
              </SwiperSlide>
            ))
          : dressDatabase.map((img) => (
              <SwiperSlide key={img.id}>
                <img src={img.dress} alt="dresses" className={styles.dress} />
              </SwiperSlide>
            ))}
      </Swiper>
      <div ref={navigationNextRef}>
        <Icon
          color="#372E24"
          size={55}
          icon={caretDown}
          className={styles.iconDown}
        />
        <Icon
          color="#372E24"
          size={55}
          icon={caretRight}
          className={styles.iconRightMobile}
        />
      </div>
    </div>
  );
};
export default SwiperVertical;
