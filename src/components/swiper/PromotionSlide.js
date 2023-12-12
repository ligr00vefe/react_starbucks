import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PromotionSlide = () => {
  return (
    <Swiper
      modules={[ Autoplay, Navigation, Pagination ]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={10} // 슬라이드 사이 간격
      slidesPerView={3} // 한 화면에 보여줄 슬라이드 개수
      centeredSlides={true}
      navigation={{
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
      }}
      pagination={{
        el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
        clickable : true  // 사용자의 페이지 번호 요소 제어 가능 여부
      }} 
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide>
        <img src="/images/promotion_slide1.jpg" alt="2023 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!" />
        <a href="#/" onClick={ e => e.preventDefault } className="btn btn-brown">자세히 보기</a>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/promotion_slide2.jpg" alt="2023 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!" />
        <a href="#/" onClick={ e => e.preventDefault } className="btn btn-brown">자세히 보기</a>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/promotion_slide3.jpg" alt="2023 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!" />
        <a href="#/" onClick={ e => e.preventDefault } className="btn btn-brown">자세히 보기</a>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/promotion_slide4.jpg" alt="2023 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!" />
        <a href="#/" onClick={ e => e.preventDefault } className="btn btn-brown">자세히 보기</a>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/promotion_slide5.jpg" alt="2023 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!" />
        <a href="#/" onClick={ e => e.preventDefault } className="btn btn-brown">자세히 보기</a>
      </SwiperSlide>      

    </Swiper>
  )
}

export default PromotionSlide