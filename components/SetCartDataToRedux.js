"use client";
import { addItemToCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

export const SetCartDataToRedux = ({ data }) => {
  const dispatch = useDispatch();
  if (data) {
    data.data.map((elem) => dispatch(addItemToCart(elem)));
  }
};
