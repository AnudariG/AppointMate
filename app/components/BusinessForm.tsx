'use client'
import React, { useState } from 'react';
// Using tailwind css

// Reusable InputField component
const InputField: React.FC<{   // FC : Functional Component
  label: string;
  value: string;
  onChange: (value: string) => void; }> = ({ label, value, onChange }) => {
  return (
    <>
      <label className='block text-sm font-medium text-gray-600'>
        {label}:
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='mt-1 p-2 border border-indigo-500 rounded-md w-full focus:outline-none focus:border-pink-700'
        />
      </label>
      <br />
    </>
  );
};

const BusinessForm = () => {
  // State to store input values
  const [businessName, setBusinessName] = useState('');
  const [schedulingURL, setSchedulingURL] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform actions with the input values
    console.log('Business Name:', businessName);
    console.log('Scheduling URL:', schedulingURL);
    // You can also perform further actions, such as navigation to another page
  };

  return (
    <div className='bus-form'>
      <h2 className='text-2xl font-bold mb-4'>Set up your business</h2>

      <form onSubmit={handleSubmit}>

        <InputField label="Business Name" value={businessName}
          onChange={setBusinessName} />

        <InputField label="Scheduling URL" value={schedulingURL}
          onChange={setSchedulingURL} />

        <button type="submit" className='px-4 py-2 mb-8 bg-blue-900 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-pink-700'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BusinessForm;
