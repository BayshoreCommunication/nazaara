import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import UserCart from "../user-dashboard/UserCart";
import useGlobalCart from "@/customhooks/useGlobalCart";
import { getCookie } from "cookies-next";
import SearchComponent from "./PartsOfHandler/Search";
import { useGetCartByUserIdQuery } from "@/services/cartApi";
import { BeatLoader } from "react-spinners";

const EndHandler = ({ isSearchOpen, searchRef, setIsSearchOpen }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [cookieData, setCookieData] = useState(null);
  const [objData, setObjData] = useState("");
  const {
    isCartOpen: isUserDashboardOpen,
    setIsCartOpen: setisUserDashboardOpen,
    cartRef: userDescriptionRef,
  } = useGlobalCart();

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle the cart open/close state
  };

  const jsonStr = getCookie("userAuthCredential");
  useEffect(() => {
    if (jsonStr != null) {
      const obj = JSON.parse(jsonStr);
      setImgUrl(obj.imageUrl);
      setCookieData(obj);
    }
  }, [setCookieData, jsonStr]);

  const handleUserToggle = () => {
    setisUserDashboardOpen(!isUserDashboardOpen); // Toggle the cart open/close state
  };

  useEffect(() => {
    if (jsonStr) {
      const obj = JSON.parse(jsonStr);
      setObjData(obj._id);
    }
  }, [jsonStr]);
  const { data: cartdata, isLoading } = useGetCartByUserIdQuery(`${objData}`);
  if (isLoading) {
    <div className="w-full h-[40vh] flex justify-center items-center">
      <BeatLoader color="#820000" />
    </div>;
  }
  const cartQuantity = cartdata?.data?.length;

  return (
    <div className="flex items-center gap-x-4 w-max">
      <div ref={searchRef}>
        <AiOutlineSearch
          size={26}
          onClick={handleSearchToggle}
          className="cursor-pointer mt-1 hidden lg:block"
        />
        {/* search form */}
        {isSearchOpen && <SearchComponent />}
      </div>

      {/* User Authentication  */}
      <div className="relative flex items-center" ref={userDescriptionRef}>
        {cookieData ? (
          <>
            <div className="cursor-pointer" onClick={handleUserToggle}>
              {imgUrl ? (
                <Image
                  src={`${imgUrl}`}
                  alt="logo"
                  width={20}
                  height={20}
                  className="cursor-pointer rounded-full h-5 w-5 lg:h-6 lg:w-6 border-2 border-white"
                />
              ) : (
                <div className="border-2 h-5 w-5 lg:h-6 lg:w-6 rounded-full flex justify-center items-center hover:bg-white hover:text-primary-color">
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
              width={20}
              height={20}
              className="cursor-pointer h-auto"
            />
          </Link>
        )}
      </div>
      {/* shopping cart  */}
      <div className="relative">
        {cookieData ? (
          <Link href={"/shop/cart"}>
            <AiOutlineShoppingCart size={24} />
          </Link>
        ) : (
          <Link href={"/user-authentication"}>
            <AiOutlineShoppingCart className="cursor-pointer" size={24} />
          </Link>
        )}
        {cartQuantity > 0 && (
          <div className="bg-white flex justify-center items-center rounded-full absolute bottom-[14px] left-[1rem] w-[15px] h-[15px]">
            <p className="text-primary-color text-[10px] font-semibold">
              {cartQuantity}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EndHandler;
