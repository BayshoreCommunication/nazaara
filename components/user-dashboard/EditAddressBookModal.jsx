import { useGetUserAddressByIDQuery } from "@/services/userApi";
import { IoCloseSharp } from "react-icons/io5";
import Loader from "../Loader";
import { ScaleLoader } from "react-spinners";

const EditAddressBook = ({ setAddressBookModalOpen, addressEditId }) => {
  const {data, isLoading} = useGetUserAddressByIDQuery(addressEditId);
  const addressData = data?.data;
  return (
   <>
    {
      !isLoading && <div className="fixed z-10 left-0 top-0 h-full w-full overflow-auto flex items-center justify-center backdrop-opacity-50 bg-white/60 ">
      <div className="h-max w-96 lg:w-[28rem] bg-white relative rounded-xl border-4 border-secondary-color">
        <button
          className="btn btn-sm btn-circle absolute right-3 top-[6px]"
          onClick={() => setAddressBookModalOpen(false)}
        >
          <IoCloseSharp size={26} color="gray" />
        </button>
        <h2 className="ml-9 mt-5 text-lg font-semibold text-gray-600">
          Edit Your Address Details:
        </h2>
        <div className="mt-3 mb-3 mx-4">
          <div>
            <form className="border p-5 rounded-lg">
              <div className="grid grid-cols-2 gap-x-3">
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    defaultValue={addressData?.fullName}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Mobile"
                    defaultValue={addressData?.mobile}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="Street"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    id="Street"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Street"
                    defaultValue={addressData?.street}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="city"
                    defaultValue={addressData?.city}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="Country"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="Country"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Country"
                    defaultValue={addressData?.country}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="Zip"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    id="Zip"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Zip"
                    defaultValue={addressData?.zip}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Address Type
                  </label>
                  <select
                    id="type"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option disabled>Choose Address Type</option>
                    <option value="Home">Home</option>
                    <option value="Workspace">Workspace</option>
                  </select>
                </div>
              </div>
              <button className="mt-4 w-full bg-primary-color py-2 text-white rounded-md hover:bg-primary-hover-color text-sm">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    }
   </>
  );
};

export default EditAddressBook;
