import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
// import headerBanner1 from "../../assets/images/header_banner_1.png";
// import HeaderBanner2 from "../../assets/images/header_banner_2.png";
// import HeaderBanner3 from "../../assets/images/header_banner_3.png";
// import HeaderBanner4 from "../../assets/images/bnn6.png";

const HomeBanner = () => {
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]} // Sử dụng dấu ngoặc vuông thay vì dấu ngoặc nhọn
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m35dpk1vyrpk37ug0m3110_1800x833.png"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m3cgadg6sxl9s705geohero-ever-phao%20(1).jpg"
                className="w-100"
                alt="Banner 2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m35dpzbctjnatmvg9f83110_1800x833-07.png"
                className="w-100"
                alt="Banner 3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m35dp7owekw8kqlya11800x833%20PC%20hero%20banner%2011.png"
                className="w-100"
                alt="Banner 4"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
