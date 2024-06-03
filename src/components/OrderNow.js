import React from 'react'

function OrderNow() {
    return (
        <>
            <div className='orderNow pb-10'>
                <div className='container mx-auto'>
                    <h6 className='text-center'> Free and Fast</h6>
                    <h2 className='text-center pt-2'>Oder Now</h2>
                    <p className='text-center pt-2'> Inspired by recipes and creations of world’s best chefs</p>
              
                    <div className='form mt-20 pt-20 pl-10 pr-10 pb-10' >
                   
<form >
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <input type="text" id="first_name" class=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Number:</label>
            <input type="text" id="last_name" class="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Number:" required />
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Oder:</label>
            <input type="text" id="company" class="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Food Name" required />
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Food: </label>
            <input type="text" id="phone" class="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Extra with Food" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How Much:</label>
            <input type="text" id="website" class="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Many Orders" required />
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date and Time:</label>
            <input type="date" id="visitors" class="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address:</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message:</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
        </div>
    </div>
     
     <div className='submitBtn '> 
     <button type="submit" class="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ORDER NOW</button>
     </div>
    
     
    
</form>

                </div>
              
                </div>
                
            </div>
        </>
    )
}

export default OrderNow