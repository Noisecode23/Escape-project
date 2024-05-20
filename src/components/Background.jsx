import React from 'react'


function Background() {
    const cards = [
        {
            id:1,
            title: "secret sauce",
            price: "25.00",
            firstTxt: "Type: single origin",
            secondTxt: "Origin: Ethopia",
            ThirdTxt: "Process: Natural"
        }
    ]
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full  text-white font-["Molitor_Display"] px-16 py-6 z-10  bg-cover  bg-[url("https://escape.cafe/cdn/shop/files/header2.jpg?v=1702480771&width=1500")] bg-red-500'>
    <div className='bgImg mt-20'>
        {["Go", "Against", "The", "Grain"].map((item,index)=>(
          <h1 className='text-[15vw] font-semibold font-["Molitor_Display"] text-white uppercase leading-[14vw]' key={index}>{item}</h1>
        ))}
      </div>
      <div className=' m-20 translate-x-[60vw] w-96 '>
        <p className='text-[2vw] leading-none'>SURRENDER TO THE MOMENT WITH EACH SIP AND EVERY CUP OF OUR WIDE AND VARIED SPECIALTY COFFEE SELECTION.</p>
        <button className='bg-zinc-100 text-black px-5 py-3 mt-5 rounded-md '>shop now</button>
      </div>
      <div className='cards flex uppercase'>
        {cards.map((item, index)=>(
            <div key={index} className='card hover:bg-zinc-100 hover:text-black transition-colors border inline-block rounded-md px-5 py-5 border-white'>
                <div className='flex items-center gap-5 mb-5'>
                <h3 className='text-[2vw]'>{item.title}</h3>
                <p>${item.price}</p>
                </div>
                <p>{item.firstTxt}</p>
                <p>{item.secondTxt}</p>
                <p>{item.ThirdTxt}</p>
            </div>
        ))}
        {cards.map((item, index)=>(
            <div key={index} className='card hover:bg-zinc-100 hover:text-black transition-colors border inline-block rounded-md px-5 py-5 border-white'>
                <div className='flex items-center gap-5 mb-5'>
                <h3 className='text-[2vw]'>{item.title}</h3>
                <p>${item.price}</p>
                </div>
                <p>{item.firstTxt}</p>
                <p>{item.secondTxt}</p>
                <p>{item.ThirdTxt}</p>
            </div>
        ))}
        {cards.map((item, index)=>(
            <div key={index} className='card hover:bg-zinc-100 hover:text-black transition-colors border inline-block rounded-md px-5 py-5 border-white'>
                <div className='flex items-center gap-5 mb-5'>
                <h3 className='text-[2vw]'>{item.title}</h3>
                <p>${item.price}</p>
                </div>
                <p>{item.firstTxt}</p>
                <p>{item.secondTxt}</p>
                <p>{item.ThirdTxt}</p>
            </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Background
