import React from 'react';
import { Link } from 'react-router-dom';

const LibraryFeaures = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-white text-center">
          What Makes Our Library System <span className="underline decoration-blue-500">Better</span>  Than Others?
        </h1>

        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300 text-center">
        Our Library Management System excels through its intuitive user interface and robust features, ensuring seamless library operations.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
          {/* Card 1 */}
          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700">
            <span className="inline-block text-blue-500 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 100 12l1.121 1.121a3 3 0 104.242 4.242L9.88 16.12zM13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Dynamic Book Listings</h1>

            <p className="text-gray-500 dark:text-gray-300">
            Effortlessly oversee your library's collection by dynamically organizing and displaying all your books. Our system streamlines the management process, allowing you to efficiently categorize, update, and access your entire inventory with ease.
            </p>

            <Link to={'/all-books'} className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700">
            <span className="inline-block text-blue-500 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">User Management</h1>

            <p className="text-gray-500 dark:text-gray-300">
            Our intuitive user management system provides you with seamless control over your library's users, ensuring smooth operations and user satisfaction. Whether it's registering new users, updating existing profiles, or managing user permissions, our platform simplifies the process.
            </p>

            <Link to={'/all-books'} className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700">
            <span className="inline-block text-blue-500 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Intuitive Search Functionality</h1>

            <p className="text-gray-500 dark:text-gray-300">
            Navigate through your library's vast collection effortlessly with our user-friendly and intuitive search functionality. Our advanced search features allow patrons to quickly locate books based on various criteria such as title, author, genre, or keyword.
            </p>

            <Link to={'/all-books'} className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Card 4 */}
          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700">
            <span className="inline-block text-blue-500 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 100 12l1.121 1.121a3 3 0 104.242 4.242L9.88 16.12zM13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Customizable Themes</h1>

            <p className="text-gray-500 dark:text-gray-300">
            Craft a unique ambiance for your library by personalizing its visual presentation with our customizable theme options. With our versatile theme customization features, you have the flexibility to tailor every aspect of your library's appearance to align with your preferences and branding. 
            </p>

            <Link to={'/all-books'} className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LibraryFeaures;
