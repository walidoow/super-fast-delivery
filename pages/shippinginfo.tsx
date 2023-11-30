import React from 'react';
import Link from 'next/link';

interface StepCircleProps {
  filled: boolean;
  label: string;
}

const StepCircle: React.FC<StepCircleProps> = ({filled, label}) => (
  <div className="flex flex-col items-center">
    <div
      className={`w-8 h-8 rounded-full ${filled ? 'bg-blue-700' : 'bg-white border-2 border-gray-400'} flex items-center justify-center`}
    >
      {filled && <div className="w-4 h-4 rounded-full bg-white"/>}
    </div>
    <span className="text-xs mt-1">{label}</span>
  </div>
);

const ProgressBar = () => (
  <div className="flex items-center mb-6">
    <StepCircle filled={true} label="Details"/>
    <div className="flex-1 border-t-2 border-dotted border-black-400 mx-2"/>
    <StepCircle filled={true} label="Shipping"/>
  </div>
);

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col justify-center items-center p-4 pb-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Request a Delivery</h2>
      <div className="bg-orange-500 w-full max-w-2xl flex flex-col items-center p-8 pb-16">
        <h2 className="text-2xl font-bold text-black mb-6">Enter Destination Information</h2>
        <ProgressBar/>

        <div className="w-full pb-16">
          {/* Form Fields */}
          {[
            {label: 'Prefix', id: 'prefix'},
            {label: 'First Name', id: 'firstName'},
            {label: 'Middle Name', id: 'middleName'},
            {label: 'Last Name', id: 'lastName'},
            {label: 'Address Line 1', id: 'address1'},
            {label: 'Address Line 2', id: 'address2'},
            {label: 'City', id: 'city'},
            {label: 'Province', id: 'province'},
            {label: 'ZIP/Postal Code', id: 'zip'},
            {label: 'Country', id: 'country'},
            {label: 'Primary Phone Number', id: 'primaryPhone'},
            {label: 'Secondary Phone Number', id: 'secondaryPhone'},
          ].map(({label, id}) => (
            <div key={id} className="mb-4">
              <label htmlFor={id} className="block text-black text-sm mb-2">{label}</label>
              <input type="text" id={id} name={id} className="w-full p-2 rounded"/>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full mt-8 space-x-4 overflow-auto">
          <Link href="/pricing"
                className="text-sm bg-red-500 text-white px-6 py-2 rounded shadow hover:bg-red-600 transition-colors">
            Cancel
          </Link>
          <Link href="/quotation"
                className="text-sm bg-gray-900 text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition-colors">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
