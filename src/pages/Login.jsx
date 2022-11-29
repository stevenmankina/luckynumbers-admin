import React, { useState } from "react";


const Login = ({setUser}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="container px-5 py-20 mx-auto flex">
      
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col m-auto border w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-2xl font-bold text-left">Login</h2>
        <p className=" text-left mt-2 mb-5 text-gray-600">
          Please Provide Your Login Credentials
        </p>
        
        <div className="mb-1 text-left">
          <label htmlFor="loginEmail" className="leading-7">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            id="loginEmail"
            name="loginEmail"
            className="w-full bg-white rounded border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-300 ease-in-out peer"
          />
          <p className="invisible mt-1 peer-invalid:visible  text-danger-400 text-xs">
            Please enter a valid email address
          </p>
          
        </div>
        <div className="text-left mb-4">
          <label htmlFor="loginPassword" className="leading-7 text-sm">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            id="loginPassword"
            name="loginPassword"
            className="w-full bg-white rounded border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
          />
        </div>

        <button
          onClick={()=> console.log(email + " " + password)}
          className="text-white border-0 py-2 px-6 focus:outline-none bg-primary-500 rounded text-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;