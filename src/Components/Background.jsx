import React from 'react'
import '../Styles/background.css'

export default function Background() {
  return (
    <div className='bg-[url(../assests/images/bg.jpg)]
      backg w-full h-screen'> 
      <div className='bg-[url(../assests/images/portfolioimg.jpg)] w-full h-full opacity-25 bg-cover'></div>
    </div>
  )
}
