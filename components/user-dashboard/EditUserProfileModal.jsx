import { useUpdateUserByIDMutation } from "@/services/userApi";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseSharp } from "react-icons/io5";

const EditUserProfile = ({ setIsModalOpen, authUserData }) => {
  const [updateUserById] = useUpdateUserByIDMutation();
  const [formData, setFormData] = useState({
    fullName: authUserData.fullName,
    phone: authUserData.phone,
    gender: authUserData.gender,
  });
  const [file, setFile] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
  };

  // console.log("auth user data", authUserData._id);
  const id = authUserData._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUserData = await updateUserById({ id, payload: formData });
    // console.log("update user data", updateUserData);
    if (updateUserData.data.success) {
      setIsModalOpen(false);
      toast.success("Address updated successfully", { duration: 3000 });
    }
    // console.log("Form Data:", formData);
    // console.log("Image File:", file);
  };

  return (
    <div className="fixed z-10 left-0 top-0 h-full w-full overflow-auto flex items-center justify-center backdrop-opacity-50 bg-white/60 ">
      <div className="h-max w-96 lg:w-[28rem] bg-white relative rounded-xl border-4 border-secondary-color">
        <button
          className="btn btn-sm btn-circle absolute right-3 top-[6px]"
          onClick={() => setIsModalOpen(false)}
        >
          <IoCloseSharp size={26} color="gray" />
        </button>
        <h2 className="ml-9 mt-3 text-lg font-semibold text-gray-600">
          Edit Your Details:
        </h2>
        <div className="mt-3 mb-3 mx-4">
          <div>
            <form onSubmit={handleSubmit} className="border p-5 rounded-lg">
              <div>
                <div className="mb-3">
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={authUserData.email}
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    name="phone"
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Gender
                  </label>
                  <select
                    id="gender"
                    value={formData.gender}
                    name="gender"
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option disabled>Choose a Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <input type="file" onChange={handleFileChange} />
                {file && (
                  <Image
                    src={file}
                    alt="My Image"
                    width={200}
                    height={180}
                    className="mt-2"
                  />
                )}
              </div>
              <button className="mt-4 w-full bg-primary-color py-2 text-white rounded-md hover:bg-primary-hover-color text-sm">
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
