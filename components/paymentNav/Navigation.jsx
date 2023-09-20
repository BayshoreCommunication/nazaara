"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";

const Navigation = () => {
  const router = usePathname();
  const processed = router.split("/");
  let lastElement = processed[processed.length - 1];
  const lastValue = lastElement.split("-").join(" ");
  const url = decodeURIComponent(lastValue.toLowerCase());

  return (
    <div className="flex gap-2 items-center border-b pb-2">
      <Link
        className={url === "information" ? "text-primary-color" : ""}
        href="information"
      >
        Information
      </Link>{" "}
      <FaAngleRight />
      <Link
        className={url === "measurement" ? "text-primary-color" : ""}
        href={`measurement`}
      >
        Measurement
      </Link>{" "}
      {/* <FaAngleRight /> */}
      {/* <Link
        className={url === "payment" ? "text-primary-color" : ""}
        href={`payment`}
      >
        Payment
      </Link> */}
    </div>
  );
};

export default Navigation;
