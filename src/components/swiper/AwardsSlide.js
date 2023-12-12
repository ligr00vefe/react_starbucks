import React from 'react'
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const AwardsSlide = () => {
  return (
    <Swiper
      modules={[ Autoplay, Navigation ]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={30} // 슬라이드 사이 간격
      slidesPerView={5} // 한 화면에 보여줄 슬라이드 개수
      navigation={{
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide>
        <img src="/images/awards_slide1.jpg" alt="AWARDS_SLIDE1" />        
      </SwiperSlide>      
      <SwiperSlide>
        <img src="/images/awards_slide2.jpg" alt="AWARDS_SLIDE2" />        
      </SwiperSlide>      
      <SwiperSlide>
        <img src="/images/awards_slide3.jpg" alt="AWARDS_SLIDE3" />        
      </SwiperSlide>      
      <SwiperSlide>
        <img src="/images/awards_slide4.jpg" alt="AWARDS_SLIDE4" />        
      </SwiperSlide>      
      <SwiperSlide>
        <img src="/images/awards_slide5.jpg" alt="AWARDS_SLIDE5" />        
      </SwiperSlide>      
      <SwiperSlide>
        <img src="/images/awards_slide6.jpg" alt="AWARDS_SLIDE6" />        
      </SwiperSlide>      
      <SwiperSlide>
        <img src="/images/awards_slide7.jpg" alt="AWARDS_SLIDE7" />        
      </SwiperSlide>      
      <SwiperSlide>
        <img src="/images/awards_slide8.jpg" alt="AWARDS_SLIDE8" />        
      </SwiperSlide>    
      <SwiperSlide>
        <img src="/images/awards_slide9.jpg" alt="AWARDS_SLIDE9" />        
      </SwiperSlide>      
      <SwiperSlide>
        <img src="/images/awards_slide10.jpg" alt="AWARDS_SLIDE10" />        
      </SwiperSlide>      
      
    </Swiper>
  )
}

export default AwardsSlide