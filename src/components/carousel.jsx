import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Carousel = ({ s1, s2, s3, s4 }) => {
  const slides = [s1, s2, s3, s4].filter(Boolean);

  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3200,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation, Pagination, A11y]}
      pagination={{ clickable: true }}
      navigation
      className="portfolio-swiper w-full"
      style={{
        "--swiper-pagination-color": "#d11f31",
        "--swiper-navigation-color": "#f3f3f3",
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide}
            alt={`Lucas Vargas ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
