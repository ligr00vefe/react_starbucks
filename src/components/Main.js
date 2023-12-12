import React from 'react'
import Notice from './main/Notice';
import Rewards from './main/Rewards';
import Visual from './main/Viaual';
import Video from './main/Video';
import MainSections from './main/MainSections';

import '../css/main.css'

const Main = () => {
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

export default Main