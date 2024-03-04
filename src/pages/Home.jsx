import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Navigation } from "swiper/modules";
import Banner01 from "../assets/banner01.jpg";
import Banner02 from "../assets/banner02.jpg";
import LoginCom from "../components/LoginCom";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide className="relative flex justify-center items-center">
          <img className="w-full" src={Banner01} alt="" />
          <LoginCom />
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center items-center">
          <img style={{ width: "100%" }} src={Banner02} alt="" />
          <LoginCom />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
