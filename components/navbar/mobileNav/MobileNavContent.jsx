"use client";
import React, { useState } from "react";
import EndHandler from "../EndHandler";
import useScrollY from "@/customhooks/useScrollY";
import useGlobalCart from "@/customhooks/useGlobalCart";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import SearchComponent from "../PartsOfHandler/Search";

const MobileNavContent = ({ sales }) => {
  const [mobilePartyLink, setMobilePartyLink] = useState(false);
  const [mobileRegularLink, setMobileRegularLink] = useState(false);
  const [mobileBridalLink, setMobileBridalLink] = useState(false);

  const scrollY = useScrollY();

  const {
    isCartOpen: isMobileNavOpen,
    setIsCartOpen: setIsMobileNavOpen,
    cartRef: mobileNavRef,
  } = useGlobalCart();

  const {
    isCartOpen: isSearchOpen,
    setIsCartOpen: setIsSearchOpen,
    cartRef: searchRef,
  } = useGlobalCart();

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen); // Toggle the cart open/close state
  };
  const saleData = (slug) => {
    const data = sales.data.filter((elem) => elem.category.slug === slug);
    return data;
  };
  return (
    <div
      className={`text-base-100 transition-all duration-300 ease-in-out ${
        scrollY > 200
          ? " lg:py-1 backdrop-blur-3xl backdrop-opacity-50 bg-primary-color/80"
          : "lg:py-3 bg-primary-color"
      }`}
    >
      <div className="main-container">
        <div className="flex justify-between items-center ">
          <div className="lg:hidden flex justify-between items-center ">
            <div className="lg:hidden w-1/4">
              <button
                onClick={handleMobileNavToggle}
                className="text-3xl font-bold flex lg:hidden"
              >
                {!isMobileNavOpen && <FaBars size={20} />}
                {isMobileNavOpen && <FaTimes size={20} />}
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Link className="w-max" href="/">
              <Image
                src="/images/nazara-navbar-logo.png"
                alt="logo"
                width={180}
                height={90}
              />
            </Link>
          </div>
          {/* end handler here  */}
          <EndHandler
            searchRef={searchRef}
            setIsSearchOpen={setIsSearchOpen}
            isSearchOpen={isSearchOpen}
          />
        </div>
        {isMobileNavOpen && (
          <div
            ref={mobileNavRef}
            className={`lg:hidden w-full origin-top absolute top-15 shadow-xl pb-4 rounded-b-2xl z-20 left-0 bg-primary-color ${
              scrollY > 200
                ? " lg:py-1 backdrop-blur-3xl backdrop-opacity-50 bg-primary-color/80"
                : "lg:py-3 bg-primary-color"
            }`}
          >
            <div className="main-container ">
              <SearchComponent />
              <div className="flex flex-col gap-y-2 mt-3">
                <Link
                  className="w-full border-b py-2 text-white text-sm"
                  href="/"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  HOME
                </Link>

                <Link
                  className="w-full border-b py-2 text-white text-sm"
                  href="/shop"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  SHOP
                </Link>

                <div className="border-b">
                  <div
                    onClick={() => setMobileRegularLink(!mobileRegularLink)}
                    className="flex items-center justify-between w-full"
                  >
                    <span className="block py-2 text-white text-sm cursor-pointer">
                      REGULAR WEAR
                    </span>
                    <FaAngleDown
                      className={`transition-all duration-300 ease-in-out ${
                        mobileRegularLink ? "rotate-180" : ""
                      } `}
                      size={18}
                      color="white"
                    />
                  </div>
                  {mobileRegularLink && (
                    <>
                      {saleData("regular-wear").map((data, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-y-2 text-sm mb-4 mt-2"
                        >
                          {data.subCategories.map((subCategory, i) => (
                            <Link
                              key={i}
                              href={`/products?category=${data.category.slug}&subCategory=${subCategory.slug}`}
                              onClick={() => setIsMobileNavOpen(false)}
                              className="text-[13px]"
                            >
                              {subCategory.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <div className="border-b">
                  <div
                    onClick={() => setMobilePartyLink(!mobilePartyLink)}
                    className="flex items-center justify-between"
                  >
                    <span className="py-2 text-white text-sm">PARTY WEAR</span>
                    <FaAngleDown
                      className={`transition-all duration-300 ease-in-out ${
                        mobilePartyLink ? "rotate-180" : ""
                      } `}
                      size={18}
                      color="white"
                    />
                  </div>
                  {mobilePartyLink && (
                    <>
                      {saleData("party-wear").map((data, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-y-2 text-sm mb-4 mt-2"
                        >
                          {data.subCategories.map((subCategory, i) => (
                            <Link
                              key={i}
                              href={`/products?category=${data.category.slug}&subCategory=${subCategory.slug}`}
                              onClick={() => setIsMobileNavOpen(false)}
                              className="text-[13px]"
                            >
                              {subCategory.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <div className="border-b">
                  <div
                    onClick={() => setMobileBridalLink(!mobileBridalLink)}
                    className="flex items-center justify-between"
                  >
                    <span className="py-2 text-white text-sm">BRIDAL WEAR</span>
                    <span>
                      <FaAngleDown
                        className={`transition-all duration-300 ease-in-out ${
                          mobileBridalLink ? "rotate-180" : ""
                        } `}
                        size={18}
                        color="white"
                      />
                    </span>
                  </div>
                  {mobileBridalLink && (
                    <>
                      {saleData("bridal-wear").map((data, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-y-2 text-sm mb-4 mt-2"
                        >
                          {data.subCategories.map((subCategory, i) => (
                            <Link
                              key={i}
                              href={`/products?category=${data.category.slug}&subCategory=${subCategory.slug}`}
                              onClick={() => setIsMobileNavOpen(false)}
                              className="text-[13px]"
                            >
                              {subCategory.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <Link
                  href="/contact-us"
                  className="border-b py-2 text-white text-sm cursor-pointer"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  CONTACT US
                </Link>
                <Link
                  className="border-b py-2 text-white text-sm cursor-pointer"
                  href="/location"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  OUR LOCATIONS
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavContent;
