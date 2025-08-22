import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import swiperImg from "./travelimg4.webp";
import swiperImg2 from "./travelimg2.webp";
import swiperImg3 from "./travelimg3.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import "./styles.css";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000, // 3 sekund
          disableOnInteraction: false, // user klik qilsa ham davom etadi
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-img">
            <img src={swiperImg} alt="" />
            <div className="swiper-info">
              <p>BIKE & BOAT - OUR MOST POPULAR TRIPS</p>
              <button>BIKE + BOAT MOST SCENIC RIVERS, COASTS,AND CANALS!</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img">
            <img src={swiperImg2} alt="" />
            <div className="swiper-info">
              <p>EXPLORE THE WORLD AT THE PERFECT PACE</p>
              <button>MIKE TOURS IN EUROPE AND BEYOND</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img">
            <img src={swiperImg3} alt="" />
            <div className="swiper-info">
              <p>FAMILY-OWNED FOR 25 YEARS</p>
              <button>A SPECIAL THANKS TO ALL OUR TRIPSITA TRAVELERS</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
