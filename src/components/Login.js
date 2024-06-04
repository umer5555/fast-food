import React from 'react'
import styles from './loginstyle.css';

function Login() {
  
  return (
    <div className='loginBody py-20 '>
      <div className='grid xl:grid-cols-12'>
        <div className='loginLogo xl:col-span-4 col-start-4 xl:pt-8 grid justify-end pr-10' >
        <img  src={`${process.env.PUBLIC_URL}/images/logo.png`}  />
        </div>
      </div>


      <div className='container mx-auto '>
        <div className='grid xl:grid-cols-12'>
          <div className='xl:col-span-6'>
            <h2> Sign In to <br></br>My <span>Application</span> </h2>
            <p>If you don’t have a account <br></br> you can <a href='#'>Register here</a></p>
          </div>
          <div className='loginForm xl:col-span-6 ' >
            <h3 className='pt-10'>Sign In</h3>
            <p className='pt-10 pr-20 pl-20'>Access your account by entering your username and password. Enjoy personalized features and secure access to our services.</p>
            

<form class="max-w-sm mx-auto">
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
    <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div>
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
    <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div>
  
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Login