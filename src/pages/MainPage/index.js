import React from 'react'
import Notice from '../../components/main/Notice';
import Rewards from '../../components/main/Rewards';
import Visual from '../../components/main/Viaual';
import Video from '../../components/main/Video';
import MainSections from '../../components/main/MainSections';

const MainPage = () => {
  return (
    <>
      <Visual></Visual>
      <Notice></Notice>
      <Rewards></Rewards>
      <Video></Video>
      <MainSections></MainSections>
    </>
  )
}

export default MainPage