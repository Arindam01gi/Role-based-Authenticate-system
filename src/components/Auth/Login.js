import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex justify-center bg-gradient-to-br from-blue-200 to-blue-500 ">
      <div className=" flex justify-start rounded-xl my-20 w-4/5 border-2 border-white backdrop-blur-md bg-slate-50 bg-opacity-15 py-6">
        <form className="text-white   p-4 md:w-1/2 w-full  flex flex-col justify-center " style={{fontFamily:"'Poppins',sans-serif"}}>
          <div className="font-bold text-2xl text-center  text-black mb-4 whitespace-nowrap">LOGIN</div>
          <div className="flex flex-col justify-center items-center ">
            <div className=" px-3 mt-4 ">
              {/* <label for="username" className="text-xl font-semibold">
                Username
              </label> */}
              <input
                type="text"
                placeholder="Email "
                id="username"
                className="block my-3 rounded-3xl px-7 py-3 shadow-md "
              />
            </div>

            <div className="px-3 ">
              {/* <label for="password" className="text-xl font-semibold">
                Password
              </label> */}
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="block my-3 rounded-3xl px-7 py-3 text-md shadow-md"
              />
            </div>
            <div className="px-3 mt-4  flex flex-col justify-center items-center ">
              {/* <button className="bg-black  text-white  py-2 rounded-3xl text-xl shadow-md hover:bg-gray-800 whitespace-nowrap ">
                Log In
              </button> */}
              <button className="bg-black w-[255px] py-2 rounded-3xl text-xl shadow-md hover:bg-gray-800 whitespace-nowrap">
                Log In
              </button>
              <Link to='/signup'>
              <p className="p-3 text-black text-base">Don't have an account? <strong>Sign up</strong></p> 
              <p className="text-black text-center text-base">Or</p>
              </Link>
            </div>
            <div className="px-3 mt-4">
              <button className="bg-transparent border-2 border-black text-black px-10 py-2 rounded-3xl text-sm shadow-md flex gap-2 hover:shadow-2xl">
              <img src='/assets/google.svg' alt='google-logo' className="w-4 h-4 mt-[2px]"/> Log in with
                Google
              </button>
            </div>
            <div className="px-3 mt-4">
              <button className="bg-transparent border-2 border-black text-black px-8 py-2 rounded-3xl text-sm shadow-md flex gap-2">
              <img src='/assets/facebook.svg' alt='fb-logo' className="w-4 h-4 mt-[2px]"/> Log in with
                Facebook
              </button>
            </div>
          </div>
          
        </form>
        <div className="mt-16 md:visible invisible">
          <img
            src="https://stardatelogs.com/images/user/login.png"
            alt="login"
            className="bg-contain max-w-[28rem] p-5 "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
