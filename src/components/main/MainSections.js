import React from 'react'
import AwardsSlide from '../swiper/AwardsSlide'

import '../../js/main/scrollMagic'

const MainSections = () => {
  return (
    <>
      {/* SEASON PRODUCT */}
      <section className="season-product scroll-spy">
        <div className="inner">

          <img src="/images/floating3.png" alt="Icon" className='floating floating3' />

          <img src="/images/season_product_image.png" alt="product_image" className="product back-to-position to-right delay-0" />  
          <div className="text-group">
            <img src="/images/season_product_text1.png" alt="product_text1" className="title back-to-position to-left delay-1" />
            <img src="/images/season_product_text2.png" alt="product_text2" className="description back-to-position to-left delay-2" />
            <div className="more back-to-position to-left delay-3">
              <a href="#/" onClick={ e => e.preventDefault } className="btn">자세히 보기</a>
            </div>
          </div>
        </div>    
      </section>


      {/* RESERVE COFFEE */}
      <section className="reserve-coffee scroll-spy">
        <div className="inner">
          <img src="/images/reserve_logo.png" alt="logo" className="reserve-logo back-to-position to-right delay-0" />
          <div className="text-group">
            <img src="/images/reserve_text.png" alt="reserve_text" className="description back-to-position to-right delay-1" />
            <div className="more back-to-position to-right delay-2">
              <a href="#/" onClick={ e => e.preventDefault } className="btn btn--gold">자세히 보기</a>
            </div>
          </div>

          <img src="../images/reserve_image.png" alt="reserve_image" className="product back-to-position to-left delay-3" />

        </div>    
      </section>


      {/* PICK YOUR FAVORITE */}
      <section className="pick-your-favorite scroll-spy">
        <div className="inner">
          <div className="text-group">
            <img src="/images/favorite_text1.png" alt="favorite_text1" className="title back-to-position to-right delay-0" />
            <img src="/images/favorite_text2.png" alt="favorite_text2" className="description back-to-position to-right delay-1" />
            <div className="more back-to-position to-right delay-2">
              <a href="#/" onClick={ e => e.preventDefault } className="btn btn--white">자세히 보기</a>
            </div>
          </div>
        </div>    
      </section>


      {/* RESERVE STORE */}
      <section className="reserve-store">
        <div className="inner">
          <div className="medal">
            <div className="front">
              <img src="/images/reserve_store_medal_front.png" alt="medal_front" />
            </div>    
            <div className="back">
              <img src="/images/reserve_store_medal_back.png" alt="medal_back" />
              <a href="#/" onClick={ e => e.preventDefault } className="btn">매장안내</a>
            </div>    
          </div>
        </div>    
      </section>


      {/* FINE THE STORE */}
      <section className="find-store scroll-spy">
        <div className="inner">
          <img src="/images/find_store_texture1.png" alt="find_texture1" className="texture1 back-to-position to-right delay-0" />
          <img src="/images/find_store_texture2.png" alt="find_texture2" className="texture2 back-to-position to-right delay-1" />

          <img src="/images/find_store_picture1.jpg" alt="find_picture" className="picture picture1" />
          <img src="/images/find_store_picture2.jpg" alt="find_picture" className="picture picture2" />
          <div className="text-group">
            <img src="/images/find_store_text1.png" alt="find_text1" className="title back-to-position to-left delay-0" />
            <img src="/images/find_store_text2.png" alt="find_text2" className="description back-to-position to-left delay-1" />
            <div className="more back-to-position to-left delay-2">
              <a href="#/" onClick={ e => e.preventDefault } className="btn">매장찾기</a>
            </div>
          </div>
        </div>    
      </section>

      
      {/* AWARDS */}
      <section className="awards">
        <div className="inner">
          <AwardsSlide></AwardsSlide>

          <div className="swiper-prev">
            <div className="material-icons">arrow_back</div>
          </div>
          <div className="swiper-next">
            <div className="material-icons">arrow_forward</div>
          </div>
          
        </div>    
      </section>
    </>    
  )
}

export default MainSections