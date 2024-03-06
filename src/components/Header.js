import React from 'react'



function Header() {
  return (
    <div className='flex flex-wrap items-start font-bold border w-full mt-4'>
        <div className='flex justify-between'>
        <div className='flex'>
        <h1 className='text-2xl xl:mr-16'>Tooni&trade;</h1>
        <div className='xl:ml-28  pt-1 md:ml-20  flex flex-wrap'>
            <p className='xl:px-9 md:px-2'>SHIRTS</p>
            <p className='xl:px-9 md:px-2'>SHOP</p>
            <p className='xl:px-9 md:px-2'>JEANS</p>
            <p className='xl:px-9 md:px-2'>OUR STORY</p>
            <p className='xl:px-9 md:px-2'>GIFT COLLECTIONS</p>
        </div>
        </div>
        <div className=' flex flex-wrap lg:pl-20  xl:ml-5 p-1 '>
            <span className='lg:px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </span>
            <span className='lg:px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>
            </span>
            <span className='lg:px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            </span>
            <span className='lg:px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

            </span>
        </div>

        </div>
        {/* <button className='lg:hidden border' onClick="menuClick()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
        </svg>

        </button> */}

        {/* <div className='hidden '>
        <p className='xl:px-9  md:px-3'>SHIRTS</p>
            <p className='xl:px-9 md:px-3'>SHOP</p>
            <p className='xl:px-9 md:px-3'>JEANS</p>
            <p className='xl:px-9 md:px-3'>OUR STORY</p>
            <p className='xl:px-9 md:px-3'>GIFT COLLECTIONS</p>
        </div> */}

        

        <script src="./main.js"></script>
      
    </div>
  )
}

export default Header
