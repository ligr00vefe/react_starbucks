import { gsap } from "gsap";

window.addEventListener('load', function() {

  const fadeEls = document.querySelectorAll('.visual .fade-in');

  fadeEls.forEach(function(fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(fadeEl, 1, {
      delay: (index + 1) * .7,  // 0.7,   1.4,   2.1,   2.7 
      opacity: 1
    });
  });

});