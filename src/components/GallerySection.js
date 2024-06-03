import React from 'react'

function GallerySection() {
  return (
    <>
    <div className='gallery pt-10'>
        <h6 className='text-center '>TASTY & CRUNCHY</h6>
        <h2 className='text-center pt-2'>Our Gallery</h2>
        <p className='text-center pt-2 pb-10'>Inspired by recipes and creations of world’s best chefs</p>
    </div>
    <div className='container mx-auto'>
        <div className='grid  xl:grid-cols-12 xl:grid xl:justify-start lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 '>
            <div  className='  galleryImages    pb-10 pr-10 xl:col-span-4   lg:col-span-4  md:col-span-6 sm:col-span-12 sm:flex sm:justify-center   '>
            <img  src={`${process.env.PUBLIC_URL}/images/12.png`} alt='...' />
            </div>
            <div      className='  galleryImages  pb-10 pr-10 xl:col-span-4   lg:col-span-4  md:col-span-6 sm:col-span-12 sm:flex sm:justify-center  '>
            <img src={`${process.env.PUBLIC_URL}/images/13.png`} alt='...' />
            </div>
            <div      className='  galleryImages  pb-10 pr-10 xl:col-span-4   lg:col-span-4  md:col-span-6 sm:col-span-12 sm:flex sm:justify-center '>
            <img src={`${process.env.PUBLIC_URL}/images/14.png`} alt='...' />
            </div>
            <div      className='  galleryImages  pb-10 pr-10 xl:col-span-4   lg:col-span-4  md:col-span-6 sm:col-span-12 sm:flex sm:justify-center '>
            <img src={`${process.env.PUBLIC_URL}/images/15.png`} alt='...' />
            </div>
            <div      className='  galleryImages  pb-10 pr-10 xl:col-span-4   lg:col-span-4  md:col-span-6 sm:col-span-12 sm:flex sm:justify-center '>
            <img src={`${process.env.PUBLIC_URL}/images/16.png`} alt='...' />
            </div>
            <div      className='  galleryImages  pb-10 pr-10 xl:col-span-4   lg:col-span-4  md:col-span-6 sm:col-span-12 sm:flex sm:justify-center '>
            <img src={`${process.env.PUBLIC_URL}/images/17.png`} alt='...' />
            </div>
        </div>
    </div>
    </>
  )
}

export default GallerySection