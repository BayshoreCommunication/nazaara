"use client";
import Image from "next/image";
import Link from "next/link";
import Cart from "../shopping-cart/Cart";
import { useCallback, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useGlobalCart from "@/customhooks/useGlobalCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import UserCart from "../user-dashboard/UserCart";
import {
  useGetProductsCategoriesQuery,
  useGetProductsQuery,
} from "@/services/productApi";
import Fuse from "fuse.js";
import { addProduct } from "@/store/serachProductSlice";
import { useRouter } from "next/navigation";
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from "react-icons/fa";
import { useGetNavDataQuery } from "@/services/navApi";

const DesktopNavbar = () => {
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
  const [toogle, setToogle] = useState(false);
  // const [mobileLinkToggle, setMobileLinkToggle] = useState("");
  const [mobilePartyLink, setMobilePartyLink] = useState(false);
  const [mobileRegularLink, setMobileRegularLink] = useState(false);
  const [mobileBridalLink, setMobileBridalLink] = useState(false);

  const [products, setProducts] = useState([]);
  // console.log("first", products);

  //fetching nav data using rtk query
  const { data: navData, isLoading: isNavDataLoading } = useGetNavDataQuery({
    saleTitle: "",
    navCategoryTitle: "",
  });

  // console.log("navData", navData);

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

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
        },
      });
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

  const { data: productsCategories, isLoading } =
    useGetProductsCategoriesQuery();

  const filterSales = (cateogry) => {
    if (navData && cateogry) {
      const filteredSales = navData?.saleData?.filter(
        (sale) => sale.navCategoryTitle === cateogry
      );
      return filteredSales;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (navData) {
          const productRequests = navData?.saleData?.slice(0, 6).map((elem) => {
            const slughola = elem.productSlug[0];
            // console.log("test product", elem);
            return axios.get(
              `${process.env.API_URL}/api/v1/product/${slughola}`,
              {
                headers: {
                  authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
                },
              }
            );
          });

          // Use axios.all to perform multiple requests in parallel
          const responses = await Promise.all(productRequests);

          // Extract product data from responses
          const productsData = responses.map((response) => response.data);
          // console.log(
          //   "After Request productsData",
          //   productsData.map((item) => item.data)
          // );

          // Update state with products data
          setProducts(productsData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [navData]);

  // console.log(
  //   "Productssss",
  //   products.map((item) => item.data.category)
  // );

  const calculateSliceRange = (index) => {
    if (!products) return [];

    const startIndex = index * 2;
    const endIndex = startIndex + 2;

    return products.slice(startIndex, endIndex);
  };

  const portionSize = Math.ceil(productsCategories?.newData?.length / 3);
  const part1 = productsCategories?.newData?.slice(0, portionSize);
  const part2 = productsCategories?.newData?.slice(
    portionSize,
    2 * portionSize
  );
  const part3 = productsCategories?.newData?.slice(2 * portionSize);
  // console.log("portion", part1, part2, part3);

  return (
    <div className="main-container lg:py-4">
      <div className="flex justify-between items-center relative">
        {/* <div className="hidden lg:block w-1/4">
          <Link href="/" className="text-base">
            EXCLUSIVE WOMAN WEAR
          </Link>
        </div> */}
        {/* for mobile only */}
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
            <div
              className="relative flex items-center"
              ref={userDescriptionRef}
            >
              {cookieData ? (
                <>
                  <div className="cursor-pointer" onClick={handleUserToggle}>
                    {imgUrl ? (
                      <Image
                        src={`${imgUrl}`}
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
                    width={21}
                    height={21}
                    className="cursor-pointer h-auto"
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

            {navData && productsCategories && (
              <>
                {navData?.saleData?.map((elem, index) => {
                  // console.log("elem", elem);
                  if (index < 3) {
                    const portionSize = Math.ceil(
                      productsCategories.newData.length / 3
                    );
                    const start = index * portionSize;
                    const end = start + portionSize;
                    const portion = productsCategories.newData.slice(
                      start,
                      end
                    );
                    // console.log("portion", portion);
                    return (
                      <div className="group" key={index}>
                        <p className="font-medium relative text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                          {elem.navCategoryTitle.toUpperCase()}
                          {/* {elem.category} */}
                          <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                        </p>
                        <div className="hidden text-text-color group-hover:block bg-base-100 absolute w-full left-0 top-[160px] z-20 shadow-xl text-sm">
                          <div className="flex justify-between w-2/3 mx-auto py-6">
                            <ul className="flex flex-col gap-y-2">
                              <li className="text-primary-color font-semibold">
                                SALE
                              </li>
                              {elem?.navCategoryTitle && (
                                <>
                                  {filterSales(elem.navCategoryTitle)?.map(
                                    (sale, index) => {
                                      return (
                                        <div key={index}>
                                          <Link
                                            href={`/recommended-products?category=${elem.navCategoryTitle}&sale=${sale.saleTitle}`}
                                            className="hover:text-primary-color hover:underline underline-offset-2"
                                          >
                                            {sale.saleTitle.toUpperCase()}
                                          </Link>
                                        </div>
                                      );
                                    }
                                  )}
                                </>
                              )}
                              {/* <li>LIMITED STOCK</li>
                              <li>DISCOUNT</li> */}
                            </ul>
                            <ul className="flex flex-col gap-y-2">
                              <li className="text-primary-color font-semibold">
                                SHOP BY CATEGORY
                              </li>
                              <ul key={index} className="flex flex-col gap-y-2">
                                {portion.map((category, categoryIndex) => (
                                  <li key={categoryIndex}>
                                    <Link
                                      className="hover:text-primary-color hover:underline underline-offset-2"
                                      href={`/products/categories/${category.category}`}
                                    >
                                      {category.category}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </ul>

                            {products && (
                              <>
                                {calculateSliceRange(index).map(
                                  (data, mapIndex) => (
                                    <Link
                                      key={mapIndex}
                                      href={`/products/${data.data.slug}`}
                                    >
                                      <Image
                                        src={`${data.data.variant[0].imageUrl[0]}`}
                                        alt="product"
                                        width={180}
                                        height={64}
                                        className="rounded-md border-2 border-[#d4af37]"
                                      />
                                    </Link>
                                  )
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </>
            )}
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

      {/* mobile navbar start  */}
      {toogle && (
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
      )}
    </div>
  );
};

export default DesktopNavbar;
