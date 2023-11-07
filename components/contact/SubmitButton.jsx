import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { BeatLoader } from "react-spinners";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      // aria-disabled={pending}
      className={`py-2 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-color w-full`}
    >
      {pending ? <BeatLoader color="#FFFFFF" size={10} /> : "SEND MESSAGE"}
    </button>
  );
};

export default SubmitButton;
