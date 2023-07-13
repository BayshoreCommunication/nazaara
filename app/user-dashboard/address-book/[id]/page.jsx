"use client";
import DashboardUtil from "@/components/user-dashboard/DashboardUtil";
import EditAddressBook from "@/components/user-dashboard/EditAddressBookModal";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddressBook = () => {
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  return (
    <div className="container my-10">
      <h2 className="text-xl font-semibold">Hello, Sadit Shekh</h2>
      <DashboardUtil />
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold mb-3 text-gray-800">
          Address Book
        </h1>
        <button className="flex items-center gap-1 text-sm font-medium text-gray-700">
          <AiOutlinePlus color="#820000" /> Add New Address
        </button>
      </div>
      <div className="text-gray-700 font-medium text-sm grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 hover:shadow-xl flex flex-col gap-y-3">
          <div className="flex justify-between">
            <p className="text-base font-semibold">Md. Sadik</p>
            <button
              onClick={() => setAddressModalOpen(true)}
              className="text-primary-color font-medium"
            >
              EDIT
            </button>
          </div>
          <p>+880 1929290202</p>
          <div>
            {/* province, city, area  */}
            <p>Dhaka, Dhaka-North, Dakkhinkhan Brac Market</p>
            {/* other address  */}
            <p>Azompur,kachabazar,Daner jamtola mosjid</p>
          </div>

          <p className="bg-slate-200 px-1 py-0.5 text-blue-500 w-max">Home</p>
        </div>
        <div className="border rounded-lg p-6 hover:shadow-xl flex flex-col gap-y-3">
          <div className="flex justify-between">
            <p className="text-base font-semibold">Md. Sadik</p>
            <button
              onClick={() => setAddressModalOpen(true)}
              className="text-primary-color font-medium"
            >
              EDIT
            </button>
          </div>
          <p>+880 1929290202</p>
          <div>
            {/* province, city, area  */}
            <p>Dhaka, Dhaka-North, Dakkhinkhan Brac Market</p>
            {/* other address  */}
            <p>Azompur,kachabazar,Daner jamtola mosjid</p>
          </div>

          <p className="bg-slate-200 px-1 py-0.5 text-green-700 w-max">
            Office
          </p>
        </div>
      </div>
      {addressModalOpen && (
        <EditAddressBook setAddressBookModalOpen={setAddressModalOpen} />
      )}
    </div>
  );
};

export default AddressBook;
