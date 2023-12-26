"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { IoCloseSharp } from "react-icons/io5";
import { handleUpdateUserInfo } from "../serverAction/updateUserInfo";
import { useState } from "react";

const EditUserProfile = ({ setIsModalOpen, authUserData }) => {
  const [file, setFile] = useState();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
  };

  const id = authUserData._id;

  async function clientAction(formData) {
    const result = await handleUpdateUserInfo(formData, id);
    if (result?.error) {
      toast.error(result.error, { duration: 4000 });
    } else {
      toast.success(result.message, { duration: 4000 });
      setIsModalOpen(false);
    }
  }

  return (
    <div className="fixed z-10 left-0 top-0 h-full w-full overflow-auto flex items-center justify-center backdrop-opacity-50 bg-white/60">
      <div className="h-max w-96 lg:w-[28rem] bg-white relative rounded-xl border-2 border-secondary-color">
        <button
          className="btn btn-sm btn-circle absolute right-3 top-[6px]"
          onClick={() => setIsModalOpen(false)}
        >
          <IoCloseSharp size={24} color="gray" />
        </button>
        <h2 className="ml-9 mt-5 text-lg font-semibold text-gray-700">
          Edit Your Details:
        </h2>
        <div className="mt-3 mb-3 mx-4">
          <div>
            <form action={clientAction} className="border p-5 rounded-lg">
              <div>
                <div className="mb-3">
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-gray-800"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    defaultValue={authUserData.fullName}
                    name="fullName"
                    // onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-700 font-medium text-sm rounded-lg focus:border-gray-500 focus:outline-none w-full p-2.5"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    value={authUserData.email}
                    disabled
                    readOnly
                    className="bg-gray-50 border border-gray-300 text-gray-700 font-medium text-sm rounded-lg focus:border-gray-500 focus:outline-none w-full p-2.5 cursor-not-allowed"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-800"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    defaultValue={authUserData.phone}
                    name="phone"
                    // onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-700 font-medium text-sm rounded-lg focus:border-gray-500 focus:outline-none w-full p-2.5"
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-800"
                  >
                    Select Gender
                  </label>
                  <select
                    id="gender"
                    defaultValue={authUserData.gender}
                    name="gender"
                    // onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-700 font-medium text-sm rounded-lg focus:border-gray-500 focus:outline-none w-full p-2.5"
                  >
                    <option disabled>Choose a Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  name="imageUrl"
                />
                {file && (
                  <Image
                    src={file}
                    alt="My Image"
                    width={100}
                    height={100}
                    className="mt-2"
                  />
                )}
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-primary-color py-2 text-white rounded-md hover:bg-primary-hover-color text-sm"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;
