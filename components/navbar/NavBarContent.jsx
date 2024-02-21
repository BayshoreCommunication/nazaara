"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import EndHandler from "./EndHandler";
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from "react-icons/fa";
import useGlobalCart from "@/customhooks/useGlobalCart";
import SearchComponent from "./PartsOfHandler/Search";
// import dynamic from "next/dynamic";
// const useScrollY = dynamic(() => import("@/customhooks/useScrollY"), {
//   ssr: false,
// });
import useScrollY from "@/customhooks/useScrollY";

const NavBarContent = ({ data, sales, advertisements }) => {
  const [mobilePartyLink, setMobilePartyLink] = useState(false);
  const [mobileRegularLink, setMobileRegularLink] = useState(false);
  const [mobileBridalLink, setMobileBridalLink] = useState(false);

  const scrollY = useScrollY();

  // console.log("scroll y ", scrollY);

  const currentRoute = usePathname();
  const searchParams = useSearchParams();

  // console.log("current route", searchParams.get("category"));

  const {
    isCartOpen: isSearchOpen,
    setIsCartOpen: setIsSearchOpen,
    cartRef: searchRef,
  } = useGlobalCart();

  const {
    isCartOpen: isMobileNavOpen,
    setIsCartOpen: setIsMobileNavOpen,
    cartRef: mobileNavRef,
  } = useGlobalCart();

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen); // Toggle the cart open/close state
  };

  // console.log("navbar content data", data);
  // const dispatch = useDispatch();
  // if (data) {
  //   data.data.map((elem) => dispatch(addItemToCart(elem)));
  // }
  // console.log("data inside navbar", data);

  const saleData = (slug) => {
    const data = sales.data.filter((elem) => elem.category.slug === slug);
    return data;
  };

  //advertisement data funcition
  const advertisementData = (title) => {
    const data = advertisements.data.filter(
      (elem) => elem.categoryName === title
    );
    return (
      data[0]?.categoryName === title && (
        <div className="flex-[1]">
          <Link href={`${data[0]?.advertisements[0].link}`}>
            <Image
              src={`${data[0]?.advertisements[0].imageUrl}`}
              quality={100}
              width={1000}
              height={400}
              alt="Nazaara Promotion"
              className="rounded-xl"
            />
          </Link>
        </div>
      )
    );
  };

  return (
    <div
      // ref={ref}
      className={`text-base-100 transition-all duration-300 ease-in-out ${
        scrollY > 200
          ? " lg:py-1 backdrop-blur-3xl backdrop-opacity-50 bg-primary-color/80"
          : "lg:py-3 bg-primary-color"
      }`}
    >
      <div className="main-container">
        <div className="flex justify-between items-center ">
          {/* for mobile only */}
          <div className="lg:hidden flex justify-between items-center ">
            <div className="lg:hidden w-1/4">
              <button
                // onClick={() => setMobileNavCollapse(!mobileNavCollapse)}
                onClick={handleMobileNavToggle}
                className="text-3xl font-bold flex lg:hidden"
              >
                {!isMobileNavOpen && <FaBars size={20} />}
                {isMobileNavOpen && <FaTimes size={20} />}
              </button>
            </div>
          </div>
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
              <Link
                href="/shop"
                className={`${
                  currentRoute === "/shop" &&
                  "bg-base-100 text-primary-color hover:no-underline"
                } font-medium text-sm p-1 xl:px-2 xl:py-1 rounded-lg hover:underline underline-offset-4`}
              >
                SHOP
              </Link>

              <div className="group">
                <li
                  className={`flex items-center gap-1 font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4 ${
                    searchParams.get("category") === "regular-wear" &&
                    "bg-base-100 text-primary-color hover:no-underline"
                  }`}
                >
                  REGULAR WEAR{" "}
                  <FaAngleDown
                    className={`transform group-hover:rotate-180 transition-all duration-500 ease-in-out`}
                  />
                  <div className="h-8 w-full absolute top-full left-0"></div>
                </li>
                <div
                  className={`text-text-color bg-base-100 absolute w-full left-0 z-20 shadow-xl text-sm bottom-full group-hover:bottom-auto group-hover:top-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out`}
                >
                  <div className="flex justify-between px-2 md:px-12 lg:px-8 xl:px-0 xl:w-5/6 2xl:w-[75%] mx-auto py-6 lg:gap-x-14 xl:gap-x-20">
                    <div className="flex flex-[1.5] lg:gap-x-14 xl:gap-x-20 2xl:gap-x-32">
                      {/* SALE */}
                      {sales?.data[0]?.sales?.length > 0 && (
                        <ul className="flex flex-col gap-y-2">
                          <p className="text-primary-color font-semibold">
                            SALE
                          </p>
                          <div>
                            {saleData("regular-wear").map((data, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-2"
                              >
                                {data.sales.map((sale) => (
                                  <Link
                                    key={sale._id}
                                    href={`/products?category=${data.category.slug}&sale=${sale.slug}`}
                                    className="hover:text-primary-color hover:underline underline-offset-2 uppercase"
                                  >
                                    {sale.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </ul>
                      )}

                      {/* SUBCATEGORY  */}
                      {sales?.data[0]?.subCategories?.length > 0 && (
                        <ul className="flex flex-col gap-y-2">
                          <li className="text-primary-color font-semibold">
                            SHOP BY CATEGORY
                          </li>
                          <ul>
                            {saleData("regular-wear").map((data, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-2"
                              >
                                {data.subCategories.map((subCategory) => (
                                  <Link
                                    key={subCategory._id}
                                    href={`/products?category=${data.category.slug}&subCategory=${subCategory.slug}`}
                                    className="hover:text-primary-color hover:underline underline-offset-2 uppercase"
                                  >
                                    {subCategory.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </ul>
                        </ul>
                      )}

                      {/* FESTIVAL  */}
                      {sales?.data[0]?.fesivals?.length > 0 && (
                        <ul className="flex flex-col gap-y-2">
                          <li className="text-primary-color font-semibold">
                            SHOP BY FESTIVAL
                          </li>
                          <ul>
                            {saleData("regular-wear").map((data, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-2"
                              >
                                {data.fesivals.map((festival) => (
                                  <Link
                                    key={festival._id}
                                    href={`/products?category=${data.category.slug}&festival=${festival.slug}`}
                                    className="hover:text-primary-color hover:underline underline-offset-2 uppercase"
                                  >
                                    {festival.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </ul>
                        </ul>
                      )}
                    </div>
                    {/* render image via function  */}
                    {advertisementData("Regular Wear")}
                  </div>
                </div>
              </div>
              <div className="group">
                <li
                  className={`flex items-center gap-1 font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4 ${
                    searchParams.get("category") === "party-wear" &&
                    "bg-base-100 text-primary-color hover:no-underline"
                  }`}
                >
                  PARTY WEAR{" "}
                  <FaAngleDown
                    className={`transform group-hover:rotate-180 transition-all duration-500 ease-in-out`}
                  />
                  <div className="h-8 w-full absolute top-full left-0"></div>
                </li>
                <div
                  className={`text-text-color bg-base-100 absolute w-full left-0 z-20 shadow-xl text-sm bottom-full group-hover:bottom-auto group-hover:top-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out`}
                >
                  <div className="flex justify-between px-2 md:px-12 lg:px-8 xl:px-0 xl:w-5/6 2xl:w-[75%] mx-auto py-6 lg:gap-x-14 xl:gap-x-20">
                    <div className="flex flex-[1.5] lg:gap-x-14 xl:gap-x-20 2xl:gap-x-32">
                      {/* SALE  */}
                      {sales?.data[1]?.sales?.length > 0 && (
                        <ul className="flex flex-col gap-y-2">
                          <p className="text-primary-color font-semibold">
                            SALE
                          </p>
                          <div>
                            {saleData("party-wear").map((data, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-2"
                              >
                                {data.sales.map((sale, i) => (
                                  <Link
                                    key={i}
                                    href={`/products?category=${data.category.slug}&sale=${sale.slug}`}
                                    className="hover:text-primary-color hover:underline underline-offset-2 uppercase"
                                  >
                                    {sale.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </ul>
                      )}

                      {/* SUBCATEGORY  */}
                      {sales?.data[1]?.subCategories?.length > 0 && (
                        <ul className="flex flex-col gap-y-2">
                          <li className="text-primary-color font-semibold">
                            SHOP BY CATEGORY
                          </li>
                          <ul>
                            {saleData("party-wear").map((data, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-2"
                              >
                                {data.subCategories.map((subCategory, i) => (
                                  <Link
                                    key={i}
                                    href={`/products?category=${data.category.slug}&subCategory=${subCategory.slug}`}
                                    className="hover:text-primary-color hover:underline underline-offset-2 uppercase"
                                  >
                                    {subCategory.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </ul>
                        </ul>
                      )}

                      {/* FESTIVAL  */}
                      {sales?.data[1]?.fesivals?.length > 0 && (
                        <ul className="flex flex-col gap-y-2">
                          <li className="text-primary-color font-semibold">
                            SHOP BY FESTIVAL
                          </li>
                          <ul>
                            {saleData("party-wear").map((data, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-2"
                              >
                                {data.fesivals.map((festival, i) => (
                                  <Link
                                    key={i}
                                    href={`/products?category=${data.category.slug}&festival=${festival.slug}`}
                                    className="hover:text-primary-color hover:underline underline-offset-2 uppercase"
                                  >
                                    {festival.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </ul>
                        </ul>
                      )}
                    </div>
                    {/* IMAGE  */}
                    {/* render image via function  */}
                    {advertisementData("Party Wear")}
                  </div>
                </div>
              </div>
              <div className="group">
                <li
                  className={`flex items-center gap-1 font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4 ${
                    searchParams.get("category") === "bridal-wear" &&
                    "bg-base-100 text-primary-color hover:no-underline"
                  }`}
                >
                  BRIDAL WEAR{" "}
                  <FaAngleDown
                    className={`transform group-hover:rotate-180 transition-all duration-500 ease-in-out`}
                  />
                  <div className="h-8 w-full absolute top-full left-0"></div>
                </li>
                <div
                  className={`text-text-color bg-base-100 absolute w-full left-0 z-20 shadow-xl text-sm bottom-full group-hover:bottom-auto group-hover:top-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out`}
                >
                  <div className="flex justify-between px-2 md:px-12 lg:px-8 xl:px-0 xl:w-5/6 2xl:w-[75%] mx-auto py-6 lg:gap-x-14 xl:gap-x-20">
                    <div className="flex flex-[1.5] lg:gap-x-14 xl:gap-x-20 2xl:gap-x-32">
                      {/* SALE  */}
                      {sales?.data[2]?.sales?.length > 0 && (
                        <ul className="flex flex-col gap-y-2">
                          <p className="text-primary-color font-semibold">
                            SALE
                          </p>
                          <div>
                            {saleData("bridal-wear").map((data, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-2"
                              >
                                {data.sales.map((sale, i) => (
                                  <Link
                                    key={i}
                                    href={`/products?category=${data.category.slug}&sale=${sale.slug}`}
                                    className="hover:text-primary-color hover:underline underline-offset-2 uppercase"
                                  >
                                    {sale.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </ul>
                      )}

                      {/* SUBCATEGORY  */}
                      {sales?.data[2]?.subCategories?.length > 0 && (
                        <ul className="flex flex-col gap-y-2">
                          <li className="text-primary-color font-semibold">
                            SHOP BY CATEGORY
                          </li>
                          <ul>
                            {saleData("bridal-wear").map((data, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-2"
                              >
                                {data.subCategories.map((subCategory, i) => (
                                  <Link
                                    key={i}
                                    href={`/products?category=${data.category.slug}&subCategory=${subCategory.slug}`}
                                    className="hover:text-primary-color hover:underline underline-offset-2 uppercase"
                                  >
                                    {subCategory.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </ul>
                        </ul>
                      )}

                      {/* FESTIVAL  */}
                      {sales?.data[2]?.fesivals?.length > 0 && (
                        <ul className="flex flex-col gap-y-2">
                          <li className="text-primary-color font-semibold">
                            SHOP BY FESTIVAL
                          </li>
                          <ul>
                            {saleData("bridal-wear").map((data, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-2"
                              >
                                {data.fesivals.map((festival, i) => (
                                  <Link
                                    key={i}
                                    href={`/products?category=${data.category.slug}&festival=${festival.slug}`}
                                    className="hover:text-primary-color hover:underline underline-offset-2 uppercase"
                                  >
                                    {festival.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </ul>
                        </ul>
                      )}
                    </div>
                    {/* IMAGE  */}
                    {/* render image via function  */}
                    {advertisementData("Bridal Wear")}
                  </div>
                </div>
              </div>

              <Link
                href="/contact-us"
                className={`${
                  currentRoute === "/contact-us" &&
                  "bg-base-100 text-primary-color hover:no-underline"
                } font-medium text-sm p-1 xl:px-2 xl:py-1 rounded-lg hover:underline underline-offset-4`}
              >
                CONTACT US
              </Link>
              <Link
                href="/location"
                className={`${
                  currentRoute === "/location" &&
                  "bg-base-100 text-primary-color hover:no-underline"
                } font-medium text-sm p-1 xl:px-2 xl:py-1 rounded-lg hover:underline underline-offset-4 lg:hidden xl:block`}
              >
                OUR LOCATIONS
              </Link>
            </ul>
          </div>

          {/* end handler here  */}
          <EndHandler
            searchRef={searchRef}
            setIsSearchOpen={setIsSearchOpen}
            isSearchOpen={isSearchOpen}
          />
        </div>

        {/* mobile navbar start  */}
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

export default NavBarContent;
