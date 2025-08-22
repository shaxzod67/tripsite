import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./collections.css";

function Collections() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);

  const [slides, setSlides] = useState(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper className="swiper-collection"
        modules={[Virtual, Navigation, Pagination, Autoplay]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
        autoplay={{
          delay: 3000, // 3 sekundda bitta slide
          disableOnInteraction: false, // foydalanuvchi manual o'tkazganda ham autoplay davom etadi
        }}
        loop={true} // cheksiz aylanishi uchun
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        {/* <button onClick={() => prepend()} className="prepend-2-slides">
          Prepend 2 Slides
        </button> */}
        {/* <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button> */}
        {/* <button onClick={() => slideTo(10)} className="slide-250">
          Slide 10
        </button> */}
      </p>
    </>
  );
}

export default Collections;
