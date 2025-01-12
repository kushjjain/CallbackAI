import React from 'react';
import { Button } from "../ui/Button";
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Redirect to home page or a desired page
  };

  return (
    <div className="container mx-auto max-w-3xl py-12 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-xl">
      <div className="flex flex-col items-center justify-center text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-indigo-00 mb-4">Thank You for Your Feedback!</h1>
        <p className="text-lg text-gray-600 mb-6">
          We appreciate you taking the time to share your thoughts with us. Your feedback helps us improve our service.
        </p>
        <Button
          variant="solid"
          size="lg"
          onClick={handleGoHome}
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
}
