import YouTube from 'react-youtube'

window.addEventListener('load', function() {

  const tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() {
    // <div id="player"></div>
    new .Player('player', {
      videoId: 'An6LvWQuj_8',
      playerVars: {
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
      },
      events: {
        onReady: function(event) {
          event.target.mute() // 음소거
        }
      }
    });
  }

});
