import React from 'react'

function Enjoy() {
  return (
    <>
        <div  className=' enjoy container mx-auto'>
        <div className='enjoyTopCont'>
            <h6>TASTY & CRUNCHY</h6>
            <h2>Choose & Enjoy</h2>
            <p>Inspired by recipes and creations of world’s best chefs</p>
        </div>

        <div className='grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12  '>
            <div className='xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 sm:flex sm:justify-center'>
                <div className='enjoyBox'>
                <img src={`${process.env.PUBLIC_URL}/images/e1.png`}  />
                    <h5>Gorgeous Appetizers</h5>
                    <p>Inspired by recipes and creations of world’s best chefs</p>
                    <a href='#'>VIEW FULL MENU</a>
                    
                </div>
            </div>
            <div className='xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 sm:flex sm:justify-center'>
                <div className='enjoyBox'>
                <img src={`${process.env.PUBLIC_URL}/images/e2.png`}  />
                    <h5>Gorgeous Appetizers</h5>
                    <p>Inspired by recipes and creations of world’s best chefs</p>
                    <a href='#'>BOOK YOUR TABLE</a>
                    
                </div>
            </div>
            <div className='xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 sm:flex sm:justify-center'>
                <div className='enjoyBox'>
                <img src={`${process.env.PUBLIC_URL}/images/e3.png`}  />
                    <h5>Gorgeous Appetizers</h5>
                    <p>Inspired by recipes and creations of world’s best chefs</p>
                    <a href='#'>CONTACT US</a>
                    
                </div>
            </div>
            <div className='xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 sm:flex sm:justify-center'>
                <div className='enjoyBox'>
                <img src={`${process.env.PUBLIC_URL}/images/e4.png`}  />
                    <h5>Gorgeous Appetizers</h5>
                    <p>Inspired by recipes and creations of world’s best chefs</p>
                    <a href='#'>MORE DETAILS</a>
                    
                </div>
            </div>
           
          
             
        </div>
        </div>
    </>
  )
}

export default Enjoy