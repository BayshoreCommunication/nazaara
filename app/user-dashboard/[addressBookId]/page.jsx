"use client";
import CreateAddressBook from "@/components/user-dashboard/CreateAddressBookModal";
import DashboardUtil from "@/components/user-dashboard/DashboardUtil";
import EditAddressBook from "@/components/user-dashboard/EditAddressBookModal";
import {
  useDeleteUserAddressByIdMutation,
  useGetUserByIDQuery,
} from "@/services/userApi";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BeatLoader } from "react-spinners";
import Swal from "sweetalert2";

const AddressBook = ({ params }) => {
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [addAddressBookModal, setAddAddressBookModal] = useState(false);
  const [addressEditId, setAddressEditId] = useState("");

  const userData = useGetUserByIDQuery(params.addressBookId);
  const [deleteAddress] = useDeleteUserAddressByIdMutation();

  const { isLoading: userDataLoading } = userData;

  if (userDataLoading) {
    return (
      <div className={`flex justify-center items-center w-full h-64`}>
        <BeatLoader
          color="#820000"
          margin={5}
          speedMultiplier={1.5}
          width={5}
        />
      </div>
    );
  }

  let data;
  if (userData.status === "fulfilled") {
    data = userData.data.data;
  }

  const dataLength = data?.addressBook?.length;

  const handleEditModal = (id) => {
    setAddressModalOpen(true);
    setAddressEditId(id);
  };

  //handle delete

  const handleDeleteAddress = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const categoryDel = await deleteAddress(id);
        if (categoryDel) {
          Swal.fire("Deleted!", "Your address has been deleted.", "success");
        }
      }
    });
  };

  return (
    <>
      {userDataLoading ? (
        <div className={`flex justify-center items-center w-full h-64`}>
          <BeatLoader color="#820000" />
        </div>
      ) : (
        <div className="main-container mb-10 mt-20 lg:mt-28">
          {data && (
            <h2 className="text-xl font-semibold mb-2 uppercase">
              Hello, {data?.fullName}
            </h2>
          )}
          <DashboardUtil />
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold my-3 text-gray-800">
              Address Book
            </h1>
            {data?.addressBook?.length < 3 && (
              <button
                onClick={() => setAddAddressBookModal(true)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700"
              >
                <AiOutlinePlus color="#820000" /> Add New Address
              </button>
            )}
          </div>
          <div>
            {!data ? (
              <div className="w-full h-[40vh] flex justify-center items-center">
                <BeatLoader color="#820000" />
              </div>
            ) : (
              <div className="text-gray-700 font-medium text-sm grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data.addressBook.map((data) => (
                  <div
                    key={data?._id}
                    className="border rounded-lg p-6 hover:shadow-xl flex flex-col gap-y-3"
                  >
                    <div className="flex justify-between">
                      <p className="text-base font-semibold">
                        {data?.fullName}
                      </p>
                      <div className="flex gap-2">
                        <button
                          // onClick={() => setAddressModalOpen(true)}
                          onClick={() => handleEditModal(data?._id)}
                          className="text-primary-color font-medium"
                        >
                          EDIT
                        </button>
                        {dataLength > 1 && (
                          <button
                            onClick={() => handleDeleteAddress(data?._id)}
                            className="text-primary-color font-medium"
                          >
                            DELETE
                          </button>
                        )}
                      </div>
                    </div>
                    <p>{data?.phone}</p>
                    <div>
                      {/* province, city, area  */}
                      {data?.street && <span>{`${data?.street}, `}</span>}
                      {data?.postalCode && <span>{data?.postalCode}</span>}
                      {/* other address  */}
                      <p>{`${data?.city}, ${data?.country}`}</p>
                    </div>

                    <p className="bg-gray-200 border rounded-sm px-2 py-0.5 text-green-500 w-max text-xs">
                      {data?.addressType}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {addressModalOpen && (
            <EditAddressBook
              addressEditId={addressEditId}
              setAddressBookModalOpen={setAddressModalOpen}
            />
          )}
          {addAddressBookModal && data?._id && (
            <CreateAddressBook
              userId={data?._id}
              setAddAddressBookModal={setAddAddressBookModal}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AddressBook;
