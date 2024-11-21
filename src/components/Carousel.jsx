
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Carousel = () => {

   
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
  <img src="artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-.jpg" alt="Description of the first carousel image" width={"1516"} height={"500px"} />
</SwiperSlide>

        <SwiperSlide>

        <img src="carosel2.jpg" alt="Description of the first carousel image" width={"1516px"} height={"500px"} />

        </SwiperSlide>
        <SwiperSlide>
        <img src="carosel3.jpg" alt="Description of the first carousel image" width={"1516"} height={"500px"} />

        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel
