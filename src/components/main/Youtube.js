import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import '../../js/main/youtube'

const page = () => {
  const onPlayerReady: YouTubeProps['onReady'] = event => {
    event.target.mute();
  };

  const onPlayerStateChange: YouTubeProps['onStateChange'] = event => {
  // event.data 값 => 1 재생 중, 2 일시중지, 0 종료 https://developers.google.com/youtube/iframe_api_reference?hl=ko#onPlaybackRateChange
    if (!event.data) { 
      const player = event.target;
      player.seekTo(5);
      player.playVideo();
    }
  };

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
  };

  return (
    <YouTube
      videoId="An6LvWQuj_8"
      opts={opts}
      onReady={onPlayerReady}
      onStateChange={onPlayerStateChange}
      id="player"
    />
  );
};

export default page;