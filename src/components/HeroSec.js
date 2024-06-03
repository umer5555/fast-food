import React from 'react'
import { Button } from 'flowbite-react'
function HeroSec() {
  return (
    <div className='mainHeaderSlide'>
  
      <div>
      <div className='hero'>
    <div class="container mx-auto  ">
        <div className='grid grid-cols-12'>
          <div className='col-span-8'>
            <h1><span>Go</span> Green</h1>
            <p>Fresh, organic ingredients. Carefully prepared.Eat green for a reason</p>
          </div>
          <div className='col-span-4'>
            <div className='bookingBox'>
           <div className='bookingCont'>
           <img src={`${process.env.PUBLIC_URL}/images/bookicon.png`}  />
            <div>
            <h6>Book a Table</h6>
            <span>Power by opentable</span>
            </div>
           </div>
            <form className='bookingForm'>
              <input type='' placeholder='5/18/2023'></input>
              <input type='' placeholder='7:00 pm'></input>
              <input type='' placeholder='2 People'></input>               
              <Button style={{color:"white"}} className='formButton' size="md">Find a Table</Button>


            </form>

            </div>
          </div>
        </div>
      <div>

      </div>
       
    </div>
    </div>
      </div>
    </div>
  )
}

export default HeroSec