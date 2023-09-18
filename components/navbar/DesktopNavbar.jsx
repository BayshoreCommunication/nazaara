"use client";
import Image from "next/image";
import Link from "next/link";
import Cart from "../shopping-cart/Cart";
import { useCallback, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useSelector } from "react-redux";
import useGlobalCart from "@/customhooks/useGlobalCart";
import { BsBagXFill, BsFillBagCheckFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import UserCart from "../user-dashboard/UserCart";

const DesktopNavbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const apiUrl = `${process.env.API_URL}/api/v1/product/categories`;
  const [categories, setCategories] = useState(null);
  const [auth, setAuth] = useState("signIn");
  const [imgUrl, setImgUrl] = useState(null);
  const [cookieData, setCookieData] = useState(null);

  const {
    isCartOpen: isAddToCartOpen,
    setIsCartOpen: setIsAddToCartOpen,
    cartRef: addToCartRef,
  } = useGlobalCart();
  const {
    isCartOpen: isUserDashboardOpen,
    setIsCartOpen: setisUserDashboardOpen,
    cartRef: userDescriptionRef,
  } = useGlobalCart();

  const jsonStr = getCookie("userAuthCredential");

  const getCookieData = useCallback(() => {
    if (jsonStr != null) {
      const obj = JSON.parse(jsonStr);
      setImgUrl(obj.imageUrl);
      setCookieData(obj);
    }
  }, [jsonStr]);
  // console.log("Cookie DAta", cookieData.fullName.slice(0, 1));

  // const name = cookieData.fullName;
  // const split = name.split(" ");
  // const takeword = split.map((data) => data.slice(0, 1));
  // const addword = takeword.join("");
  // const slice = addword.slice(0, 2);
  // console.log("split", slice);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        setCategories(response.data.newData);
      }
    } catch (error) {
      console.error(error);
    }
  }, [apiUrl]);

  useEffect(() => {
    getCookieData();
    fetchData();
  }, [getCookieData, jsonStr, apiUrl, fetchData]);

  const cartQuantity = cartItems.length;

  const handleCartToggle = () => {
    setIsAddToCartOpen(!isAddToCartOpen); // Toggle the cart open/close state
  };
  const handleUserToggle = () => {
    setisUserDashboardOpen(!isUserDashboardOpen); // Toggle the cart open/close state
  };

  return (
    <div className="hidden lg:block container py-4">
      <div className="flex justify-between items-center relative">
        <div className="w-1/4">
          <Link href="/" className=" px-2 py-1 text-base">
            EXCLUSIVE WOMAN WEAR
          </Link>
        </div>
        <div className="w-2/4 flex justify-center">
          <Link className="w-max" href="/">
            <Image
              src="/images/nazara-navbar-logo.png"
              alt="logo"
              width={250}
              height={90}
            />
          </Link>
        </div>
        <div className="w-1/4">
          <div className="flex gap-x-6 justify-end">
            {/* User Authentication  */}
            <div className="relative" ref={userDescriptionRef}>
              {cookieData ? (
                <>
                  <div className="cursor-pointer" onClick={handleUserToggle}>
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt="logo"
                        width={23}
                        height={23}
                        className="cursor-pointer rounded-full h-7 w-7 shadow-md border-2"
                      />
                    ) : (
                      <div className="border-2 w-7 h-7 rounded-full flex justify-center items-center hover:bg-white hover:text-primary-color">
                        <p className="">{cookieData.fullName.slice(0, 1)}</p>
                      </div>
                    )}
                  </div>
                  {isUserDashboardOpen && (
                    <UserCart userName={cookieData?.fullName} />
                  )}
                </>
              ) : (
                <Link href="/user-authentication">
                  <Image
                    src="/images/logo/user.svg"
                    alt="logo"
                    width={23}
                    height={23}
                    className="cursor-pointer"
                  />
                </Link>
              )}
            </div>
            {/* shopping cart  */}
            <div className="relative" ref={addToCartRef}>
              {/* <Image
                src="/images/logo/shopping-card.svg"
                alt="logo"
                width={25}
                height={30}
                className="cursor-pointer"
                onClick={handleCartToggle} //  Handle cart toggle on click
              /> */}

              {cookieData ? (
                <AiOutlineShoppingCart
                  className="cursor-pointer"
                  size={27}
                  onClick={handleCartToggle}
                />
              ) : (
                <Link href={"/user-authentication"}>
                  <AiOutlineShoppingCart className="cursor-pointer" size={27} />
                </Link>
              )}
              {cartQuantity > 0 && (
                <div className="bg-white flex justify-center items-center rounded-full absolute bottom-7 left-5 w-[16px] h-[16px]">
                  <p className="text-primary-color text-xs font-semibold">
                    {cartQuantity}
                  </p>
                </div>
              )}
              {/* shopping cart content*/}
              {isAddToCartOpen && <Cart />}
              {/* Render cart if isCartOpen is true */}
            </div>
          </div>
        </div>
        {/*  */}
      </div>

      <div className="flex justify-between items-center mt-2">
        <div>
          {categories && (
            <ul className="flex gap-2 2xl:gap-4">
              <div>
                <li className="font-medium relative bg-base-100 text-primary-color cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                  <Link href="/products">ALL PRODUCTS</Link>
                </li>
              </div>
              {categories.map((elem, index) => {
                if (index < 3) {
                  return (
                    <div className="group" key={index}>
                      <li className="font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                        {elem.category}
                        <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                      </li>
                      <div className="hidden text-text-color group-hover:block bg-base-100 absolute w-full left-0 top-[160px] z-20 shadow-xl">
                        <div className="flex justify-between w-2/3 mx-auto py-6">
                          <ul className="flex flex-col gap-y-2">
                            <li className="text-primary-color font-semibold">
                              SALE
                            </li>
                            <li>NEW ARRIVALS</li>
                            <li>READY TO SHIP</li>
                            <li>LIMITED STOCK</li>
                            <li>DISCOUNT</li>
                          </ul>
                          <ul className="flex flex-col gap-y-2">
                            <li className="text-primary-color font-semibold">
                              SHOP BY CATEGORY
                            </li>
                            {categories.map((elem, index) => {
                              if (index < 5) {
                                return (
                                  <li key={index}>
                                    <Link
                                      href={`/products/categories/${elem.category}`}
                                    >
                                      {elem.category}
                                    </Link>
                                  </li>
                                );
                              }
                            })}
                          </ul>
                          <Image
                            src={categories[3].url}
                            alt="logo"
                            width={180}
                            height={64}
                            className="rounded-md border-2 border-[#d4af37]"
                          />
                          <Image
                            src={categories[5].url}
                            alt="logo"
                            width={180}
                            height={64}
                            className="rounded-md border-2 border-[#d4af37]"
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              <div>
                <li className="font-medium cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                  <Link href="/location">OUR LOCATIONS</Link>
                </li>
              </div>
            </ul>
          )}
        </div>
        <form className="">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="w-28 lg:w-32 xl:w-full p-2 pl-10 text-sm text-gray-900 rounded-full bg-gray-50 outline-none h-8"
              placeholder="Search on Nazaara"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DesktopNavbar;
