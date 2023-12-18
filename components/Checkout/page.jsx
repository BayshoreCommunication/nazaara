"use client";

import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "../paymentNav/Navigation";
import Button from "../Button";

const CheckoutContent = ({ userData, cartData, countryName }) => {
  //   const cartItems = useSelector((state) => state.cart.items);
  //   const [countries, setCountries] = useState([]);
  //   const [cartData, setCartData] = useState();
  //   const [subtotal, setSubtotal] = useState(0);
  const [totalPay, setTotalPay] = useState(0);
  //   const [userData, setUserData] = useState();
  const [addressIndex, setAddressIndex] = useState(0);
  //   const [emailCheck, setEmailCheck] = useState(false);
  //   const [addressCheck, setAddressCheck] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("inside-dhaka");
  const [paymentMethod, setPaymentMethod] = useState("partial-payment");

  console.log("method", shippingMethod, paymentMethod);

  const handleClick = (index, event) => {
    event.preventDefault();
    setAddressIndex(index);
  };

  //calculate subtotal
  let subTotal = 0;
  let vatIncluded = 0;
  let totalAmount = 0;
  let couponAmount = 0;
  let freeShipping = false;
  if (cartData) {
    cartData?.map((data) => {
      subTotal = subTotal + data.product.salePrice * data.quantity;
    });
    //calculate vat
    vatIncluded = (subTotal * 0.07).toFixed(2);

    if (shippingMethod === "inside-dhaka" && !freeShipping) {
      totalAmount = subTotal + 100 - couponAmount;
    } else if (shippingMethod === "outside-dhaka" && !freeShipping) {
      totalAmount = subTotal + 250 - couponAmount;
    } else if (shippingMethod === "shop-pickup" || !freeShipping) {
      totalAmount = subTotal - couponAmount;
    }
  }

  const handleTotalPay = (paymentMethod, shippingMethod) => {};

  const handleSubmit = () => {};

  return (
    <div className="flex py-4">
      <div className="flex-1 border-e pr-10">
        <div>
          <form className="w-full flex flex-col gap-y-9">
            <div className="w-full mt-6 flex flex-col gap-y-3">
              <p className="text-lg font-semibold text-gray-700">
                Contact Information
              </p>
              <input
                className="appearance-none block w-full text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-not-allowed text-sm"
                type="email"
                name="email"
                value={userData?.email}
                readOnly
                placeholder="Enter Your Email"
              />
            </div>

            <div className="w-full flex flex-col gap-y-3">
              <p className="text-lg font-semibold text-gray-700">
                Shipping Information
              </p>
              <div className="flex gap-2">
                {userData?.addressBook.map((elem, index) => {
                  if (index === addressIndex) {
                    return (
                      <button
                        className="border text-white rounded-md px-2 py-1 bg-primary-color text-xs"
                        key={index}
                        type="button"
                        onClick={(event) => handleClick(index, event)}
                      >
                        {elem.addressType}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        className="border rounded-md px-2 py-1 bg-gray-300 text-sm"
                        key={index}
                        type="button"
                        onClick={(event) => handleClick(index, event)}
                      >
                        {elem.addressType}
                      </button>
                    );
                  }
                })}
              </div>
              <div>
                <label
                  htmlFor="fullName"
                  className="text-gray-700 text-sm font-semibold"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={userData?.addressBook[addressIndex]?.fullName}
                  // onChange={handleChangeAddress}
                  placeholder="Enter Full Name"
                />
              </div>

              <div>
                <label
                  htmlFor="street"
                  className="text-gray-700 text-sm font-semibold"
                >
                  Street <span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  type="text"
                  name="street"
                  id="street"
                  // onChange={handleChangeAddress}
                  value={userData?.addressBook[addressIndex]?.street}
                  placeholder="Enter Apartment, suite, etc."
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="city"
                    className="text-gray-700 text-sm font-semibold"
                  >
                    City <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                    type="text"
                    name="city"
                    id="city"
                    //   onChange={handleChangeAddress}
                    value={userData?.addressBook[addressIndex]?.city}
                    placeholder="Enter Your City"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="zip"
                    className="text-gray-700 text-sm font-semibold"
                  >
                    Zip <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                    type="text"
                    name="zip"
                    id="zip"
                    //   onChange={handleChangeAddress}
                    value={userData?.addressBook[addressIndex]?.zip}
                    placeholder="Enter City Zip Code"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="country"
                    className="text-gray-700 text-sm font-semibold"
                  >
                    Country <span className="text-red-600">*</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      className="w-full appearance-none border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="country"
                      name="country"
                      // onChange={handleChangeAddress}
                      value={userData?.addressBook[addressIndex]?.country}
                    >
                      <option value="">Select A Country</option>
                      {countryName.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="text-gray-700 text-sm font-semibold"
                  >
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="phone"
                    id="phone"
                    //   onChange={handleChangeAddress}
                    value={userData?.addressBook[addressIndex]?.phone}
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="details"
                  className="text-gray-700 text-sm font-semibold"
                >
                  Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter details about location"
                  className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  name="details"
                  id="details"
                  // onChange={handleChangeAddress}
                  //   value={userData?.addressBook[addressIndex]?.details}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-3">
              <div className="flex justify-between">
                <p className="text-lg font-semibold text-gray-700">
                  Shipping Method
                </p>
              </div>
              <div className="relative">
                <select
                  className="block appearance-none w-full border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  onClick={(e) => setShippingMethod(e.target.value)}
                  //   onClick={(event) =>
                  //     setPaymentCheck({
                  //       ...paymentCheck,
                  //       paymentMethod: event.target.value,
                  //     })
                  //   }
                >
                  <option value="inside-dhaka">Inside Dhaka</option>
                  <option value="outside-dhaka">Outside Dhaka</option>
                  <option value="shop-pickup">Shop pickup</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {shippingMethod === "inside-dhaka" && (
                <span className="text-primary-color text-xs">
                  *Delivary inside dhaka will charge ৳100/- only
                </span>
              )}
              {shippingMethod === "outside-dhaka" && (
                <span className="text-primary-color text-xs">
                  *Delivary outside dhaka will charge ৳250/- only
                </span>
              )}
              {shippingMethod === "shop-pickup" && (
                <span className="text-primary-color text-xs">
                  *No delivary charge applied
                </span>
              )}
            </div>

            <div className="w-full flex flex-col gap-y-3">
              <div className="flex justify-between">
                <p className="text-lg font-semibold text-gray-700">Payment</p>
              </div>
              <div className="flex flex-wrap  md:flex-nowrap gap-4">
                <div
                  onClick={(e) => setPaymentMethod(e.target.value)}
                  className="flex flex-1 items-center pl-4 border border-gray-200 rounded cursor-pointer"
                >
                  <input
                    type="radio"
                    id="credit"
                    name="payment"
                    value="partial-payment"
                    // checked
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
                  />
                  <label
                    htmlFor="credit"
                    className="w-full py-4 ml-2 text-xs font-medium text-gray-800 cursor-pointer"
                  >
                    CASH ON DELIVERY(ADVANCED PAYMENT 20%)
                  </label>
                </div>
                <div
                  onClick={(e) => setPaymentMethod(e.target.value)}
                  className="flex flex-1 items-center pl-4 border border-gray-200 rounded cursor-pointer"
                >
                  <input
                    type="radio"
                    id="debit"
                    name="payment"
                    value="full-payment"
                    className="w-4 h-4 text-primary-color bg-gray-100 border-gray-300 cursor-pointer"
                  />
                  <label
                    htmlFor="debit"
                    className="w-full py-4 ml-2 text-xs font-medium text-gray-800 cursor-pointer"
                  >
                    DEBIT/CREDIT CARDS AND MOBILE BANKING
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <Link href={`/measurement`} onClick={handleSubmit}>
                <Button text="Continue to Measurement" />
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 ml-10">
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Order Summary
        </p>
        <div className="text-black payment-container-end text-sm">
          {cartData?.map((data, index) => {
            return (
              <div
                className="flex justify-between items-center pb-7 border-b mb-7"
                key={index}
              >
                <div className="flex gap-4 items-center relative">
                  <Image
                    src={`${data?.product?.variant[0]?.imageUrl[0]}`}
                    alt="bridal_top"
                    width={60}
                    height={40}
                    className=" w-[5rem] h-[5.7rem] border-2 border-secondary-color rounded-sm"
                  />
                  <div className="flex justify-center items-center bg-white border-2 border-secondary-color rounded-full w-5 h-5 absolute -top-[6px] left-[64px]">
                    <p className="text-primary-color text-xs font-semibold">
                      {data?.quantity}
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-700">
                      {data?.product?.productName}
                    </p>
                    <p className="text-sm text-gray-700">Size: {data?.size}</p>
                    <p className="text-sm text-gray-700">
                      Price: ৳ {data?.product?.salePrice}
                    </p>
                  </div>
                </div>
                {/* <p>
                  BDT{" "}
                  {data?.productDetails?.salePrice * cartItems[index]?.quantity}
                  /-
                </p> */}
              </div>
            );
          })}

          <div className="mt-7 border-b pb-7 text-gray-700 font-medium">
            <div className="flex justify-between items-center mb-3">
              <p>Sub-Total</p>
              <p>৳ {subTotal}/-</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p>Vat Included</p>
              <p>৳ {vatIncluded}/-</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p>Discount Amount</p>
              <p>৳ {couponAmount}/-</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping</p>
              {shippingMethod === "inside-dhaka" && <p>৳ 100/-</p>}
              {shippingMethod === "outside-dhaka" && <p>৳ 250/-</p>}
              {shippingMethod === "shop-pickup" && <p>৳ 0/-</p>}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-3 text-gray-700 font-medium">
              <p>Total Amount</p>
              <p>৳ {totalAmount}/-</p>
            </div>
            <div className="flex justify-between items-center mt-3 text-gray-700 font-medium">
              <p>Payable Amount</p>
              {paymentMethod === "partial-payment" && (
                <p>৳ {(totalAmount * 20) / 100}/-</p>
              )}
              {paymentMethod === "full-payment" && <p>৳ {totalAmount}/-</p>}
            </div>
            <div className="flex justify-between items-center mt-3 text-gray-700 font-medium">
              <p>Due Amount</p>
              {paymentMethod === "partial-payment" && (
                <p>৳ {totalAmount - (totalAmount * 20) / 100}/-</p>
              )}
              {paymentMethod === "full-payment" && <p>৳ 0/-</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
