import React, { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import collImg1 from "./collimg1.webp";
import collImg2 from "./collimg2.webp";
import collImg3 from "./collimg3.webp";
import collImg4 from "./collimg4.webp";
import collImg5 from "./collimg5.webp";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./collections.css";

function Collections() {
  const [slides] = useState([
    { id: 1, img: collImg1, title: "Beautiful Mountain" },
    { id: 2, img: collImg2, title: "Sunny Beach" },
    { id: 3, img: collImg3, title: "City Lights" },
    { id: 4, img: collImg4, title: "Calm Lake" },
    { id: 5, img: collImg5, title: "Green Forest" },
  ]);
  return (
    <>
    <div className="colliction-sar">Collections</div>;
      <Swiper
        className="swiper-collection"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ type: "fraction" }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 }, // 📱 Telefon
          700: { slidesPerView: 2 }, // 📲 Planshet
          1024: { slidesPerView: 3 }, // 💻 Desktop
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-item">
              <img src={slide.img} alt={slide.title} />
              <p>{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Collections;
