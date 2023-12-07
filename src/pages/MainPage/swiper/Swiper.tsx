import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { swiperArr, ISwiperArr } from "./SwiperDb";

import styles from "./Swiper.module.scss";

SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);

const MainSwiper: FC = () => {
  const [photos, setPhotos] = useState<ISwiperArr[]>([]);

  useEffect(() => {
    setPhotos(swiperArr);
  }, []);

  return (
    <div className={styles.swiperDiv}>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        className={styles.swiper}
        allowTouchMove={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {photos.map((photo) => (
          <SwiperSlide className={styles.swiperSlide} key={photo.id}>
            <img src={photo.photo} alt="clothes" />
            <p>
              Скидки до 50%! <br />
              Успей приобрести товар по выгодной цене!
            </p>
            <button className={styles.btn}>Подробнее</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export { MainSwiper };
