"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [email, setEmail] = useState();
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const url = `${process.env.API_URL}/api/v1/user/forgotPassword`;
    try {
      const response = await axios.post(url, { email });
      console.log("POST request successful:", response.data);
      toast.success("Reset password email sent");
      setEmail(" ");
    } catch (error) {
      console.error("POST request error:", error);
      toast.error(error.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-[30rem] mx-auto px-8 py-[10rem]">
      <form onSubmit={formSubmitHandler} className="">
        <div className="">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
          >
            Forgot Password
          </label>
          <div className="mb-[2rem] ">
            <input
              id="email"
              name="email"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Enter email"
              required
              className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-gray-400 outline-none placeholder:text-gray-400 pl-3 w-full"
            />
          </div>
        </div>

        <div>
          <button
            // onClick={handleSignIn}
            type="submit"
            className="flex w-full justify-center rounded-md bg-primary-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-hover-color"
          >
            Reset Password
          </button>
        </div>
      </form>

      <div className="text-sm text-end mt-1">
        <span className="mr-2">or</span>
        <Link
          href="/user-authentication"
          className="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-2"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default page;
