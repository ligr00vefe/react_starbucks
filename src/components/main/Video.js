import React from 'react'
import Youtube from './Youtube'

const Video = () => {
  return (
    <section className="youtube">
      <div className="youtube__area">
        <Youtube></Youtube>
      </div>
      <div className="youtube__cover">
        <div className="inner">
          <img src="/images/floating1.png" alt="Icon" className='floating floating1' />
          <img src="/images/floating2.png" alt="Icon" className='floating floating2' />
        </div>
      </div>
    </section>
  )
}

export default Video