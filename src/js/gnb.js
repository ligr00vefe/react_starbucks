import _ from 'lodash';
import { gsap, ScrollToOptions } from 'gsap';

window.addEventListener('load', function() {
  const searchEl = document.querySelector('.search');
  // console.log('searchEl: ', searchEl);
  const searchInputEl = searchEl.querySelector('input');

  searchEl.addEventListener('click', function () {
    searchInputEl.focus();
  });

  searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');  
  });

  searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');  
  });

  // 뱃지 부분
  const badgeEl = document.querySelector('header .badges');

  // Top button 숨기기
  const toTopEl = document.querySelector('#to-top');
  gsap.to('#to-top', 0, {
    x: 100
  });

  window.addEventListener('scroll', _.throttle(function () {
    // console.log('scroll: ', window.scrollY);
    if(window.scrollY > 500) {
      // 배지 숨기기
      //  gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, .3, {
        opacity : 0,
        display : 'none'
      });

        // Top button 보이기
        gsap.to(toTopEl, .2, {
          x: 0
        });

    }else {
      // 배지 보이기
      gsap.to(badgeEl, .3, {
        opacity : 1,
        display : 'block'
      });

        // Top button 숨기기
        gsap.to(toTopEl, .2, {
          x: 100
        });

    }
  }, 300));
  // _.throttle(함수, 시간) : 함수가 일정시간에 한번씩 실행되도록 제한을 함.


  // Copyright에 나오는 연도를 항상 당해연도로 표기
  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();  // 올해의 연도를 가져옴


  // Top button 모션
  toTopEl.addEventListener('click', () => {
    gsap.to(window, .7, {
      scrollTo: 0
    })
  });
});
