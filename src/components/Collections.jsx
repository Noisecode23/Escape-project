import React from 'react'

function Collections() {
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full font-["Molitor_Display"] text-white bg-[url("https://escape.cafe/cdn/shop/files/BACK.jpg?v=1664294119&width=1780")]'>
        <div className='mt-20 p-10'>
            <div className='missioTxt'>
            <p>Our</p>
            <p>Mission</p>
            </div>
            <div className='font-["TWK_Lausane] text-5xl font-light'>We've been accused of having a one-track mind. And to those accusations we say - thank you. Because we know it's by focusing on one thing that many things happen. And at Escape, that one thing was always coffee. We have gone deeper into coffee than anyone, getting our hands dirty and coffee-grind dusted at every step.</div>
        </div>
        <div className='mt-20 p-10 flex items-center justify-around'>
            <p className='uppercase'>Escape is always possible</p>
            <div data-scroll data-scroll-section data-scroll-speed="-.2" className='posterImg w-[30vw] h-[80vh]'>
                <img className='w-full h-full object-cover' src="https://escape.cafe/cdn/shop/files/front.jpg?v=1664294132&width=750" alt="" />
            </div>
            <p className='uppercase'>Just grab a bag and jump right in</p>
        </div>
        <p className='text-center mt-10'>48.8532° N — 66.0385° W</p>
    </div>
    </>
  )
}

export default Collections
