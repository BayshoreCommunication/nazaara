"use client";
import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getCookie } from "cookies-next";
import { addItemToCart } from "@/services/cartSlice";

const Navigation = () => {
  // add cart items to redux store from database
  const dispatch = useDispatch();
  const fetchData = useCallback(async () => {
    const jsonStr = getCookie("userAuthCredential");
    try {
      if (jsonStr) {
        const obj = JSON.parse(jsonStr);
        const response = await fetch(
          `${process.env.API_URL}/api/v1/cart/user/${obj._id}`
        );
        const data = await response.json();

        if (data) {
          data.data.map((elem) => dispatch(addItemToCart(elem)));
        }
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const router = usePathname();
  const processed = router.split("/");
  let lastElement = processed[processed.length - 1];
  const lastValue = lastElement.split("-").join(" ");
  const url = decodeURIComponent(lastValue.toLowerCase());

  //   console.log(url);

  return (
    <div className="flex gap-2 items-center mt-4">
      {/* <Link className={url === "information" ? "red-link" : ""} href={``}>
        Cart
      </Link>{" "} */}
      {/* <FaAngleRight /> */}
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
      <FaAngleRight />
      <Link
        className={url === "payment" ? "text-primary-color" : ""}
        href={`payment`}
      >
        Payment
      </Link>
    </div>
  );
};

export default Navigation;
