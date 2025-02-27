// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import IMCcalculator from '../assets/IMCcalculator.png'
import BodyCalculator from '../assets/bodyCalcultator.png'
import Deportivax from '../assets/Deportivax.png'
import StartConsulting from '../assets/StartConsulting.png'
import SheetFromForm from '../assets/SheetFromForm.png'




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
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://calculatorimc.surge.sh/" target="_blank" rel="noreferrer">
            <img src={IMCcalculator} alt="" className='object-contain ' />
          </a>
        </SwiperSlide>
        {/* <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <img src={Zetio} alt="" className='object-contain'/>
        </SwiperSlide> */}
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://deportivax.surge.sh/" target="_blank" rel="noreferrer">
            <img src={Deportivax} alt="" className='object-contain ' />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://bodycalculator.surge.sh/" target="_blank" rel="noreferrer">
            <img src={BodyCalculator} alt="" className='object-contain ' />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <a href="https://startconsulting.surge.sh/" target="_blank" rel="noreferrer">
            <img src={StartConsulting} alt="" className='object-contain ' />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex items-center justify-center">
          <img src={SheetFromForm} alt="" className='object-contain' />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
