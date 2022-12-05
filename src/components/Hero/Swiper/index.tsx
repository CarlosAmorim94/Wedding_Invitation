import Image from "next/image";
import Images1 from "/public/img/RIP_6169.jpg";
import Images2 from "/public/img/RIP_6123.jpg";
import Images3 from "/public/img/RIP_6113.jpg";
import Images4 from "/public/img/RIP_6188.jpg";
import Images5 from "/public/img/RIP_6191.jpg";
import Images6 from "/public/img/RIP_6211.jpg";
import Images7 from "/public/img/RIP_6244.jpg";
import Images8 from "/public/img/RIP_6248.jpg";
import Images9 from "/public/img/RIP_6258.jpg";
import Images10 from "/public/img/RIP_6266.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

export function SwiperDesktop() {
  return (
    <Swiper
      loop={true}
      slidesPerView={3}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      effect={"coverflow"}
      grabCursor={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      className="mySwiper hidden rounded-2xl md:flex justify-center items-center select-none"
    >
      <SwiperSlide className="rounded-3xl overflow-hidden">
        <Image src={Images1} alt="Image slider of wedding" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl overflow-hidden">
        <Image src={Images2} alt="Image slider of wedding" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl overflow-hidden">
        <Image src={Images3} alt="Image slider of wedding" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl overflow-hidden">
        <Image src={Images4} alt="Image slider of wedding" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl overflow-hidden">
        <Image src={Images5} alt="Image slider of wedding" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl overflow-hidden">
        <Image src={Images6} alt="Image slider of wedding" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl overflow-hidden">
        <Image src={Images7} alt="Image slider of wedding" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl overflow-hidden">
        <Image src={Images8} alt="Image slider of wedding" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl overflow-hidden">
        <Image src={Images9} alt="Image slider of wedding" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl overflow-hidden">
        <Image src={Images10} alt="Image slider of wedding" />
      </SwiperSlide>
    </Swiper>
  );
}
