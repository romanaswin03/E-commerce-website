import React from 'react'
import hoodie from '../Rectangle 18.png'
import shirt from '../Rectangle 19.png'

function Journal() {
  return (
    <div className=''>
        <div className='p-2 flex justify-center'>
            <div className='flex-wrap '>
                <h2 className='text-4xl tracking-widest mb-2'>From the Journal</h2>
                <p className='para text-center tracking-widest'>Discover All Blogs</p>
            </div>
        </div>
        <div className='mt-5 flex '>
            <div className='w-1/2 pl-24 my-auto pr-20'>
                <h2 className='font-semibold pb-5'>NEW COLLECTION</h2>
                <p className='text-sm pb-3 font-semibold'>Yes, WhatTheFont is a simple and easy font finder that can help you identify fonts. 
              Just upload an image of the font you need identified, and the tool will do.</p>
                <p className='text-sm font-semibold'>The Kilburn portable active stereo speaker,which embodies the gritty, rebellious attitude of rock 'n' roll, takes the Marshall sound and recognizable style and takes the performance on the road by unplugging the chords</p>
                <button className='mt-10 bg-black text-lg text-white px-8 py-2'>Shop now</button>
            </div>
            <div className='w-1/2 border items-end bg-cover'>
                <img className='w-full h-100' src ={hoodie}/>
                
            </div>
        </div>
        <div className=' flex'>
        <div className='w-1/2 border items-end'>
                <img className='w-full' src ={shirt}/>
                
            </div>
            <div className='w-1/2 px-16 my-auto '>
                <h2 className='font-semibold pb-5'>NEW COLLECTION</h2>
                <p className='text-sm pb-3 font-semibold'>Yes, WhatTheFont is a simple and easy font finder that can help you identify fonts. 
              Just upload an image of the font you need identified and the tool will do.</p>
                <p className='text-sm pb-3 font-semibold'>The Kilburn portable active stereo speaker, which embodies the gritty,rebellious attitude of rock 'n' roll, takes the Marshall sound and recognizable style and takes the performance on the road by unplugging the chords</p>
                <p className='text-sm pb-3 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
           
        </div>
    </div>
  )
}

export default Journal
