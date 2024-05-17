import React from 'react';
import { Link } from 'react-router-dom';

const LibrarySubscription = () => {
  return (
    <div className="bg-white dark:bg-gray-900 my-12 py-10">
      <div className="container px-6 py-8 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">Choose Your Library Subscription</h1>
    <p className="my-4 text-gray-500 dark:text-gray-300 text-center">Select the plan that fits your library's needs</p>

        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                Basic
              </h2>
            </div>

            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                Free
              </span>
            </div>

            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
                Access to basic features
              </li>

              <li className="text-gray-500 dark:text-gray-400">
                Limited book listings
              </li>

              <li className="text-gray-500 dark:text-gray-400">
                Standard support
              </li>
            </ul>

            <Link to="/all-books" className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
              Explore Books
            </Link>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                Standard
              </h2>
            </div>

            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $19.90
              </span>
              
              <span className="text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>

            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
                Access to all features
              </li>

              <li className="text-gray-500 dark:text-gray-400">
                Unlimited book listings
              </li>

              <li className="text-gray-500 dark:text-gray-400">
                Priority support
              </li>

              <li className="text-gray-500 dark:text-gray-400">
                Customizable themes
              </li>
            </ul>

            <Link to="/all-books" className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
              Explore Books
            </Link>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                Premium
              </h2>
            </div>

            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $49.90
              </span>

              <span className="text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>

            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
                Access to all features
              </li>
              
              <li className="text-gray-500 dark:text-gray-400">
                Unlimited book listings
              </li>
              
              <li className="text-gray-500 dark:text-gray-400">
                Premium support
              </li>
              
              <li className="text-gray-500 dark:text-gray-400">
                Advanced analytics
              </li>
              
              <li className="text-gray-500 dark:text-gray-400">
                Customizable themes
              </li>
            </ul>

            <Link to="/all-books" className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
              Explore Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibrarySubscription;
