import Image from "next/image";
import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Loader } from "./Loader";
import { BeatLoader } from "react-spinners";

const NavBarLoading = () => {
  return (
    <>
      <div className="relative">
        <div className="fixed top-0 z-50 shadow-xl w-full">
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
                    <div className="group">
                      <li
                        className={`flex items-center gap-1 font-medium relative text-sm px-2 py-1 rounded-lg group-hover:bg-base-100 group-hover:text-primary-color`}
                      >
                        REGULAR WEAR
                        <FaAngleDown
                          className={`transform group-hover:rotate-180 transition-all duration-500 ease-in-out`}
                        />
                        <div className="h-8 w-full absolute top-full left-0"></div>
                      </li>
                      <div
                        className={`text-text-color bg-base-100 absolute w-full h-44 left-0 z-20 shadow-xl text-sm bottom-full group-hover:bottom-auto group-hover:top-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out`}
                      >
                        <div className="flex justify-between px-2 md:px-12 lg:px-8 xl:px-0 xl:w-5/6 2xl:w-[75%] mx-auto py-6 lg:gap-x-14 xl:gap-x-20 h-full">
                          <div className="flex items-center justify-center w-full h-full">
                            <BeatLoader color="#820000" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <li
                        className={`flex items-center gap-1 font-medium relative text-sm px-2 py-1 rounded-lg group-hover:bg-base-100 group-hover:text-primary-color`}
                      >
                        PARTY WEAR
                        <FaAngleDown
                          className={`transform group-hover:rotate-180 transition-all duration-500 ease-in-out`}
                        />
                        <div className="h-8 w-full absolute top-full left-0"></div>
                      </li>
                      <div
                        className={`text-text-color bg-base-100 absolute w-full h-44 left-0 z-20 shadow-xl text-sm bottom-full group-hover:bottom-auto group-hover:top-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out`}
                      >
                        <div className="flex justify-between px-2 md:px-12 lg:px-8 xl:px-0 xl:w-5/6 2xl:w-[75%] mx-auto py-6 lg:gap-x-14 xl:gap-x-20 h-full">
                          <div className="flex items-center justify-center w-full h-full">
                            <BeatLoader color="#820000" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <li
                        className={`flex items-center gap-1 font-medium relative text-sm px-2 py-1 rounded-lg group-hover:bg-base-100 group-hover:text-primary-color`}
                      >
                        BRIDAL WEAR
                        <FaAngleDown
                          className={`transform group-hover:rotate-180 transition-all duration-500 ease-in-out`}
                        />
                        <div className="h-8 w-full absolute top-full left-0"></div>
                      </li>
                      <div
                        className={`text-text-color bg-base-100 absolute w-full h-44 left-0 z-20 shadow-xl text-sm bottom-full group-hover:bottom-auto group-hover:top-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out`}
                      >
                        <div className="flex justify-between px-2 md:px-12 lg:px-8 xl:px-0 xl:w-5/6 2xl:w-[75%] mx-auto py-6 lg:gap-x-14 xl:gap-x-20 h-full">
                          <div className="flex items-center justify-center w-full h-full">
                            <BeatLoader color="#820000" />
                          </div>
                        </div>
                      </div>
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
                    <AiOutlineSearch
                      size={26}
                      className="mt-1 hidden lg:block"
                    />
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
        </div>
      </div>
    </>
  );
};

export default NavBarLoading;
