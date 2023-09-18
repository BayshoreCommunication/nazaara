import { removeItemFromCart, updateQuantity } from "@/store/cartSlice";
import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import Button from "../Button";
import Link from "next/link";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { BsBagCheck, BsFillBagCheckFill } from "react-icons/bs";
import { PiKeyReturnFill } from "react-icons/pi";
import { BiSolidLogOut } from "react-icons/bi";
import { TbLogout2, TbTruckReturn } from "react-icons/tb";

const UserCart = () => {
  return (
    <>
      <div className="flex flex-col text-start gap-5 bg-white text-black w-80 h-min absolute top-9 right-0 z-50 rounded-xl p-4 shadow-xl">
        <div className="border-b pb-2 w-full">
          <h2 className="text-lg font-semibold text-primary-color">
            User Dashboard
          </h2>
        </div>
        <div className="flex flex-col gap-y-3 w-full">
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
          <button className="flex justify-start border py-1.5 text-sm rounded-md text-gray-700 font-medium hover:bg-primary-color hover:text-white border-gray-500 hover:border-primary-color pl-2 items-center gap-2">
            <TbLogout2 size={20} /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default UserCart;
