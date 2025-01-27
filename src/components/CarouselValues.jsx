
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Value from '../components/Value';

import '../styles/carouselvalues.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <Value text="Lealtad" />
                </SwiperSlide>
                <SwiperSlide >
                    <Value text="Adaptabilidad" />
                </SwiperSlide>
                <SwiperSlide >
                    <Value text="Trabajo en Equipo" />
                </SwiperSlide>
                <SwiperSlide >
                    <Value text="Orientacion al Cliente" />
                </SwiperSlide>
                <SwiperSlide>
                    <Value text="Crecimiento Mutuo" />
                </SwiperSlide>
                <SwiperSlide>
                    <Value text="Etica profesional" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
