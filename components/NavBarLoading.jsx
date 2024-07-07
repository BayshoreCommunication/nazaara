import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Loader } from "./Loader";
import { BeatLoader } from "react-spinners";

const NavBarLoading = () => {
  return (
    <>
      <div className={`text-base-100 lg:py-3 bg-[#820000]`}>
        <div className="main-container">
          <div className="flex justify-between items-center ">
            {/* for mobile only */}
            <div className="lg:hidden flex justify-between items-center ">
              <div className="lg:hidden w-1/4">
                <button className="text-3xl font-bold flex lg:hidden">
                  <FaBars size={20} />
                </button>
              </div>
            </div>
            {/* logo image  */}
            <div className="flex justify-center">
              <Image
                src="/images/nazara-navbar-logo.png"
                alt="logo"
                width={180}
                height={90}
              />
            </div>
            {/* links  */}
            <div className="hidden lg:block">
              <div className="flex gap-2 2xl:gap-4">
                <p
                  className={`font-medium text-sm p-1 xl:px-2 xl:py-1 rounded-lg hover:underline underline-offset-4`}
                >
                  SHOP
                </p>

                <div>
                  <li
                    className={`flex items-center gap-1 font-medium relative text-sm px-2 py-1 rounded-lg group-hover:bg-base-100 group-hover:text-primary-color`}
                  >
                    REGULAR WEAR
                    <div className="h-8 w-full absolute top-full left-0"></div>
                  </li>
                </div>
                <div>
                  <li
                    className={`flex items-center gap-1 font-medium relative text-sm px-2 py-1 rounded-lg group-hover:bg-base-100 group-hover:text-primary-color`}
                  >
                    PARTY WEAR
                    <div className="h-8 w-full absolute top-full left-0"></div>
                  </li>
                </div>
                <div>
                  <li
                    className={`flex items-center gap-1 font-medium relative text-sm px-2 py-1 rounded-lg group-hover:bg-base-100 group-hover:text-primary-color`}
                  >
                    BRIDAL WEAR
                    <div className="h-8 w-full absolute top-full left-0"></div>
                  </li>
                </div>

                <p
                  className={`font-medium text-sm p-1 xl:px-2 xl:py-1 rounded-lg hover:underline underline-offset-4`}
                >
                  CONTACT US
                </p>
                <p
                  className={`font-medium text-sm p-1 xl:px-2 xl:py-1 rounded-lg hover:underline underline-offset-4 lg:hidden xl:block`}
                >
                  OUR LOCATIONS
                </p>
              </div>
            </div>

            {/* end handler here  */}
            <div className="flex items-center gap-x-4 w-max">
              <div>
                <AiOutlineSearch size={26} className="mt-1 hidden lg:block" />
              </div>

              {/* User Authentication  */}
              <div className="relative flex items-center">
                <Image
                  src="/images/logo/user.svg"
                  alt="logo"
                  width={20}
                  height={20}
                  className="cursor-pointer h-5 w-5"
                />
              </div>
              {/* shopping cart  */}

              <AiOutlineShoppingCart size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full h-[50vh] flex justify-center items-center`}>
        <BeatLoader color="#820000" />
      </div>
    </>
  );
};

export default NavBarLoading;