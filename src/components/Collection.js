import React from 'react'
import bag from '../image/bag.png'
import shoe from '../image/shoe.png'
import jacket from '../image/jacket.png'
import tshirt from '../image/tshirt.png'

function Collection() {
  return (
 <div className=' w-screen h-screen pl-2 pr-28'>
    <div className='flex mt-6'>
      <div className='flex-wrap text-center w-full'>
        <h2 className='w-full text-4xl tracking-widest'>Summer 2023 Collection</h2>
        <p className='text-sm para tracking-widest mt-2 mb-8'>Browse our website for the hottest items in the marketplace now.</p>
      </div>
    </div>

    <div className='flex mt-6 mr-8'>
        <div className='w-1/4 m-2 border  border-gray-500 flex-wrap'>
            <div className='border-b pt-2 pl-2 border-gray-500'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            </span>
            <img className='' src={bag} />
            </div>

            <div className='p-2'>
                <h2 className='pb-2'>Waterproof Blue Bag</h2>
                <p className='text-xs pb-2'>View More</p>
                <p>
                    <span className='font-bold pr-2'>&#8377; 650</span>
                    <span className='text-gray-400 text-sm line-through'>1150</span>
                </p>
            </div>
        </div>
        <div className='w-1/4 m-2 border  border-gray-500 flex-wrap'>
            <div className='border-b pt-2 pl-2 border-gray-500'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            </span>
            <img className='' src={jacket} />
            </div>
            <div className='p-2'>
                <h2 className='pb-2'>Long Sleeve Black Shirt</h2>
                <p className='text-xs pb-2'>View More</p>
                <p>
                    <span className='font-bold pr-2'>&#8377; 1099</span>
                    <span className='text-gray-400 text-sm line-through'>2000</span>
                </p>
            </div>

        </div>
        <div className='w-1/4 m-2 border  border-gray-500 flex-wrap'>
            <div className='border-b pt-2 pl-2 border-gray-500'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            </span>
            <img className='' src={shoe} />
            </div>

            <div className='p-2'>
                <h2 className='pb-2'>Nike Shoe</h2>
                <p className='text-xs pb-2'>View More</p>
                <p>
                    <span className='font-bold pr-2'>&#8377; 3000</span>
                    <span className='text-gray-400 text-sm line-through'>5000</span>
                </p>
            </div>
        </div>
        <div className='w-1/4 m-2 border  border-gray-500 flex-wrap'>
            <div className='border-b pt-2 pl-2 border-gray-500'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            </span>
            <img className='' src={tshirt} />
            </div>
            <div className='p-2'>
                <h2 className='pb-2'>Half Sleeve T-Shirt</h2>
                <p className='text-xs pb-2'>View More</p>
                <p>
                    <span className='font-bold pr-2'>&#8377; 409</span>
                    <span className='text-gray-400 text-sm line-through'>999</span>
                </p>
            </div>
        </div>
        
        
    </div>
  </div>
  )
}

export default Collection
