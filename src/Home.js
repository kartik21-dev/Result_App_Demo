import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Our App!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a simple application to help you create results easily.
      </p>
      <NavLink
        to="/create"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
      >
        Create Result
      </NavLink>
    </div>
  </>
);

export default Home;
