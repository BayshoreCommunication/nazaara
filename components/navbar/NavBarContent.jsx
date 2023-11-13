"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import EndHandler from "./EndHandler";

const NavBarUpdate = () => {
  // const [mobileLinkToggle, setMobileLinkToggle] = useState("");
  const [mobilePartyLink, setMobilePartyLink] = useState(false);
  const [mobileRegularLink, setMobileRegularLink] = useState(false);
  const [mobileBridalLink, setMobileBridalLink] = useState(false);

  //handle windows scroll
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window != undefined && window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`relative transition-all duration-500 ease-in-out ${
        scrollY > 100
          ? "lg:py-1  backdrop-blur-3xl backdrop-opacity-50 bg-primary-color/80"
          : "lg:py-3 bg-primary-color"
      }`}
    >
      <div className="main-container">
        <div className="lg:hidden flex justify-between items-center ">
          {/* for mobile only */}
          {/* <div className="lg:hidden w-1/4">
          <button
            onClick={() => setToogle(!toogle)}
            className="text-3xl font-bold flex lg:hidden"
          >
            {toogle === false && <FaBars size={20} />}
            {toogle && <FaTimes size={20} />}
          </button>
        </div> */}
        </div>

        <div className="flex justify-between items-center ">
          {/* logo image  */}
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
          {/* links  */}
          <div className="hidden lg:block">
            <ul className="flex gap-2 2xl:gap-4">
              <div>
                <li className="font-medium relative bg-base-100 text-primary-color cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                  <Link href="/products">SHOP</Link>
                </li>
              </div>

              <div className="group">
                <li className="font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                  REGULAR WEAR
                  <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                </li>
                <div className="hidden text-text-color group-hover:block bg-base-100 absolute w-full left-0 top-20 z-20 shadow-xl text-sm">
                  <div className="flex justify-between w-2/3 mx-auto py-6">
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">SALE</li>
                      <div>
                        <Link
                          href={`/recommended-products`}
                          // href={`/recommended-products?category=${elem.navCategoryTitle}&sale=${sale.saleTitle}`}
                          className="hover:text-primary-color hover:underline underline-offset-2"
                        >
                          NEW ARRIVALS
                        </Link>
                        <Link
                          href={`/recommended-products`}
                          // href={`/recommended-products?category=${elem.navCategoryTitle}&sale=${sale.saleTitle}`}
                          className="hover:text-primary-color hover:underline underline-offset-2"
                        >
                          READY TO SHIP
                        </Link>
                      </div>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">
                        SHOP BY CATEGORY
                      </li>
                      <ul className="flex flex-col gap-y-2">
                        <Link
                          className="hover:text-primary-color hover:underline underline-offset-2"
                          href={`/products/categories`}
                          // href={`/products/categories/${category.category}`}
                        >
                          DESIGNER WEAR
                        </Link>
                        <Link
                          className="hover:text-primary-color hover:underline underline-offset-2"
                          href={`/products/categories`}
                          // href={`/products/categories/${category.category}`}
                        >
                          READY TO SHAREE
                        </Link>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group">
                <li className="font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                  PARTY WEAR
                  <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                </li>
                <div className="hidden text-text-color group-hover:block bg-base-100 absolute w-full left-0 top-20 z-20 shadow-xl text-sm">
                  <div className="flex justify-between w-2/3 mx-auto py-6">
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">SALE</li>
                      <div>
                        <Link
                          href={`/recommended-products`}
                          // href={`/recommended-products?category=${elem.navCategoryTitle}&sale=${sale.saleTitle}`}
                          className="hover:text-primary-color hover:underline underline-offset-2"
                        >
                          NEW ARRIVALS
                        </Link>
                        <Link
                          href={`/recommended-products`}
                          // href={`/recommended-products?category=${elem.navCategoryTitle}&sale=${sale.saleTitle}`}
                          className="hover:text-primary-color hover:underline underline-offset-2"
                        >
                          READY TO SHIP
                        </Link>
                      </div>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">
                        SHOP BY CATEGORY
                      </li>
                      <ul className="flex flex-col gap-y-2">
                        <Link
                          className="hover:text-primary-color hover:underline underline-offset-2"
                          href={`/products/categories`}
                          // href={`/products/categories/${category.category}`}
                        >
                          DESIGNER WEAR
                        </Link>
                        <Link
                          className="hover:text-primary-color hover:underline underline-offset-2"
                          href={`/products/categories`}
                          // href={`/products/categories/${category.category}`}
                        >
                          READY TO SHAREE
                        </Link>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group">
                <li className="font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                  BRIDAL WEAR
                  <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                </li>
                <div className="hidden text-text-color group-hover:block bg-base-100 absolute w-full left-0 top-20 z-20 shadow-xl text-sm">
                  <div className="flex justify-between w-2/3 mx-auto py-6">
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">SALE</li>
                      <div>
                        <Link
                          href={`/recommended-products`}
                          // href={`/recommended-products?category=${elem.navCategoryTitle}&sale=${sale.saleTitle}`}
                          className="hover:text-primary-color hover:underline underline-offset-2"
                        >
                          NEW ARRIVALS
                        </Link>
                        <Link
                          href={`/recommended-products`}
                          // href={`/recommended-products?category=${elem.navCategoryTitle}&sale=${sale.saleTitle}`}
                          className="hover:text-primary-color hover:underline underline-offset-2"
                        >
                          READY TO SHIP
                        </Link>
                      </div>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">
                        SHOP BY CATEGORY
                      </li>
                      <ul className="flex flex-col gap-y-2">
                        <Link
                          className="hover:text-primary-color hover:underline underline-offset-2"
                          href={`/products/categories`}
                          // href={`/products/categories/${category.category}`}
                        >
                          DESIGNER WEAR
                        </Link>
                        <Link
                          className="hover:text-primary-color hover:underline underline-offset-2"
                          href={`/products/categories`}
                          // href={`/products/categories/${category.category}`}
                        >
                          READY TO SHAREE
                        </Link>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <li className="font-medium cursor-pointer text-sm p-1 xl:px-2 xl:py-1 rounded-lg hover:underline underline-offset-4">
                  <Link href="/contact-us">CONTACT US</Link>
                </li>
              </div>
              <div>
                <li className="font-medium cursor-pointer text-sm p-1 xl:px-2 xl:py-1 rounded-lg hover:underline underline-offset-4">
                  <Link href="/location">OUR LOCATIONS</Link>
                </li>
              </div>
            </ul>
          </div>

          {/* end handler here  */}
          <EndHandler />
        </div>

        {/* mobile navbar start  */}
        {/* {toogle && (
        <div className="block lg:hidden w-full origin-top absolute top-15 shadow-xl pb-4 rounded-b-2xl bg-primary-color ring-1 ring-black ring-opacity-5 focus:outline-none z-20 left-0">
          <div className="main-container ">
            <form onSubmit={searchFormHandler} className="">
              <div className="relative w-full">
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
                <div className="relative w-full">
                  <input
                    type="search"
                    id="default-search"
                    className="w-full lg:w-32 xl:w-full p-2 pl-4 text-sm text-gray-900 rounded-md bg-gray-50 outline-none h-8"
                    placeholder="Search on Nazaara"
                    required
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setSearchIsShown(true);
                    }}
                    value={searchTerm}
                  />
                  {searchTerm && searchIsShown && (
                    <div className="absolute h-fit w-[20rem] z-10 bg-white right-0 top-9 shadow-xl rounded-md">
                      <ul className="px-4 py-8 flex flex-col gap-[0.7rem]">
                        {filteredData &&
                          filteredData.map((result) => (
                            <li
                              className="text-gray-700 text-sm cursor-pointer hover:text-primary-color hover:font-semibold transition-all duration-300"
                              key={result.item._id}
                              onClick={() => {
                                setSearchTerm(result.item.productName);
                                dispatch(addProduct(filteredData));
                                setSearchIsShown(false);
                                router.push("/products");
                              }}
                            >
                              {result.item.productName} by{" "}
                              {result.item.category}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </form>
            <div className="flex flex-col gap-y-2 mt-3">
              <li className="border-b block py-2 text-white text-sm cursor-pointer">
                <Link href="/" onClick={() => setToogle(false)}>
                  HOME
                </Link>
              </li>
              <div className="border-b">
                <div
                  onClick={() => setMobilePartyLink(!mobilePartyLink)}
                  className="flex items-center justify-between"
                >
                  <li className="block py-2 text-white text-sm cursor-pointer">
                    <p>PARTY WEAR</p>
                  </li>
                  {mobilePartyLink ? (
                    <FaAngleUp size={18} color="white" />
                  ) : (
                    <FaAngleDown size={18} color="white" />
                  )}
                </div>
                {mobilePartyLink && (
                  <>
                    {part1 && (
                      <div className="flex flex-col gap-y-3 text-sm mb-4 mt-2">
                        {part1.map((data) => (
                          <Link
                            key={data.categories}
                            href={`/products/categories/${data.category}`}
                            onClick={() => setToogle(false)}
                          >
                            {data.category}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="border-b">
                <div
                  onClick={() => setMobileRegularLink(!mobileRegularLink)}
                  className="flex items-center justify-between"
                >
                  <li className="block py-2 text-white text-sm cursor-pointer">
                    <p>REGULAR WEAR</p>
                  </li>
                  {mobileRegularLink ? (
                    <FaAngleUp size={18} color="white" />
                  ) : (
                    <FaAngleDown size={18} color="white" />
                  )}
                </div>
                {mobileRegularLink && (
                  <>
                    {part2 && (
                      <div className="flex flex-col gap-y-3 text-sm mb-4 mt-2">
                        {part2.map((data) => (
                          <Link
                            key={data.categories}
                            href={`/products/categories/${data.category}`}
                            onClick={() => setToogle(false)}
                          >
                            {data.category}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="border-b">
                <div
                  onClick={() => setMobileBridalLink(!mobileBridalLink)}
                  className="flex items-center justify-between"
                >
                  <li className="block py-2 text-white text-sm cursor-pointer">
                    <p>BRIDAL WEAR</p>
                  </li>
                  {mobileBridalLink ? (
                    <FaAngleUp size={18} color="white" />
                  ) : (
                    <FaAngleDown size={18} color="white" />
                  )}
                </div>
                {mobileBridalLink && (
                  <>
                    {part3 && (
                      <div className="flex flex-col gap-y-3 text-sm mb-4 mt-2">
                        {part3.map((data) => (
                          <Link
                            key={data.categories}
                            href={`/products/categories/${data.category}`}
                            onClick={() => setToogle(false)}
                          >
                            {data.category}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
              <li className="border-b block py-2 text-white text-sm cursor-pointer">
                <Link href="/contact-us" onClick={() => setToogle(false)}>
                  CONTACT US
                </Link>
              </li>
              <li className="border-b block py-2 text-white text-sm cursor-pointer">
                <Link href="/location" onClick={() => setToogle(false)}>
                  OUR LOCATIONS
                </Link>
              </li>
            </div>
          </div>
        </div>
      )} */}
      </div>
    </div>
  );
};

export default NavBarUpdate;
