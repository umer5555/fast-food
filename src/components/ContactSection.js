import React from 'react'

function ContactSection() {
    return (
        <>
 <div className='contact'>
    <div className='grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12'>
        <div className='pt-20  xl:col-span-4 xl:col-start-3 pt-20 lg:col-span-4 lg:col-start-3 md:col-span-5 md:col-start-2 sm:col-span-8  sm:col-start-5'>
        <div className='contactCont    '>
            <button type="button" style={{ color: "white" }} className="contactButton font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >
                Call Us
            </button>

            <h2 className='pt-5 pb-5'>+0123254568589</h2>

            <div className='contBox  pb-5'>
                <img src={`${process.env.PUBLIC_URL}/images/time.png`} />

                <div>
                    <p>mon-thu: 11.00 – 23.00</p>
                    <p>sat: 12.00 – 23.00</p>
                    <p>sun: 12.00 – 21.00</p>
                </div>
            </div>
            <div className='contBox pb-5 '>
                <img src={`${process.env.PUBLIC_URL}/images/location.png`} />

                <div>
                    <p>60 East 65th Street</p>
                    <p>New York City</p>
                    <p>NY 10065</p>
                </div>
            </div>
            <div className='socialIcons ml-5'>
            <img src={`${process.env.PUBLIC_URL}/images/s1.png`} />
            <img src={`${process.env.PUBLIC_URL}/images/s2.png`} />
            <img src={`${process.env.PUBLIC_URL}/images/s3.png`} />
            <img src={`${process.env.PUBLIC_URL}/images/s4.png`} />

            </div>
        </div>
        </div>
        <div className=' xl:col-span-6  lg:col-span-6 md:col-span-6  sm:col-span-12 '>
            <img
                style={{ width: "100%", height: "445px" }}
                src={`${process.env.PUBLIC_URL}/images/map.png`}
                alt="Map"
            />
        </div>
    </div>
</div>




        </>
    )
}

export default ContactSection