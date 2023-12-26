"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";

const DashboardUtil = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-2 text-sm text-gray-600 font-medium items-center">
      <Link href="/user-dashboard" passHref>
        <button
          className={`${
            pathname === "/user-dashboard" && "text-primary-hover-color"
          } text-sm`}
        >
          My Profile
        </button>
      </Link>
      <FaAngleRight />
      <Link href="/user-dashboard/my-order" passHref>
        <button
          className={`${
            pathname === "/user-dashboard/my-order" &&
            "text-primary-hover-color"
          } text-sm`}
        >
          My Order
        </button>
      </Link>
      <FaAngleRight />
      <Link href="/user-dashboard/my-return" passHref>
        <button
          className={`${
            pathname === "/user-dashboard/my-return" &&
            "text-primary-hover-color"
          } text-sm`}
        >
          My Return
        </button>
      </Link>
    </div>
  );
};

export default DashboardUtil;
