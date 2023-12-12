import React from 'react'
import NoticeSlide from '../swiper/NoticeSlide'
import PromotionSlide from '../swiper/PromotionSlide'

import '../../js/main/promotion'

const Notice = () => {   
  return (
    <section className="notice">
      <div className="notice-line">
        <div className="bg-left"></div>
        <div className="bg-right"></div>
        <div className="inner">
          <div className="inner__left">
            <h2>공지사항</h2>
            <NoticeSlide></NoticeSlide>
            <a href="#/" onClick={ e => e.preventDefault } className="notice-line__more">
              <div className="material-icons">add_circle</div>
            </a>
          </div>
          <div className="inner__right">
            <h2>스타벅스 프로모션</h2>
            <div className="toggle-promotion">
              <div className="material-icons">upload</div>
            </div>           
          </div>
        </div>
      </div>

      <div className="promotion">
        <PromotionSlide></PromotionSlide>

        <div className="swiper-pagination"></div>
        <div className="swiper-prev">
          <div className="material-icons">arrow_back</div>
        </div>
        <div className="swiper-next">
          <div className="material-icons">arrow_forward</div>
        </div>
        
      </div>
    </section>
  )
}

export default Notice