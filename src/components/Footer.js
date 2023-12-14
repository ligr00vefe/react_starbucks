import React from 'react'

import '../css/gnb.css'
import '../js/gnb'

const Footer = () => {
  return (
    <footer>
      <div className="inner">

        <ul className="menu">
          <li><a href="#/" onClick={ e => e.preventDefault } className="text-green">개인정보처리방침</a></li>
          <li><a href="#/" onClick={ e => e.preventDefault }>영상정보처리기기 운영관리 방침</a></li>
          <li><a href="#/" onClick={ e => e.preventDefault }>홈페이지 이용약관</a></li>
          <li><a href="#/" onClick={ e => e.preventDefault }>위치정보 이용약관</a></li>
          <li><a href="#/" onClick={ e => e.preventDefault }>스타벅스 카드 이용약관</a></li>
          <li><a href="#/" onClick={ e => e.preventDefault }>윤리경영 핫라인</a></li>  
        </ul>

        <div className="btn-group">
          <a href="#/" onClick={ e => e.preventDefault } className="btn btn--white">찾아오시는 길</a>
          <a href="#/" onClick={ e => e.preventDefault } className="btn btn--white">신규입점제의</a>
          <a href="#/" onClick={ e => e.preventDefault } className="btn btn--white">사이트 맵</a>
        </div>

        <div className="info">
          <span>사업자등록번호 201-81-21515</span>
          <span>(주)스타벅스 온라인 대표이사 홍길동</span>
          <span>TEL : 02) 1234-1234 / FAX : 02) 1234-1235</span>
          <span>개인정보 책임자 : 홍길동</span>
        </div>

        <p className="copyright">
          &copy; <span className="this-year"></span> Starbucks Coffee Company. All Rights Reserved.
        </p>
        <img src="/images/starbucks_logo_only_text.png" alt="Footer_logo" className="logo" />
      </div>

      <div id="to-top">
        <div className="material-icons">arrow_upward</div>
      </div>
      
    </footer>
  )
}

export default Footer