"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ResetPassword = ({ params }) => {
  const router = useRouter();

  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (password != passwordConfirm) toast.error("Password are not same");
    else {
      const url = `${process.env.API_URL}/api/v1/user/resetPassword/${params.token}`;

      try {
        const response = await axios.patch(
          url,
          { password },
          {
            headers: {
              authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
            },
          }
        );
        // console.log("POST request successful:", response.data);
        toast.success("password change successfully ");
        router.push("/user-authentication");

        setEmail(" ");
      } catch (error) {
        console.error("POST request error:", error);
        toast.error(error.response.data.message || "Something went wrong");
      }
    }
  };
  return (
    <div className="max-w-[30rem] mx-auto px-8 py-[10rem] pt-[6rem]">
      {" "}
      <h3 className="text-center text-2xl font-semibold mb-4 text-gray-900">
        Reset Password
      </h3>
      <form onSubmit={formSubmitHandler} className="space-y-5">
        <div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder=" Password"
              required
              className="block rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-gray-400 outline-none placeholder:text-gray-400 pl-3 w-full"
            />
          </div>
        </div>

        <div>
          <div>
            <input
              id="passwordconfirm"
              name="passwordconfirm"
              type="password"
              onChange={(event) => {
                setPasswordConfirm(event.target.value);
              }}
              placeholder="Password Confirm"
              required
              className="block rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-gray-400 outline-none placeholder:text-gray-400 pl-3 w-full"
            />
          </div>
        </div>

        <div>
          <button
            // onClick={handleSignIn}
            type="submit"
            className="flex w-full justify-center rounded-md bg-primary-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-hover-color"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
