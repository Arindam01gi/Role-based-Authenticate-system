import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex justify-center bg-gradient-to-br from-blue-200 to-blue-500 h-screen">
      <div className=" flex justify-start rounded-xl my-20 w-2/3 border-2 border-white backdrop-blur-md bg-slate-50 bg-opacity-15">
        <form className="text-white   p-4 w-1/2  flex flex-col justify-center " style={{fontFamily:"'Poppins',sans-serif"}}>
          <div className="font-bold text-2xl text-center  text-black mb-4">LOGIN</div>
          <div className="flex flex-col justify-center items-center">
            <div className=" px-3 mt-4">
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

            <div className="px-3">
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
            <div className="px-3 mt-8">
              <button className="bg-black  text-white px-[6rem] py-2 rounded-3xl text-xl shadow-md hover:bg-gray-800 ml-4">
                Log In
              </button>
              <Link to='/signup'>
              <p className="p-3 text-black">Don't have an account? <strong>Sign up</strong></p> 
              <p className="text-black text-center">Or</p>
              </Link>
            </div>
            <div className="px-3 mt-4">
              <button className="bg-transparent border-2 border-black text-black px-10 py-2 rounded-3xl text-sm shadow-md ">
                <i class="fa-brands fa-google mt-1 mr-2"></i> Log in with
                Google
              </button>
            </div>
            <div className="px-3 mt-4">
              <button className="bg-transparent border-2 border-black text-black px-8 py-2 rounded-3xl text-sm shadow-md ">
                <i className="fa-brands fa-facebook mt-1 mr-2"></i> Log in with
                Facebook
              </button>
            </div>
          </div>
          
        </form>
        <div className="mt-16">
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
