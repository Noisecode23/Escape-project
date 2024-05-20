import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-zinc-900 mt-[100vh] text-[#dcffef] font-["TWK_Lausanne_300_Regular"]   w-full  '>
      <div className='p-10 ml-[30vw] capitalize '>
        {["shop", "subscribe", "Producers", "Contact", "Customer privacy opt-out"].map((item, index)=>(
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className='flex flex-col gap-2 ml-[70vw]'>
        <div className='products uppercase text-[#91908e]'>
          <p>Products</p>
        </div>
        <div className='proudcts-list'>
          {["Limited series", "Bright series", "Warm series", "Flashbrew"].map((item, index)=>(
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
    </> 
  )
}

export default Footer
 