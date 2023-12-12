import gsap from 'gsap';
import { SlowMo } from 'gsap/EasePack';

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자 
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1,  // 무한 반복
      yoyo: true,  // 한번 재생된 애니메이션을 거꾸로 역재생
      delay: random(0, delay)
    }
  );
  gsap.registerPlugin(SlowMo);
}

window.addEventListener('load', function() {
  floatingObject('.floating1', 1, 15);
  floatingObject('.floating2', .5, 15);
  floatingObject('.floating3', 1.5, 20);
});
