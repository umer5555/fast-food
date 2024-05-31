import React from 'react'
import { Button, Navbar } from "flowbite-react";
import { Alert } from 'flowbite-react';
import 'flowbite';


function MainHeader() {
  return (
    <>
      <div className="mainHeader">
        <div className="container mx-auto p-4 foodHeader ">
          <div className=' grid grid-cols-12 gap-20'>
            {/* Logo */}
            <div className='col-span-2  justify-center	 '>
              <img src={`${process.env.PUBLIC_URL}/images/logo.png`} />

            </div>

            {/* Menu */}
            <div className='col-span-10 flex justify-end  '>
              <ul flex justify-center>
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Blog</a></li>
                <li><a href=''>Contact</a></li>
                <li><a href=''>Shop</a></li>
                {/* <li><a className='login' href=''>Login</a></li> */}
              </ul>
              <button type="button" class=" login  bg-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>



            </div>
          </div>
        </div>
        <div className='hero'>
      <div class="container mx-auto  ">
          <div className='grid grid-cols-12'>
            <div className='col-span-8'>
              <h1><span>Go</span> Green</h1>
              <p>Fresh, organic ingredients. Carefully prepared.Eat green for a reason</p>
            </div>
            <div className='col-span-4'>
              <div className='bookingBox'>
              <img src={`${process.env.PUBLIC_URL}/images/bookicon.png`}  />
              <h6>Book a Table</h6>

              </div>
            </div>
          </div>
        <div>

        </div>
         
      </div>
      </div>
      </div>

      





    </>
  )
}

export default MainHeader