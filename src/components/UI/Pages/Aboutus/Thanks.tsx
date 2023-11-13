import Link from "next/link";
import React from "react";

const Thanks = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl title">
        <span className="block xl:inline">The Heart of Our Brand:</span>
        <span className="block text-primary-100 xl:inline">You</span>
      </h1>
      <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl mt-10 px-5">
        At Trendy Fashion, we believe in more than just products – we believe in
        journeys, in connections, and in crafting experiences that resonate with
        you. Our story began at a humble kitchen table, fueled by a passion for
        innovation and a desire to create something exceptional.
      </p>
      <div className="relative flex flex-col sm:flex-row sm:space-x-4 justify-center mt-10 px-10">
        <Link
          href="/contactus"
          className="flex items-center w-full px-6 py-3 mb-3 text-lg bg-primary-100 rounded-md sm:mb-0 sm:w-auto"
        >
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
        <a
          href="#_"
          className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Thanks;
