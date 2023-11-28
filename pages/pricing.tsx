import React, { useState } from 'react';
import Link from 'next/link';


const PackageInput = () => (
  <div className="bg-orange-200 p-4 mb-4">
    <div className="mb-3">
      <label htmlFor={`itemId`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Item ID</label>
      <input type="text" id={`itemId`} name={`itemId`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Item ID" required />
    </div>
    <div>
      <label htmlFor={`quantity`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
      <input type="number" id={`quantity`} name={`quantity`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Item Quantity" required />
    </div>
  </div>
);

const Pricing = () => {
  
  const [packageInputs, setPackageInputs] = useState([{ id: 0 }]);

  const addPackageInput = () => {
    
    const newInput = { id: packageInputs.length };
    setPackageInputs([...packageInputs, newInput]);
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col justify-center items-center p-4">
    <h2 className="text-3xl font-bold mb-6 text-center">Request a Delivery</h2>
      <div className="bg-orange-500 w-full max-w-2xl flex flex-col items-center p-8">
        <h2 className="text-2xl font-bold text-black mb-6">Enter Package Information</h2>
        <div className="w-full">
          
          {packageInputs.map(input => (
            <PackageInput key={input.id}  />
          ))}
          <button className="mt-4 bg-orange-300 text-white text-sm px-6 py-2 rounded shadow hover:bg-orange-700 transition-colors"
            onClick={addPackageInput}>
            Add an item
          </button>
        </div>
        <div className="flex justify-center w-full mt-8 space-x-4">
        <Link href="/" className="text-sm bg-red-500 text-white px-6 py-2 rounded shadow hover:bg-red-600 transition-colors">
            Cancel
        </Link>
        <Link href="/shippinginfo"
            className="text-sm bg-gray-900 text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition-colors">
            Continue   
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
