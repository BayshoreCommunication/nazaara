"use client";
import Image from "next/image";
import Link from "next/link";
import Cart from "../shopping-cart/Cart";
import { useCallback, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useGlobalCart from "@/customhooks/useGlobalCart";
import { BsBagXFill, BsFillBagCheckFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import UserCart from "../user-dashboard/UserCart";
import {
  useGetProductsCategoriesQuery,
  useGetProductsQuery,
} from "@/services/productApi";
import Fuse from "fuse.js";
import { addProduct } from "@/store/serachProductSlice";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const DesktopNavbar = () => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const apiUrl = `${process.env.API_URL}/api/v1/product/categories`;
  const [categories, setCategories] = useState(null);
  const [auth, setAuth] = useState("signIn");
  const [imgUrl, setImgUrl] = useState(null);
  const [cookieData, setCookieData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const [toogle, setToogle] = useState(false);

  // fetching all the products for showing on search bar

  const { data: allProducts } = useGetProductsQuery();

  let filteredData;
  if (allProducts) {
    const fuse = new Fuse(allProducts?.product, {
      keys: ["productName", "category", "subCategory"],
    });

    // Filter the data based on the search term
    filteredData = fuse.search(searchTerm);
  }

  const [searchIsShown, setSearchIsShown] = useState(false);
  const searchFormHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(filteredData));
    setSearchIsShown(false);
    router.push("/products");
  };

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

  const [category, setCategory] = useState();
  const { data: productsCategories, isLoading } =
    useGetProductsCategoriesQuery();

  // Calculate the size of each part
  const partSize = Math.ceil(productsCategories?.length / 3);

  // Split the array into parts
  const regularWear = productsCategories?.newData.slice(0, partSize);
  const partyWear = productsCategories?.newData.slice(partSize, partSize * 2);
  const BridalWear = productsCategories?.newData.slice(partSize * 2);

  // useEffect(() => {
  //   if (!isLoading) {
  //     const newCategory = productsCategories.newData.map(
  //       (data) => data.category
  //     );
  //     setCategory(newCategory);
  //   }
  // }, [isLoading, productsCategories]);

  console.log("regularWear", regularWear);

  return (
    <div className="container lg:py-4">
      <div className="flex justify-between items-center relative">
        <div className="hidden lg:block w-1/4">
          <Link href="/" className="px-2 py-1 text-base">
            EXCLUSIVE WOMAN WEAR
          </Link>
        </div>
        <div className="lg:hidden w-1/4">
          <button
            onClick={() => setToogle(!toogle)}
            className="text-3xl font-bold flex lg:hidden"
          >
            {toogle === false && <FaBars size={20} />}
            {toogle && <FaTimes size={20} />}
          </button>
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
          <div className="flex gap-x-1 lg:gap-x-6 justify-end">
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
                        className="cursor-pointer rounded-full h-6 w-6 lg:h-7 lg:w-7 shadow-md border-2"
                      />
                    ) : (
                      <div className="border-2 h-6 w-6 lg:h-7 lg:w-7 rounded-full flex justify-center items-center hover:bg-white hover:text-primary-color">
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
                <div className="bg-white flex justify-center items-center rounded-full absolute bottom-5 left-[1.2rem] w-[16px] h-[16px]">
                  <p className="text-primary-color text-xs font-semibold">
                    {cartQuantity}
                  </p>
                </div>
              )}
              {/* shopping cart content*/}
              {isAddToCartOpen && (
                <Cart
                  cookieData={cookieData}
                  setIsAddToCartOpen={setIsAddToCartOpen}
                />
              )}
              {/* Render cart if isCartOpen is true */}
            </div>
          </div>
        </div>
        {/*  */}
      </div>

      <div className="flex justify-between items-center lg:mt-2">
        <div className="hidden lg:block">
          <ul className="flex gap-2 2xl:gap-4">
            <div>
              <li className="font-medium relative bg-base-100 text-primary-color cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                <Link href="/products">ALL PRODUCTS</Link>
              </li>
            </div>
            <div className="">
              <div className="flex gap-x-2">
                <div className="group">
                  <li className="font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                    REGULAR WEAR
                    <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                  </li>
                  <div className="hidden text-text-color group-hover:block bg-base-100 absolute left-0 top-[148px] z-20 shadow-xl w-full text-sm">
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

                        {regularWear &&
                          regularWear.map((data) => (
                            <Link
                              className="hover:text-primary-color hover:underline underline-offset-2"
                              key={data.category}
                              href={`/products/categories/${data.category}`}
                            >
                              {data.category}
                            </Link>
                          ))}
                      </ul>
                      <Image
                        src={"/images/dress/dress-1.png"}
                        alt="logo"
                        width={180}
                        height={64}
                        className="rounded-md border-2 border-[#d4af37]"
                      />
                      <Image
                        src={"/images/dress/dress.png"}
                        alt="logo"
                        width={180}
                        height={64}
                        className="rounded-md border-2 border-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <li className="font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                    PARTY WEAR
                    <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                  </li>
                  <div className="hidden text-text-color group-hover:block bg-base-100 absolute left-0 top-[148px] z-20 shadow-xl w-full text-sm">
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
                        {partyWear &&
                          partyWear.map((data) => (
                            <Link
                              className="hover:text-primary-color hover:underline underline-offset-2"
                              key={data.category}
                              href={`/products/categories/${data.category}`}
                            >
                              {data.category}
                            </Link>
                          ))}
                      </ul>
                      <Image
                        src={"/images/dress/dress-1.png"}
                        alt="logo"
                        width={180}
                        height={64}
                        className="rounded-md border-2 border-[#d4af37]"
                      />
                      <Image
                        src={"/images/dress/dress.png"}
                        alt="logo"
                        width={180}
                        height={64}
                        className="rounded-md border-2 border-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <li className="font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                    BRIDAL WEAR
                    <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                  </li>
                  <div className="hidden text-text-color group-hover:block bg-base-100 absolute left-0 top-[148px] z-20 shadow-xl w-full text-sm">
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
                        {BridalWear &&
                          BridalWear.map((data) => (
                            <Link
                              className="hover:text-primary-color hover:underline underline-offset-2"
                              key={data.category}
                              href={`/products/categories/${data.category}`}
                            >
                              {data.category}
                            </Link>
                          ))}
                      </ul>
                      <Image
                        src={"/images/dress/dress-1.png"}
                        alt="logo"
                        width={180}
                        height={64}
                        className="rounded-md border-2 border-[#d4af37]"
                      />
                      <Image
                        src={"/images/dress/dress.png"}
                        alt="logo"
                        width={180}
                        height={64}
                        className="rounded-md border-2 border-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <li className="font-medium cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                <Link href="/location">OUR LOCATIONS</Link>
              </li>
            </div>
          </ul>
        </div>
        <form onSubmit={searchFormHandler} className="hidden lg:block">
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
                className="w-full lg:w-52 p-2 pl-4 text-sm text-gray-900 rounded-md bg-gray-50 outline-none h-8"
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
                          {result.item.productName} by {result.item.category}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      {toogle && (
        <div className="block lg:hidden w-full origin-top absolute top-15 shadow-xl pb-4 rounded-b-2xl bg-primary-color ring-1 ring-black ring-opacity-5 focus:outline-none z-20 left-0">
          <div className="container ">
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
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/">HOME</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/">EXCLUSIVE WOMAN WEAR</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/packages">NEW ARRIVALS</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/membership">PARTY WEAR</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/about-us">REGULAR WEAR</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/contact-us">BRIDAL WEAR</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/contact-us">BOOK AN APPOINTMENT</Link>
            </li>
            <li className="block py-2 text-white text-sm cursor-pointer">
              <Link href="/contact-us">OUR LOCATIONS</Link>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopNavbar;
