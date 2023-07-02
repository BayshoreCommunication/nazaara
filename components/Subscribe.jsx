import React from "react";

const Subscribe = () => {
  return (
    <div className="container text-white flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-10 py-6">
      <div className="lg:w-3/5">
        <p className="text-xl font-semibold mb-4">JOIN ON OUR LIST TODAY!</p>
        <p className="text-base text-center lg:text-left">
          Be the first to know about new products, exclusive collections, the
          latest trends, and more. By Clicking on “Subscribe”, you agree to
          receive our newsletter. You can opt out at any time.
        </p>
      </div>
      <div className="lg:w-2/5">
        <form action="" className="flex flex-col lg:flex-row gap-2">
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-gray-300 w-[22rem] lg:w-full"
            placeholder="Enter Your Email"
            required
          />
          <button
            type="submit"
            className="bg-white text-primary-color px-4 py-2 lg:py-0 rounded-lg hover:bg-primary-color hover:text-white transition-colors duration-500 text-sm font-medium"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
