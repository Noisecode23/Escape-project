import React from 'react'

function Header() {
  return (
    <>
    <div className='foreground absolute z-[999] w-full flex items-center gap-4 px-16 py-6 text-white  '>
      <div className='nav-items'>
        <a href="#"><span className='w-5 h-5 block rounded-full bg-zinc-100'></span></a>
      </div>
      <div className='logo fixed font-["Molitor_Display"] ml-10 font-semibold uppercase text-[2vw]'><h1>Escape</h1></div>
    </div>
    </>
  )
}

export default Header
