/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import '../styles/carousel.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function App(props) {
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={props.one} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.two} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.three} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.four} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.five} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.six} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.seven} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
