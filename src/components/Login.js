import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [erroMessage, setErrormessage] = useState(null);

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //valid the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrormessage(message);
    if (message) return;
    //  signin & Signup Logic

    if (!isSigninForm) {
      // sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrormessage(error.message);
            });

         

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        className="p-10 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 bg-gray-700  w-full"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 my-4 bg-gray-700  w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 bg-gray-700  w-full"
        />
        <p className="text-red-500">{erroMessage}</p>
        <button
          className="p-3 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
