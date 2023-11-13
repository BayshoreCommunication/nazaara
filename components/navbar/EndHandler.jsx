import React, { useCallback, useEffect, useState } from "react";
import Cart from "../shopping-cart/Cart";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import UserCart from "../user-dashboard/UserCart";
import useGlobalCart from "@/customhooks/useGlobalCart";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useGetProductsQuery } from "@/services/productApi";
import { getCookie } from "cookies-next";
import Fuse from "fuse.js";
import { addProduct } from "@/store/serachProductSlice";

const EndHandler = () => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const apiUrl = `${process.env.API_URL}/api/v1/product/categories`;
  const [categories, setCategories] = useState(null);
  // const [auth, setAuth] = useState("signIn");
  const [imgUrl, setImgUrl] = useState(null);
  // console.log("imgUrll", imgUrl);
  const [cookieData, setCookieData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

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

  const searchFormHandler = async (e) => {
    e.preventDefault();
    // Assuming this is an asynchronous operation, such as an API request
    try {
      // Perform your search operation here
      dispatch(addProduct(filteredData));
      router.push("/products");
    } catch (error) {
      // Handle any errors that may occur during the search
      console.error("Search error:", error);
    }
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
  const {
    isCartOpen: isSearchOpen,
    setIsCartOpen: setIsSearchOpen,
    cartRef: searchRef,
  } = useGlobalCart();

  const jsonStr = getCookie("userAuthCredential");

  const getCookieData = useCallback(() => {
    if (jsonStr != null) {
      const obj = JSON.parse(jsonStr);
      setImgUrl(obj.imageUrl);
      setCookieData(obj);
    }
  }, [jsonStr]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        setCategories(response.data.newData);
      }
    } catch (error) {
      console.error("product categories fetching error", error);
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
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle the cart open/close state
  };

  return (
    <div className="flex items-center gap-x-4 w-max">
      <div className="relative" ref={searchRef}>
        <AiOutlineSearch
          size={26}
          onClick={handleSearchToggle}
          className="cursor-pointer mt-1"
        />

        {/* search form */}
        <form onSubmit={searchFormHandler} className="hidden lg:block">
          {isSearchOpen && (
            <div
              className={`absolute transition-all duration-500 ease-in-out ${
                scrollY > 100 ? "-bottom-[4.8rem]" : "-bottom-[5.30rem]"
              } right-0`}
            >
              <div className="relative drop-shadow-lg">
                <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
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
                  id="default-search"
                  className="w-full lg:w-72 rounded-sm p-2 h-14 pl-4 text-sm text-gray-900 bg-gray-50 outline-none"
                  placeholder="Search on Nazaara"
                  required
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setSearchIsShown(true);
                  }}
                  value={searchTerm}
                />
              </div>
            </div>
          )}
          {searchTerm && searchIsShown && isSearchOpen && (
            <div
              className={`absolute transition-all duration-500 ease-in-out w-72 rounded-sm bg-white right-0 ${
                scrollY > 100 ? "top-[6.4rem]" : "top-28"
              } shadow-xl`}
            >
              <ul className="p-4 flex flex-col gap-[0.7rem]">
                {filteredData && filteredData.length > 0 ? (
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
                  ))
                ) : (
                  <li className="text-gray-700 text-sm">
                    {`No products found with ${searchTerm}`}
                  </li>
                )}
              </ul>
            </div>
          )}
        </form>
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
                  className="cursor-pointer rounded-full h-5 w-5 lg:h-6 lg:w-6 shadow-md border-2"
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
      <div className="relative" ref={addToCartRef}>
        {cookieData ? (
          <AiOutlineShoppingCart
            className="cursor-pointer"
            size={24}
            onClick={handleCartToggle}
          />
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
  );
};

export default EndHandler;
