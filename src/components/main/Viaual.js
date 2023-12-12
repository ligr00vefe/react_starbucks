import React from 'react'

import '../../css/main.css'
import '../../js/main/visual'

const Visual = () => {
  return (
    <section className="visual">
      <div className="inner">
        <div className="title fade-in">
          <img src="/images/visual_title.png" alt="STARBUCKS DELIGHTFUL START TO THE YEARS" />
          <a href="#/" onClick={ e => e.preventDefault } className="btn btn--brown">자세히 보기</a>
        </div>
        <div className="fade-in">
          <img src="/images/visual_cup1.png" alt="new OATMEAL LATTE" className="cup1 image" />
          <img src="/images/visual_cup1_text.png" alt="오트밀 라떼" className="cup1 text" />
        </div>
        <div className="fade-in">
          <img src="/images/visual_cup2.png" alt="new STARBUCKS CARAMEL CRUMBLE MOCHA" className="cup2 image" />
          <img src="/images/visual_cup2_text.png" alt="스타벅스 카라멜 크럼블 모카" className="cup2 text" />
        </div>
        <div className="fade-in">
          <img src="/images/visual_spoon.png" alt="Spoon" className="spoon" />
        </div>
      </div>

    </section>
  )
}

export default Visual