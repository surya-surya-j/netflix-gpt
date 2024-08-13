import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);

  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  return (
    <div className="">
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"
          alt="bg-img"
        />
      </div>
      <form className="p-10 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 bg-gray-700  w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 bg-gray-700  w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 bg-gray-700  w-full"
        />
        <button className="p-3 my-6 bg-red-700 w-full rounded-lg">
          {isSigninForm ? "Sign in" : "Sign Up"}
        </button>
        <p onClick={toggleSigninForm} className="cursor-pointer">
          {isSigninForm
            ? "New to Netflix? Sign Up now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
