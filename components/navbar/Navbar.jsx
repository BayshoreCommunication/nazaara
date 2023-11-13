"use client";
import { useDispatch } from "react-redux";
import NavBarContent from "./NavBarContent";
import { addItemToCart } from "@/store/cartSlice";

const Navbar = ({ data }) => {
  // add cart items to redux store from database
  const dispatch = useDispatch();
  if (data) {
    data.data.map((elem) => dispatch(addItemToCart(elem)));
  }
  return (
    <div className="text-base-100">
      <div id="navBar">
        <NavBarContent />
      </div>
    </div>
  );
};

export default Navbar;
