"use client";

import Link from "next/link";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { BsBagCheck, BsFillBagCheckFill } from "react-icons/bs";
import { TbLogout2, TbTruckReturn } from "react-icons/tb";
import { deleteCookie, getCookie } from "cookies-next";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const UserCart = (props) => {
  const userName = props?.userName;
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("userAuthCredential");

    const cookieValue = getCookie("userAuthCredential");
    if (!cookieValue) {
      toast.success("Successfully Logout");
      router.push("/");
    } else {
      toast.error("Failed to Logout.");
    }
    location.reload();
  };

  return (
    <>
      <div className="flex flex-col text-start gap-4 bg-white text-black w-80 h-min absolute top-9 right-0 z-50 rounded-xl p-4 shadow-xl">
        <div className="border-b pb-2 w-full">
          <h2 className="text-lg font-semibold text-primary-color">
            {userName}
          </h2>
        </div>
        <div className="flex flex-col gap-y-3 w-full border-b pb-4 ">
          <Link
            className="border py-1.5 text-sm rounded-md text-gray-700 font-medium hover:bg-primary-color hover:text-white border-gray-500 hover:border-primary-color pl-2 flex items-center gap-2"
            href={"/user-dashboard"}
          >
            <FaRegUserCircle size={18} /> My Profile
          </Link>
          <Link
            className="border py-1.5 text-sm rounded-md text-gray-700 font-medium hover:bg-primary-color hover:text-white border-gray-500 hover:border-primary-color pl-2 flex items-center gap-2"
            href={"/user-dashboard/my-order"}
          >
            <BsBagCheck size={18} /> My Order
          </Link>
          <Link
            className="border py-1.5 text-sm rounded-md text-gray-700 font-medium hover:bg-primary-color hover:text-white border-gray-500 hover:border-primary-color pl-2 flex items-center gap-2"
            href={"/user-dashboard/my-return"}
          >
            <TbTruckReturn size={20} /> My Return
          </Link>
        </div>
        {/* <div className="flex bg-primary-color"> */}
        <button
          onClick={handleLogout}
          className="flex border w-full justify-center px-3 bg-primary-color hover:bg-primary-hover-color text-white py-1.5 text-sm rounded-md font-medium pl-2 items-center gap-2"
        >
          <TbLogout2 size={20} /> Logout
        </button>
      </div>
    </>
  );
};

export default UserCart;
