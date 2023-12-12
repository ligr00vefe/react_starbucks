import ScrollMagic from 'scrollmagic';

window.addEventListener('load', function() {
  const spyEls = document.querySelectorAll('section.scroll-spy');

  spyEls.forEach(function(spyEl) {
    new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,  // window 세로 길이를 기준으로 가장 위는 0 가장 아래는 1 가운데는 .5
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); // 내부의 controller에 내용알 할당해서 실제로 동작하도록 도와줌
  })
});