'use client'
import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
import DashboardUtil from '@/components/user-dashboard/DashboardUtil'
import EditUserProfile from '@/components/user-dashboard/EditUserProfileModal'
// import usefetch from "@/customhooks/usefetch";
import { useGetUserByIDQuery } from '@/services/userApi'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  //get authenticate user id using cookie
  let getUserIdFromCookie
  const cookie = getCookie('userAuthCredential')
  if (cookie != null) {
    const obj = JSON.parse(cookie)
    getUserIdFromCookie = obj._id
  }

  //fetch specific user data using rtk query
  const { data, isLoading } = useGetUserByIDQuery(getUserIdFromCookie)

  // when isLoading is false show loading spinner
  if (isLoading) {
    return <Loader height="h-[90vh]" />
  }
  const authUserData = data?.data

  // const date = new Date(authUserData?.createdAt);
  // const day = date.getDate().toString().padStart(2, "0");
  // const month = (date.getMonth() + 1).toString().padStart(2, "0");
  // const year = date.getFullYear();
  // const formattedDate = `${day}-${month}-${year}`;

  const date = new Date(authUserData?.createdAt)
  const day = date.getDate().toString().padStart(2, '0')

  // Array of month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const monthName = monthNames[date.getMonth()] // Get the month name
  const year = date.getFullYear()
  const formattedDate = `${day}, ${monthName} - ${year}`

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
                  <span className="font-semibold">Email: </span>{' '}
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
          </div>
          <div className="border rounded-lg py-3 px-4 flex-[2]">
            <div className="flex gap-2 mb-2 items-center">
              <p className="text-lg font-medium text-gray-700">Address Book</p>
              <p> | </p>
              <Link href={`/user-dashboard/${authUserData?._id}`}>
                <button className="text-primary-color">More</button>
              </Link>
            </div>

            {authUserData?.addressBook && (
              <div className="flex gap-3">
                {authUserData?.addressBook.map((data, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-sm flex flex-col gap-y-2 ${
                      index < authUserData?.addressBook.length - 1 &&
                      'border-e-2'
                    }`}
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
          {isModalOpen && (
            <EditUserProfile
              authUserData={authUserData}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      )}
    </>
  )
}

export default UserDashboard
