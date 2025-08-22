import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Rasmlar
import swiperImg from "./travelimg4.webp";
import swiperImg2 from "./travelimg2.webp";
import swiperImg3 from "./travelimg3.webp";

// Swiper style
import "swiper/css";
import "swiper/css/pagination";

// Modullar
import { Pagination, Autoplay } from "swiper/modules";

// O'z style
import "./styles.css";

export default function App() {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="swiper-img">
          <img src={swiperImg} alt="Travel" />
          <div className="swiper-info">
            <p>BIKE & BOAT - OUR MOST POPULAR TRIPS</p>
            <button>BIKE + BOAT MOST SCENIC RIVERS, COASTS, AND CANALS!</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-img">
          <img src={swiperImg2} alt="Explore" />
          <div className="swiper-info">
            <p>EXPLORE THE WORLD AT THE PERFECT PACE</p>
            <button>BIKE TOURS IN EUROPE AND BEYOND</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-img">
          <img src={swiperImg3} alt="Family" />
          <div className="swiper-info">
            <p>FAMILY-OWNED FOR 25 YEARS</p>
            <button>A SPECIAL THANKS TO ALL OUR TRIPSITA TRAVELERS</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
