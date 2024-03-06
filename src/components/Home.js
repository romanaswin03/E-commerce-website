import React from 'react'
import image1 from '../Rectangle 2.svg'
import image2 from '../image 2.png'
function Home() {
  return (
    <div className='flex pt-28 pt-12 w-screen h-screen'>
      <div className='w-1/2 '>
        <div className='justify-start pl-20  '>
            <h3 className='italic font-bold  text-9xl tracking-wide'>Jean & denim collections</h3>
            <p className='text-sm font-semibold pl-2 pr-20 pt-4'>Yes, WhatTheFont is a simple and easy font finder that can help you identify fonts. 
              Just upload an image of the font you need identified and, the tool will do.
            </p>
            <button className='bg-black text-white text-lg px-12 py-2 mt-8'>
              Shop now
            </button>
        </div>
      </div>
      <div className='w-1/2 flex pl-16 justify-center mr-48 ml-0 '>
       
         <img className='w-96 h-max relative ' src={image1} />
         <img className='w-max h-max absolute bottom-10 ' src= {image2} alt="" />
        
      </div>
    </div>
  )
}

export default Home
