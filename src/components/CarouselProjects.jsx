// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={6000}
        // pagination={{
        //   clickable: false,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://calculatorimc.surge.sh/" target="_blank" rel="noreferrer">
            <img src="/assets/IMCalculator.webp" alt="" className='object-cover' />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <img src="/assets/Zetio.webp" alt="" className='object-cover'/>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://bodycalculator.surge.sh/" target="_blank" rel="noreferrer">
            <img src="/assets/bodyCalcultator.webp" alt="" className='object-cover ' />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://deportivax.surge.sh/" target="_blank" rel="noreferrer">
            <img src="/assets/DeportivaX.webp" alt="" className='object-cover ' />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://startconsulting.surge.sh/" target="_blank" rel="noreferrer">
            <img src="/assets/startConsulting.webp" alt="" className='object-cover ' />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <img src="/assets/sheetFromForm.webp" alt="" className='object-cover' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
