"use client";
import { useCallback, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useDispatch } from "react-redux";
import { getCookie } from "cookies-next";
import { addItemToCart } from "@/store/cartSlice";

const Navbar = () => {
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

  return (
    <div className="bg-primary-color text-base-100 relative">
      {/* pc and desktop view  */}
      <div id="navBar">
        <DesktopNavbar />
      </div>

      {/* mobile and tab view  */}
      <div className="relative z-50">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
