window.onload = function(){

  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');
  let isHidePromotion = false;

  // console.log('promotionEl: ', promotionEl);
  // console.log('promotionToggleBtn: ', promotionToggleBtn);

  promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion) {
      // 숨김 처리
      promotionEl.classList.add('hide');
    }else {
      // 보임 처리
      promotionEl.classList.remove('hide');
    }
  });

};