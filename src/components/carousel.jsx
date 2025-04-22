// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = ({ s1, s2, s3, s4 }) => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="swiper_container w-100"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={{ clickable: false }}
      navigation
      style={{
        "--swiper-pagination-color": "#eee",
        "--swiper-navigation-color": "#eee",
        "--swiper-navigation-padding": "5px",
      }}
    >
      <SwiperSlide className="">
        <img src={s1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={s3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={s2} />
      </SwiperSlide>
    </Swiper>
  );
};
