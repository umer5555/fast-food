import React from 'react'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='container mx-auto'>
            <div className='grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12'>
                <div className='xl:col-span-6  lg:col-span-6 md:col-span-6 sm:col-span-6 flex justify-center'>
                        <h2>DOWNLOAD OUR MENU</h2>
                </div>
                <div className='xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 flex justify-center'>
                <button
                style={{color:'white'}}
                    type="button"
                    className="ourMenu font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    DOWNLOAD
                  </button>
                </div>

            </div>
        </div>
    </div>
    </>

  )
}

export default Footer