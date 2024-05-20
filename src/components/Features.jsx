import React from "react";

function Features() {
  return (
    <>
      <div className="w-full mt-20 p-10 font-['Molitor_Display'] flex justify-between items-center">
        <h2 className="text-[2vw]">Collections</h2>
        <div className="btns flex items-center gap-5">
          <p className="pr-5 underline">View all</p>
          <div className="flex gap-5">
            <span className="w-16 h-16 flex justify-center items-center rounded-full border border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000"
                fill="none"
              >
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="w-16 h-16 flex justify-center items-center rounded-full border border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000"
                fill="none"
              >
                <path
                  d="M20 12L4 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex p-5 items-center justify-center ">
        <div className="container1 w-1/2 h-screen bg-red-500  rounded-lg ">
            <img className="w-[100%] h-[100%]" src="https://escape.cafe/cdn/shop/files/bright_1.jpg?v=1664291159&width=800" alt="" />
        </div>
        <div className="container2 w-[60%] h-screen ">
            <div className="productImg overflow-hidden w-[30vw] h-[30vw] ml-20 rounded-md bg-[#ebe9e6] ">
                <img src="https://escape.cafe/cdn/shop/files/andregeant_EN.png?v=1709907544&width=800" alt="" />
            </div>
            <div className="proudctDetails w-[30vw] ml-20 mt-5 font-['Molitor_Display']">
                <h1 className="font-['Molitor_Display']  font-semibold text-3xl">BRIGHT SERIES</h1>
                <p className="pt-5">They are developed with bright aromatic flavors in mind. We believe the Bright Series can be extracted as espressos or filters; however, these lighter roasts will require more attention to the extraction details to ensure you are able to appreciate all they have to offer.</p>
                <div className="buttons mt-5 flex items-center gap-5">
                    <span className="bg-zinc-900 text-white px-5 py-3  rounded-md">Shop now</span>
                    <span className="px-5 py-3  rounded-md border-black border">Learn More</span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Features;
