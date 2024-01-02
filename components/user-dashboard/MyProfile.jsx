"use client";
import DashboardUtil from "@/components/user-dashboard/DashboardUtil";
import EditUserProfile from "@/components/user-dashboard/EditUserProfileModal";
import Link from "next/link";
import React, { useState } from "react";

const MyProfile = ({ userData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const date = new Date(userData?.createdAt);
  const day = date.getDate().toString().padStart(2, "0");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const formattedDate = `${day}, ${monthName} - ${year}`;

  return (
    <>
      {userData ? (
        <div className="main-container my-10 flex flex-col gap-y-4">
          <h2 className="text-xl font-semibold text-primary-color uppercase">
            Hello, {userData?.fullName}
          </h2>
          <DashboardUtil />
          <div className="text-gray-600 flex flex-col lg:flex-row gap-4 items-start">
            <div className="border border-gray-300 rounded-lg py-3 px-4 flex-1">
              <div className="flex gap-2 mb-2">
                <p className="text-lg font-medium text-gray-800">
                  Personal Profile
                </p>
                <p> | </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-primary-color font-medium"
                >
                  Edit
                </button>
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <p>
                  <span className="font-semibold">Name: </span>
                  {userData?.fullName}
                </p>
                <p>
                  <span className="font-semibold">Email: </span>{" "}
                  {userData?.email}
                </p>
                {userData?.phone && (
                  <p>
                    <span className="font-semibold">Phone: </span>
                    {userData?.phone}
                  </p>
                )}
                {userData?.gender && (
                  <p>
                    <span className="font-semibold">Gender: </span>
                    {userData?.gender}
                  </p>
                )}
                <p>
                  <span className="font-semibold"> Refund: </span>
                  {userData?.refund}
                </p>
                <p>
                  <span className="font-semibold">Joined Science: </span>
                  {formattedDate}
                </p>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg py-3 px-4 flex-[2]">
            <div className="flex gap-2 mb-2 items-center">
              <p className="text-lg font-medium text-gray-800">Address Book</p>{" "}
              <p> | </p>
              {userData.addressBook.length < 3 ? (
                <Link href={`/user-dashboard/${userData?._id}`}>
                  <button className="text-primary-color font-medium">
                    {userData?.addressBook.length > 1 ? "More" : "Add New"}
                  </button>
                </Link>
              ) : (
                <Link href={`/user-dashboard/${userData?._id}`}>
                  <button className="text-primary-color font-medium">
                    Edit
                  </button>
                </Link>
              )}
            </div>

            {userData?.addressBook && (
              <div className="grid grid-cols-2 lg:flex gap-x-3 gap-y-6">
                {userData?.addressBook.map((data, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-sm flex flex-col gap-y-2 ${
                      index < userData?.addressBook.length - 1 &&
                      "border-e-2 border-gray-300"
                    }`}
                  >
                    <p className="text-md text-green-800 font-medium bg-slate-200 px-2 py-1 w-max text-xs rounded-sm bg-gray-200">
                      {data?.addressType}
                    </p>
                    <p className=" font-medium text-gray-700">
                      {data?.fullName}
                    </p>
                    <p>{`${data?.street}, ${data?.postalCode}`}</p>
                    <p>{`${data?.city}, ${data?.country}`}</p>
                    <p>{data?.phone}</p>
                  </div>
                ))}
              </div>
            )}
            {userData?.addressBook.length < 1 && (
              <div className="text-md text-green-800 bg-slate-200 px-2 py-1 w-max text-xs rounded-sm ">
                No Adress Book Found ! Please Add a New One👍
              </div>
            )}
          </div>
          {isModalOpen && (
            <EditUserProfile
              authUserData={userData}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      ) : (
        <p>No user data found!</p>
      )}
    </>
  );
};

export default MyProfile;
