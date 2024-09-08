import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function getOtp(payload, url) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((data) => data.json());
}

const Signup = () => {
  const navigate = useNavigate(); // For navigation after successful OTP generation

  const [userData, setUserData] = useState({
    name: '',
    u_email: '',
    password: ''
  });

  useEffect(() => {
    console.log('User data updated:', userData);
  }, [userData]);

  const handleSuccessToast = () => toast.success("OTP generated successfully!");
  const handleErrorToast = () => toast.error("Error generating OTP. Please try again.");

  const generateOtp = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/orm/user/generateotp/`;
      const payload = { ...userData };
      const resp = await getOtp(payload, url);

      if (resp.status === '200') {
        handleSuccessToast();
        setTimeout(() => {
          navigate("/verifyotp"); // Navigate to the verify OTP page after success
        }, 1500); // Delay navigation to allow toast to be shown
      } else {
        handleErrorToast();
      }

      console.log(resp);
    } catch (err) {
      console.log(err);
      handleErrorToast();
    }
  };

  const updateUserData = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    generateOtp();
  };

  return (
    <div className="flex justify-center bg-gradient-to-br from-blue-200 to-blue-500">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex justify-start rounded-xl my-20 w-4/5 border-2 border-white backdrop-blur-md bg-slate-50 m-6 bg-opacity-15">
        <form
          className="text-white p-4 md:w-1/2 w-full flex flex-col justify-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <div className="font-extrabold text-lg md:text-2xl text-black mb-4 text-center">
            SIGN UP
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="px-3">
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                className="block my-3 rounded-3xl px-8 py-3 shadow-md text-black"
                value={userData.name}
                onChange={updateUserData}
              />
            </div>

            <div className="px-3">
              <input
                type="email"
                placeholder="Email"
                id="u_email"
                className="block my-3 rounded-3xl px-8 py-3 text-md shadow-md text-black"
                value={userData.u_email}
                onChange={updateUserData}
              />
            </div>
            <div className="px-3">
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="block my-3 rounded-3xl px-8 py-3 text-md shadow-md text-black"
                value={userData.password}
                onChange={updateUserData}
              />
            </div>

            <div className="px-3 mt-4">
              <button
                className="bg-black text-white px-[6rem] py-2 rounded-3xl text-xl shadow-md hover:bg-gray-800 ml-2 cursor-pointer whitespace-nowrap"
                onClick={handleClick}
              >
                Sign Up
              </button>
              <Link to="/login">
                <p className="p-3 text-black">
                  Already have an account? <strong>Log In</strong>
                </p>
              </Link>
              <p className="text-black text-center">Or</p>
            </div>
            <div className="px-3 mt-4">
              <button className="bg-transparent border-2 border-black text-black px-10 py-2 flex gap-2 rounded-3xl text-sm shadow-md">
                <img src='/assets/google.svg' alt='google-logo' className="w-4 h-4 mt-[2px]" /> Sign up with Google
              </button>
            </div>
            <div className="px-3 mt-4">
              <button className="bg-transparent border-2 border-black text-black px-8 py-2 flex rounded-3xl text-sm shadow-md gap-2">
                <img src='/assets/facebook.svg' alt='fb-logo' className="w-4 h-4 mt-[2px]" /> Sign up with Facebook
              </button>
            </div>
          </div>
        </form>
        <div className="mt-16 flex justify-center invisible md:visible">
          <img
            src="https://stardatelogs.com/images/user/login.png"
            alt="login"
            className="object-contain max-w-[28rem] p-5 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
