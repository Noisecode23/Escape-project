import React from 'react'
import Header from './components/Header'
import Background from './components/Background'
import Features from './components/Features'
import Collections from './components/Collections'
import CoffeeAd from './components/CoffeeAd'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();
function App() {
  return (
    <>
    <div className='w-full h-screen relative bg-zinc-900'>
      <Header />
      <Background />
      <Features/>
      <Collections />
      <CoffeeAd />
      <Footer />
    </div>
    </>
  )
}

export default App
