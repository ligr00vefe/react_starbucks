import React from 'react'
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const NoticeSlide = () => {
  return (
    <Swiper
      modules={[ Autoplay ]}
      direction="vertical"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={10} // 슬라이드 사이 간격
      slidesPerView={1} // 한 화면에 보여줄 슬라이드 개수
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide><a href="#/" onClick={ e => e.preventDefault }>크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내</a></SwiperSlide>
      <SwiperSlide><a href="#/" onClick={ e => e.preventDefault }>[당첨자 발표] 2023 스타벅스 플래너 영수증 이벤트</a></SwiperSlide>
      <SwiperSlide><a href="#/" onClick={ e => e.preventDefault }>스타벅스커피 코리아 애플리케이션 버전 업데이트 안내</a></SwiperSlide>
      <SwiperSlide><a href="#/" onClick={ e => e.preventDefault }>[당첨자 발표] 뉴이어 전자영수증 이벤트</a></SwiperSlide>
      
    </Swiper>
  )
}

export default NoticeSlide