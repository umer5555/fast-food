import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './loginstyle.css';
import { Link } from "react-router-dom";
import Register from './Register';
function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='loginBody py-20' >
      <div className='grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 '>
        <div className='loginLogo xl:col-span-4 lg:col-span-4 md:col-span-4   sm:col-span-4  xl:pt-8 grid justify-end pr-10'>
        <Link to="/"> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" /></Link>
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 '>
          <div className='formleftCont xl:col-span-6  lg:col-span-6 md:col-span-6 sm:col-span-12  flex flex-col justify-center items-center sm:items-start sm:pt-10  sm:pb-10'>
            <h2>Sign In to <br />My <span>Application</span></h2>
            <p >If you don’t have an account <br /> you can <a href='#'><Link to="/register">Register here</Link></a></p>
          </div>
          <div className='loginForm xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12'>
            <h3 className='pt-10'>Sign Up</h3>
            <p className='formpara pt-10'>Create a new account to access exclusive features and services. Simply provide your details to get started.</p>
            
            <form  className="pl-10 pr-10 pb-10">
            <div className="mb-6">
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
                <input placeholder='Enter Your Name' type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                <input placeholder='Enter Your Email' type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="mb-6 relative">
                <label htmlFor="password-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password-input"
                  placeholder='Enter Your Password'
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className="signInButton absolute inset-y-0 right-0 flex items-center px-3 pt-10 space-x-2">
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(true)}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    <FaEye style={{ color: '#8EC63F' }} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(false)}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    <FaEyeSlash style={{ color: '#8EC63F' }} />
                  </button>
                </div>
              </div>
                <a className=' forgetPassword pt-3 pb-3' style={{color:"#8EC63F", float:"right"}} href='#'>Forgot Password?</a>
              <button type="submit" className="signIn text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
