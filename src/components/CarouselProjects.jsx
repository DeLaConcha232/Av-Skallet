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
        className="w-full h-full"
      >
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://calculatorimc.surge.sh/" target="_blank" rel="noreferrer">
            <img src="/src/assets/IMCcalculator.svg" alt="" className='object-contain ' />
          </a>
        </SwiperSlide>
        {/* <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <img src={Zetio} alt="" className='object-contain'/>
        </SwiperSlide> */}
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://deportivax.surge.sh/" target="_blank" rel="noreferrer">
            <img src="/src/assets/deportivax.svg" alt="" className='object-contain ' />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://bodycalculator.surge.sh/" target="_blank" rel="noreferrer">
            <img src="/src/assets/bodyCalcultator.svg" alt="" className='object-contain ' />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://startconsulting.surge.sh/" target="_blank" rel="noreferrer">
            <img src="/src/assets/startConsulting.svg" alt="" className='object-contain ' />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <img src="/src/assets/sheetFromForm.svg" alt="" className='object-contain' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
