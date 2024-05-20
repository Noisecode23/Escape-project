import React from 'react'

function CoffeeAd() {
  return (
    <>
    <div className='w-full relative h-screen font-["Molitor_Display"]'>
        <div className='textNever uppercase p-10 '>
            <h1 className='text-[15vw]  font-semibold'>Never</h1>
            {["select your coffee size", "select your frequency", "sit back and escape"].map((item, index)=>(
                <p className='leading-none' key={index}>{index} {item}</p>
            ))}
        </div>
        <div className='textRun absolute flex gap-20  right-0 uppercase mr-10 p-10 '>
            <div className='rounded-md'>
                <img className='rounded-md' src="https://escape.cafe/cdn/shop/files/never-run-out_27db9708-2b9d-403e-811f-66aa6de94ed6.jpg?v=1660871025&width=550" alt="" />
                <h1 className='text-[15vw]  font-semibold'>OUT</h1>
            </div>
            <div>
            <h1 className='text-[15vw]  font-semibold'>Run</h1>
            <p className='text-[2vw] font-semibold leading-none'>SUBSCRIBE TO MONTHLY DELIVERIES <br /> AND SAVE UP TO 15% ON EVERY <br /> ORDER. CHOOSE THE COFFEE OR <br /> SERIE THAT SUITS YOUR TASTE.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default CoffeeAd
