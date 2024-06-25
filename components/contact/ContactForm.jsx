"use client";
import React, { useRef } from "react";
import { handleContact } from "../serverAction/action";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const ref = useRef(null);
  async function clientAction(formData) {
    //reset form
    ref.current?.reset();
    //client side validation
    const result = await handleContact(formData);
    if (result?.error) {
      //show error
      toast.error(result.error, { duration: 4000 });
    } else {
      toast.success(result.message, { duration: 4000 });
    }
  }
  return (
    <form ref={ref} action={clientAction} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:outline-none focus:border-gray-600 block w-full p-2.5"
          placeholder="Enter Name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:outline-none focus:border-gray-600 block w-full p-2.5"
          placeholder="Enter Email"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:outline-none focus:border-gray-600 block w-full p-2.5"
          placeholder="Let us know how we can help you"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:outline-none focus:border-gray-600 block w-full p-2.5"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      {/* form submit button component */}
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
