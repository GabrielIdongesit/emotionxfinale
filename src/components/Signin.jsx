import React from 'react';
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";




const SignIn = () => {
  return (
    <div className="border-4 lg:w-[35rem] bg-loginbg w-[90%] mt-[8rem] mx-auto flex-col top-0 justify-center rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl ">
      <h1 className="text-teal-500 md:text-2xl sm:3xl text-center text-xl  font-medium cursor-pointer pt-4" style={{ marginBottom: '30px' }}>SIGN IN</h1>
      <RxAvatar className='mx-auto justify-center items-center cursor-pointer shadow-xl rounded-xl' size={50} />
      <input className='w-full p-2 flex  w-[90%] lg:w-[30rem] mx-auto justify-center rounded-bl-[1rem] rounded-tr-[1rem] mt-2 dark:bg-black  input text-base text-white placeholder:text-white placeholder:text-base' type="@" placeholder="ex. yourname@gmail.com" required />
      <input className='w-full p-2 flex  w-[90%] lg:w-[30rem] mx-auto justify-center rounded-bl-[1rem] rounded-tr-[1rem] mt-2 dark:bg-black  input text-base text-white placeholder:text-white placeholder:text-base' type="password" placeholder="password" required />
      <button className="p-3 my-6 mx-auto justify-center py-2 text-center bg-teal-500 flex w-[90%] lg:w-[25rem] rounded-md text-white">SignIn</button>
      <button className='w-full  p-2 text-black bg-white flex  w-[90%] lg:w-[25rem] items-center text-center mx-auto justify-center rounded-bl-[1rem] rounded-tr-[1rem] mt-2 '> <FcGoogle size={30} className='rounded-full p-1 justify-between border text-blue bg-[white] mr-[0.5rem]' />Google</button>
      <button className='w-full p-2 text-gray- bg-blue flex  w-[90%] lg:w-[25rem] items-center text-center mx-auto justify-center rounded-bl-[1rem] rounded-tr-[1rem] mt-2 '> <FaFacebookF size={30} className='rounded-full p-1 justify-between border text-blue bg-[white] mr-[0.5rem]' />Facebook</button>
      <button className='w-full p-2 text-gray- bg-black flex  w-[90%] lg:w-[25rem] items-center text-center mx-auto justify-center rounded-bl-[1rem] rounded-tr-[1rem] mt-2 '> <BsApple size={30} className='rounded-full p-1 justify-between text-[white] mr-[0.5rem]' />Apple</button>
      <h3 className='text-center py-3 mt-2'>Don't have account?
        <Link to='/SignUp'>
          <span className='text-[red] py-2 m-2 cursor-pointer'>Create account</span>
        </Link>
      </h3>
    </div>

  )
}
export default SignIn