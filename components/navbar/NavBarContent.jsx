"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import EndHandler from "./EndHandler";
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from "react-icons/fa";
import useGlobalCart from "@/customhooks/useGlobalCart";
import SearchComponent from "./PartsOfHandler/Search";

const NavBarUpdate = () => {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);
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

  const currentRoute = usePathname();

  const {
    isCartOpen: isSearchOpen,
    setIsCartOpen: setIsSearchOpen,
    cartRef: searchRef,
  } = useGlobalCart();

  return (
    <div
      className={`relative transition-all duration-500 ease-in-out ${
        scrollY > 100
          ? "lg:py-1  backdrop-blur-3xl backdrop-opacity-50 bg-primary-color/80"
          : "lg:py-3 bg-primary-color"
      }`}
    >
      <div className="main-container">
        <div className="flex justify-between items-center ">
          {/* for mobile only */}
          <div className="lg:hidden flex justify-between items-center ">
            <div className="lg:hidden w-1/4">
              <button
                onClick={() => setMobileNavToggle(!mobileNavToggle)}
                className="text-3xl font-bold flex lg:hidden"
              >
                {!mobileNavToggle && <FaBars size={20} />}
                {mobileNavToggle && <FaTimes size={20} />}
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
                href="/products"
                className={`${
                  currentRoute === "/products" &&
                  "bg-base-100 text-primary-color hover:no-underline"
                } font-medium text-sm p-1 xl:px-2 xl:py-1 rounded-lg hover:underline underline-offset-4`}
              >
                SHOP
              </Link>

              <div className="group">
                <li className="flex items-center gap-1 font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
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
                      {/* SALE  */}
                      <ul className="flex flex-col gap-y-2">
                        <p className="text-primary-color font-semibold">SALE</p>
                        <div className="flex flex-col gap-y-2">
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
                      {/* SUBCATEGORY  */}
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
                      {/* FESTIVAL  */}
                      <ul className="flex flex-col gap-y-2">
                        <li className="text-primary-color font-semibold">
                          SHOP BY FESTIVAL
                        </li>
                        <ul className="flex flex-col gap-y-2">
                          <Link
                            className="hover:text-primary-color hover:underline underline-offset-2"
                            href={`/products/categories`}
                            // href={`/products/categories/${category.category}`}
                          >
                            ENGAGEMENT
                          </Link>
                          <Link
                            className="hover:text-primary-color hover:underline underline-offset-2"
                            href={`/products/categories`}
                            // href={`/products/categories/${category.category}`}
                          >
                            NIKKAH
                          </Link>
                        </ul>
                      </ul>
                    </div>
                    {/* IMAGE  */}
                    <div className="flex-[1]">
                      <Link href={`/products`}>
                        <Image
                          src="/images/modal.png"
                          quality={100}
                          width={1000}
                          height={400}
                          alt="Nazaara Promotion"
                        />
                      </Link>
                    </div>
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
                } font-medium text-sm p-1 xl:px-2 xl:py-1 rounded-lg hover:underline underline-offset-4`}
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
        {mobileNavToggle && (
          <div className="block lg:hidden w-full origin-top absolute top-15 shadow-xl pb-4 rounded-b-2xl bg-primary-color ring-1 ring-black ring-opacity-5 focus:outline-none z-20 left-0">
            <div className="main-container ">
              <SearchComponent />
              <div className="flex flex-col gap-y-2 mt-3">
                <li className="border-b block py-2 text-white text-sm cursor-pointer">
                  <Link href="/" onClick={() => setMobileNavToggle(false)}>
                    HOME
                  </Link>
                </li>

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
                      <div className="flex flex-col gap-y-3 text-sm mb-4 mt-2">
                        <Link
                          // href={`/products/categories/${data.category}`}
                          href={`/products`}
                          onClick={() => setToogle(false)}
                        >
                          DESIGNER WEAR
                        </Link>
                        <Link
                          // href={`/products/categories/${data.category}`}
                          href={`/products`}
                          onClick={() => setToogle(false)}
                        >
                          READY TO SHAREE
                        </Link>
                      </div>
                    </>
                  )}
                </div>

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
                      <div className="flex flex-col gap-y-3 text-sm mb-4 mt-2">
                        <Link
                          href={`/products/categories`}
                          onClick={() => setToogle(false)}
                        >
                          CROP-TOP SKIRT
                        </Link>
                        <Link
                          href={`/products/categories`}
                          onClick={() => setToogle(false)}
                        >
                          PARTY GOWN
                        </Link>
                      </div>
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
                      <div className="flex flex-col gap-y-3 text-sm mb-4 mt-2">
                        <Link
                          href={`/products/categories`}
                          onClick={() => setToogle(false)}
                        >
                          BRIDAL LEHENGA
                        </Link>
                        <Link
                          href={`/products/categories`}
                          onClick={() => setToogle(false)}
                        >
                          BRIDAL SHARARA
                        </Link>
                      </div>
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
        )}
      </div>
    </div>
  );
};

export default NavBarUpdate;
