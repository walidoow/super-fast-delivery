import React, { useState } from 'react';
import Link from 'next/link';

interface StepCircleProps {
    filled: boolean;
    label: string;
  }

const LoginInput = () => (
  <div className="bg-orange-200 p-4 mb-4">
    <div className="mb-3">
      <label htmlFor={`userId`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
      <input type="text" id={`userId`} name={`userId`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter email address" required />
    </div>
    <div>
      <label htmlFor={`password`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
      <input type="password" id={`password`} name={`password`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter password" required />
    </div>
  </div>
);


const StepCircle: React.FC<StepCircleProps> = ({ filled, label }) => (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full ${filled ? 'bg-blue-700' : 'bg-white border-2 border-gray-400'} flex items-center justify-center`}
      >
        {filled && <div className="w-4 h-4 rounded-full bg-white" />}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
  

const Login = () => {
  
  const [packageInputs, setPackageInputs] = useState([{ id: 0 }]);

  const addPackageInput = () => {
    
    const newInput = { id: packageInputs.length };
    setPackageInputs([...packageInputs, newInput]);
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col justify-center items-center p-4">
    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <div className="bg-orange-500 w-full max-w-2xl flex flex-col items-center p-8">
        <h2 className="text-2xl font-bold text-black mb-6">Enter Login Credentials</h2>
        <div className="w-full">
          
          {packageInputs.map(input => (
            <LoginInput key={input.id}  />
          ))}

        </div>
        <div className="flex justify-center w-full mt-8 space-x-4">
        <Link href="/"
            className="text-sm bg-gray-900 text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition-colors">
            Login   
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
