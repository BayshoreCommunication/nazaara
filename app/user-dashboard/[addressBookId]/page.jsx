"use client";
import Loader from "@/components/Loader";
import DashboardUtil from "@/components/user-dashboard/DashboardUtil";
import EditAddressBook from "@/components/user-dashboard/EditAddressBookModal";
import { useGetUserByIDQuery } from "@/services/userApi";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddressBook = ({ params }) => {
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [addressEditId, setAddressEditId] = useState("");

  const userData = useGetUserByIDQuery(params.addressBookId);

  const { isLoading: userDataLoading } = userData;

  if (userDataLoading) {
    return <Loader height="h-[90vh]" />;
  }

  let data;
  if (userData.status === "fulfilled") {
    data = userData.data.data;
  }

  const handleEditModal = (id) => {
    setAddressModalOpen(true);
    setAddressEditId(id);
  };

  // console.log("addressId", addressEditId);

  return (
    <div className="container my-10">
      {data && (
        <h2 className="text-xl font-semibold">Hello, {data?.fullName}</h2>
      )}
      <DashboardUtil />
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold my-3 text-gray-800">
          Address Book
        </h1>
        <button
          onClick={() => setAddressModalOpen(true)}
          className="flex items-center gap-1 text-sm font-medium text-gray-700"
        >
          <AiOutlinePlus color="#820000" /> Add New Address
        </button>
      </div>
      <div className="text-gray-700 font-medium text-sm grid grid-cols-1 lg:grid-cols-2 gap-6">
        {data &&
          data.addressBook.map((data) => (
            <div
              key={data?._id}
              className="border rounded-lg p-6 hover:shadow-xl flex flex-col gap-y-3"
            >
              <div className="flex justify-between">
                <p className="text-base font-semibold">{data?.fullName}</p>
                <button
                  // onClick={() => setAddressModalOpen(true)}
                  onClick={() => handleEditModal(data?._id)}
                  className="text-primary-color font-medium"
                >
                  EDIT
                </button>
              </div>
              <p>{data?.mobile}</p>
              <div>
                {/* province, city, area  */}
                <p>{`${data?.street}, ${data?.zip}`}</p>
                {/* other address  */}
                <p>{`${data?.city}, ${data?.country}`}</p>
              </div>

              <p className="bg-slate-200 px-1 py-0.5 text-green-500 w-max">
                {data?.addressType}
              </p>
            </div>
          ))}
      </div>
      {addressModalOpen && (
        <EditAddressBook
          addressEditId={addressEditId}
          setAddressBookModalOpen={setAddressModalOpen}
        />
      )}
    </div>
  );
};

export default AddressBook;
