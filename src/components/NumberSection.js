import React from 'react'
import CountUp from 'react-countup';

function NumberSection() {
    return (
        <>
            <div className='numberSection'>
                <div className='container mx-auto' >
                    <div className=' text-center	'>

                        <h6 className='pt-5'>MEET US BETTER</h6>
                        <h2  className='pt-5'> Our Taverna in Numbers</h2>
                        <hr></hr>
                        <p className='pt-10'>Inspired by recipes and creations of world’s best chefs</p>
                    </div>
                <div className='grid xl:grid-cols-12 lg:grid-cols-12  md:grid-cols-12  sm:grid-cols-12 '>
                    <div className='allnum xl:col-span-3 lg:col-span-3 md:col-span-6 md:flex md:justify-center sm:col-span-12   '>
                        <div className='numbers'>
                           <h3><CountUp  start={100}  end={370}  duration={2.75}  ></CountUp>
                           </h3>
                           <p className='pt-5'>CASES COMPLETED</p>
                        </div>
                    </div>
                    <div className='allnum xl:col-span-3 lg:col-span-3 md:col-span-6 md:flex md:justify-center sm:col-span-12  '>
                    <div className='numbers'>
                           <h3><CountUp  start={0}  end={97}  duration={2.75}  ></CountUp>
                           </h3>
                           <p className='pt-5'>EXPERTS WORKING</p>
                        </div>
                    </div>
                    <div className='allnum xl:col-span-3 lg:col-span-3 md:col-span-6 md:flex md:justify-center sm:col-span-12  '>
                    <div className='numbers'>
                           <h3><CountUp  start={0}  end={100}  duration={2.75}  ></CountUp>%
                           </h3>
                           <p className='pt-5'>SATISFIED CLIENTS</p>
                        </div>
                    </div>
                    <div className='allnum xl:col-span-3 lg:col-span-3 md:col-span-6 md:flex md:justify-center sm:col-span-12  '>
                    <div className='numbers'>
                           <h3><CountUp  start={100}  end={128}  duration={5.75}  ></CountUp>
                           </h3>
                           <p className='pt-5'>AWARDS WINNING</p>
                        </div>
                    </div>
                </div>



                </div>
            </div>

             
        </>
    )
}

export default NumberSection