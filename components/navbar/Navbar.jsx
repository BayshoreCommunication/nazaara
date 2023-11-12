"use client";
import { useCallback, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import { useDispatch } from "react-redux";
import { getCookie } from "cookies-next";
import { addItemToCart } from "@/store/cartSlice";
import NavBarUpdate from "./NavBarUpdate";

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
    <div className="bg-primary-color text-base-100 sticky top-0 z-50">
      <div id="navBar">
        {/* <DesktopNavbar /> */}
        <NavBarUpdate />
      </div>
    </div>
  );
};

export default Navbar;
