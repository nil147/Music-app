import React, { useEffect, useState } from "react";
import "../styles/Sell.css";
import Order from "./Order";
import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";

function Sell() {
  const img =
    "https://images.pexels.com/photos/4061438/pexels-photo-4061438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(width);
  }, []);

  return (
    <div className="sell">
      <Parallax
        blur={3}
        bgImage={img}
        strength={200}
        strength={500}
        style={{ height: 650 }}
      >
        <div data-aos="fade-up" className="sell-top">
          <p>PRICING</p>
          <h1>Invite Us to Your Event</h1>
          <h3>
            Do you want to make your event unforgettable? Then we will be glad
            to<br></br>
            help you! Regardless of your venue size, we have a great pricing
            option for anyone.
          </h3>
        </div>
        <div className="sell-order">
          <Swiper
            spaceBetween={-200}
            slidesPerView={width > 1000 ? 3 : 1}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Order price="$ 2.5K" main="Private Party" />
            </SwiperSlide>
            <SwiperSlide>
              <Order isLarge price="$ 5K" main="Nightclub Party" />
            </SwiperSlide>
            <SwiperSlide>
              <Order price="$ 10K" main="Big Concert" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </Parallax>
    </div>
  );
}

export default Sell;
