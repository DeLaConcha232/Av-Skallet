

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Value from './Value';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarouselValues() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-80 h-auto"
            >
                <SwiperSlide className='text-center text-lg flex justify-center items-center'>
                    <Value text="Lealtad" />
                </SwiperSlide>
                <SwiperSlide className='text-center text-lg flex justify-center items-center'>
                    <Value text="Adaptabilidad" />
                </SwiperSlide>
                <SwiperSlide className='text-center text-lg flex justify-center items-center'>
                    <Value text="Trabajo en equipo" />
                </SwiperSlide>
                <SwiperSlide className='text-center text-lg flex justify-center items-center'>
                    <Value text="Orientacion al cliente" />
                </SwiperSlide>
                <SwiperSlide className='text-center text-lg flex justify-center items-center'>
                    <Value text="Eficacia" />
                </SwiperSlide>
                <SwiperSlide className='text-center text-lg flex justify-center items-center'>
                    <Value text="Crecimiento mutuo" />
                </SwiperSlide>
                <SwiperSlide className='text-center text-lg flex justify-center items-center'>
                    <Value text="Etica Profesional" />
                </SwiperSlide>
            </Swiper>

        </>
    );
}


