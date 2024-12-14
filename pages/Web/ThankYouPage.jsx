// ThankYouPage.js
import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-4">Your inquiry has been submitted successfully. We will get in touch with you soon!</p>
        <p className="text-gray-500">Have a great day!</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
