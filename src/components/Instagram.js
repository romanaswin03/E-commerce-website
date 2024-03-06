import React from 'react'
import img1 from '../Rectangle 14.png'
import img2 from '../Rectangle 11.png'
import img3 from '../Rectangle 9.png'
import img4 from '../Rectangle 8.png'
import img5 from '../Rectangle 10.png'
import img6 from '../Rectangle 13.png'
import brand from '../brand markup.svg'


function Instagram() {
  return (
    <div className='w-screen h-screen' >
      <div className='mt-16 flex justify-center'>
        <div className='flex-wrap mt-20 '>
        <h2 className='text-3xl mb-3 tracking-widest'>Follow Us On Instagram</h2>
        <p className='para text-center mb-10 tracking-widest '>Our gallery</p>
        </div>
      </div>

      <div className='w-full flex mt-8 pr-36'>
        <div className='w-1/6 m-2'>
            <img className='w-full' src={img1}/>
        </div>
        <div className='w-1/6 m-2'>
            <img className='w-full' src={img2}/>
        </div>
        <div className='w-1/6 m-2'>
            <img className='w-full' src={img3}/>
        </div>
        <div className='w-1/6 m-2'>
            <img className='w-full' src={img4}/>
        </div>
        <div className='w-1/6 m-2'>
            <img className='w-full' src={img5}/>
        </div>
        <div className='w-1/6 m-2'>
            <img className='w-full' src={img6}/>
        </div>
      </div>

      <div className='mt-10 px-12 '>
        <img className='w-full pr-36' src={brand}/>
      </div>
    
    </div>
  )
}

export default Instagram
