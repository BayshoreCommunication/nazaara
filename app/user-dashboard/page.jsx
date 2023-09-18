"use client";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import DashboardUtil from "@/components/user-dashboard/DashboardUtil";
import EditUserProfile from "@/components/user-dashboard/EditUserProfileModal";
// import usefetch from "@/customhooks/usefetch";
import { useGetUserByIDQuery } from "@/services/userApi";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  //get authenticate user id using cookie
  let getUserIdFromCookie;
  const cookie = getCookie("userAuthCredential");
  if (cookie != null) {
    const obj = JSON.parse(cookie);
    getUserIdFromCookie = obj._id;
  }

  //fetch specific user data using rtk query
  const { data, isLoading } = useGetUserByIDQuery(getUserIdFromCookie);

  // when isLoading is false show loading spinner
  if (isLoading) {
    return <Loader height="h-[90vh]" />;
  }
  const authUserData = data?.data;

  // const date = new Date(authUserData?.createdAt);
  // const day = date.getDate().toString().padStart(2, "0");
  // const month = (date.getMonth() + 1).toString().padStart(2, "0");
  // const year = date.getFullYear();
  // const formattedDate = `${day}-${month}-${year}`;

  const date = new Date(authUserData?.createdAt);
  const day = date.getDate().toString().padStart(2, "0");

  // Array of month names
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

  const monthName = monthNames[date.getMonth()]; // Get the month name
  const year = date.getFullYear();
  const formattedDate = `${day}, ${monthName} - ${year}`;

  const handleLogout = () => {
    deleteCookie("userAuthCredential");

    const cookieValue = getCookie("userAuthCredential");
    if (!cookieValue) {
      toast.success("Successfully Logout");
      router.push("/");
    } else {
      toast.error("Failed to Logout.");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader height="h-[90vh]" />
      ) : (
        <div className="container my-10 flex flex-col gap-y-4">
          <h2 className="text-xl font-semibold text-primary-color">
            Hello, {authUserData?.fullName}
          </h2>
          <DashboardUtil />
          <div>
            <div className="text-gray-600 flex flex-col lg:flex-row gap-4 items-start">
              <div className="border rounded-lg py-3 px-4 flex-1">
                <div className="flex gap-2 mb-2">
                  <p className="text-lg font-medium text-gray-700">
                    Personal Profile
                  </p>
                  <p> | </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-primary-color"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex flex-col gap-y-1 text-sm">
                  <p>
                    <span className="font-semibold">Name: </span>
                    {authUserData?.fullName}
                  </p>
                  <p>
                    <span className="font-semibold">Email: </span>{" "}
                    {authUserData?.email}
                  </p>
                  {authUserData?.phone && (
                    <p>
                      <span className="font-semibold">Phone: </span>
                      {authUserData?.phone}
                    </p>
                  )}
                  {authUserData?.gender && (
                    <p>
                      <span className="font-semibold">Gender: </span>
                      {authUserData?.gender}
                    </p>
                  )}

                  <p>
                    <span className="font-semibold"> Refund: </span>
                    {authUserData?.refund}
                  </p>
                  <p>
                    <span className="font-semibold">Joined Science: </span>
                    {formattedDate}
                  </p>
                </div>
              </div>
              <div className="border rounded-lg py-3 px-4 flex-[2]">
                <div className="flex gap-2 mb-2 items-center">
                  <p className="text-lg font-medium text-gray-700">
                    Address Book
                  </p>
                  <p> | </p>
                  <Link href={`/user-dashboard/${authUserData?._id}`}>
                    <button className="text-primary-color">More</button>
                  </Link>
                </div>

                {authUserData?.addressBook && (
                  <div className="flex gap-3">
                    {authUserData?.addressBook.map((data) => (
                      <div
                        key={data._id}
                        className="border-e-2 flex-1 text-sm flex flex-col gap-y-2"
                      >
                        <p className="text-md text-green-800 bg-slate-200 px-2 py-1 w-max text-xs rounded-sm bg-gray-200">
                          {data?.addressType}
                        </p>
                        <p className=" font-medium text-gray-700">
                          {data?.fullName}
                        </p>
                        <p>{`${data?.street}, ${data?.zip}`}</p>
                        <p>{`${data?.city}, ${data?.country}`}</p>
                        <p>{data?.phone}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* recent order  */}
            <div>
              <div className="relative overflow-x-auto border py-2 px-4 rounded-lg text-gray-500 mt-4">
                <h2 className="text-lg font-medium ml-2 mb-2">Recent Orders</h2>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Order
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Placed On
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Item
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        22322862836283
                      </th>
                      <td className="px-6 py-4">27/12/2022</td>
                      <td className="px-6 py-4">
                        <Image
                          src="/images/category/bridal_top.png"
                          alt="My Image"
                          width={46}
                          height={40}
                        />
                      </td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        22322862836283
                      </th>
                      <td className="px-6 py-4">27/12/2022</td>
                      <td className="px-6 py-4">
                        <Image
                          src="/images/category/bridal_top.png"
                          alt="My Image"
                          width={46}
                          height={40}
                        />
                      </td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        22322862836283
                      </th>
                      <td className="px-6 py-4">27/12/2022</td>
                      <td className="px-6 py-4">
                        <Image
                          src="/images/category/bridal_top.png"
                          alt="My Image"
                          width={46}
                          height={40}
                        />
                      </td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        22322862836283
                      </th>
                      <td className="px-6 py-4">27/12/2022</td>
                      <td className="px-6 py-4">
                        <Image
                          src="/images/category/bridal_top.png"
                          alt="My Image"
                          width={46}
                          height={40}
                        />
                      </td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        22322862836283
                      </th>
                      <td className="px-6 py-4">27/12/2022</td>
                      <td className="px-6 py-4">
                        <Image
                          src="/images/category/bridal_top.png"
                          alt="My Image"
                          width={46}
                          height={40}
                        />
                      </td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {isModalOpen && <EditUserProfile setIsModalOpen={setIsModalOpen} />}
        </div>
      )}
    </>
  );
};

export default UserDashboard;
