// src/components/SignInForm.js
import React from 'react';
import Login from './Login';
const Sign = () => {
  return (
    <>
  <div className="flex items-center justify-center min-h-screen bg-green-900">
      <form className="w-full max-w-md p-8 bg-green-200 rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Sign In</h2>
        
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign In
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/Sign up" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100"  >
      <form className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Sign In</h2>
        
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign In
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
    
    </>
  );
};

export default Sign;
