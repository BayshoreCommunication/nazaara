"use client";
import { addItemToCart } from "@/store/cartSlice";
import { currentColor } from "@/store/imgFilterSlice";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { RxDotFilled } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { TiDelete, TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

import { CalculateFixLessPercentageAmount } from "@/helpers/CalculateFixedPercentageLessAmount";
import {
  useCreateNewCartMutation,
  useUpdateCartByUserIdMutation,
} from "@/services/cartApi";
import { useRouter } from "next/navigation";
import { BiSolidOffer } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { BeatLoader } from "react-spinners";
import PercentageBadge from "../PercentageBadge";

const ProductDetailsComponent = ({ data, promotionData }) => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [getSize, setGetSize] = useState(null);
  const [getColor, setGetColor] = useState(null);
  const [calculatePrice, setCalculatePrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [updateCart] = useUpdateCartByUserIdMutation();

  const [createCart] = useCreateNewCartMutation();

  // console.log("cartItems", cartItems);

  // console.log("promotion data", promotionData);

  //set initial price
  useEffect(() => {
    if (promotionData) {
      if (promotionData?.discountType === "percentage") {
        const price = CalculateFixLessPercentageAmount(
          data?.regularPrice,
          promotionData?.discountOff
        );
        setCalculatePrice(price);
      } else {
        setCalculatePrice(data?.regularPrice - promotionData?.discountOff);
      }
    } else {
      setCalculatePrice(data?.salePrice);
    }
    setGetSize(data?.size[0]);
  }, [
    data.promotion,
    data?.regularPrice,
    data?.salePrice,
    data?.size,
    data.variant,
    promotionData,
  ]);

  const percentageReduction =
    ((data?.regularPrice - data?.salePrice) / data?.regularPrice) * 100;

  const percentageFloor = Math.floor(percentageReduction);

  const [futureDate, setFutureDate] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    if (data.stock === 0 && data.preOrder) {
      futureDate.setDate(currentDate.getDate() + 21);
    } else {
      futureDate.setDate(currentDate.getDate() + 7);
    }

    setFutureDate(futureDate);
  }, [data.preOrder, data.stock]);

  const formatFutureDate = (date) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    if (date) {
      return date?.toLocaleString("en-US", options).replace(",", ", ");
    }
  };

  //handle price
  const handleIncreasePrice = () => {
    if (data.stock > quantity) {
      setCalculatePrice((prevPrice) => prevPrice + data?.salePrice);
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  // Function to decrease the price
  const handleDecreasePrice = () => {
    if (data?.salePrice < calculatePrice) {
      setCalculatePrice((prevPrice) => prevPrice - data?.salePrice);
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = async () => {
    const jsonStr = getCookie("userAuthCredential");
    if (jsonStr && getColor && getSize) {
      const obj = JSON.parse(jsonStr);
      const cartData = {
        product: data?._id,
        user: obj._id,
        quantity,
        color: getColor,
        size: getSize,
        variantId: `${data?._id}-${getColor}-${getSize}`,
      };
      dispatch(addItemToCart(cartData));
      const check = cartItems.find(
        (item) => item.variantId === cartData.variantId
      );
      // console.log("cart items", cartItems);
      // console.log("check", check);
      if (check && data.stock <= check.quantity) {
        toast.error(`Can't add more product! Already added into cart`);
      } else if (check) {
        const result = await updateCart({
          user: cartData.user,
          variantId: cartData.variantId,
          quantity: check.quantity + cartData.quantity,
        });
        if (result?.data?.status === "success") {
          toast.success(`${cartData.quantity} new product added to cart`);
        } else {
          toast.error(`Something went wrong to update!`);
        }
      } else {
        // console.log("cart data", cartData);
        const result = await createCart(cartData);
        // console.log("result to create", result);
        if (result?.data?.status === "success") {
          toast.success(`${cartData.quantity} new product added to cart`);
        } else {
          toast.error(`Something went wrong to create!`);
        }
      }
    } else {
      if (!jsonStr) {
        toast.error("Please Login First!");
        router.push("/user-authentication");
      } else if (!getColor) {
        toast.error("Please select a color");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  function getTimeRemaining(expireDate) {
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    const expirationTime = new Date(expireDate).toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    });

    const nowMillis = new Date(now).getTime();
    const expirationTimeMillis = new Date(expirationTime).getTime();
    const timeDifference = expirationTimeMillis - nowMillis;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  const [timeLeft, setTimeLeft] = useState(
    getTimeRemaining(promotionData?.expireDate)
  );

  useEffect(() => {
    if (promotionData) {
      const intervalId = setInterval(() => {
        setTimeLeft(getTimeRemaining(promotionData?.expireDate));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [promotionData, promotionData?.expireDate]);

  return (
    <div className="flex flex-col gap-y-4 mt-4 lg:mt-0">
      {data ? (
        <>
          {promotionData && (
            <div className="border border-primary-color rounded-full flex gap-2 items-center">
              <p className="flex gap-1 items-center uppercase font-semibold bg-gradient-to-r from-primary-color to-[#820000c4] rounded-l-full text-white py-1 px-2 w-max">
                <BiSolidOffer size={20} />
                {promotionData?.title}
              </p>
              {timeLeft && (
                <p className="text-sm text-primary-color font-semibold">
                  Ends in:
                  <span>
                    {!isNaN(timeLeft.days) && ` ${timeLeft.days} days, `}
                  </span>
                  <span>
                    {!isNaN(timeLeft.hours) && `${timeLeft.hours} hours, `}
                  </span>
                  <span>
                    {!isNaN(timeLeft.minutes) &&
                      `${timeLeft.minutes} minutes, `}
                  </span>
                  <span>
                    {!isNaN(timeLeft.seconds) && `${timeLeft.seconds} seconds`}
                  </span>
                </p>
              )}
            </div>
          )}

          <h1 className="font-bold text-2xl lg:text-xl uppercase">
            {data.productName}
          </h1>
          <p className="text-gray-500">{data.sku}</p>
          <div>
            {data.stock > 0 ? (
              <p className="flex items-center -ml-1 text-sm font-medium">
                <RxDotFilled size={30} color="green" />
                In Stock
              </p>
            ) : (
              <p className="flex items-center -ml-1 text-sm">
                <RxDotFilled size={30} color="#820000" />
                Out of Stock
              </p>
            )}
            {data.stock === 0 && data.preOrder && (
              <p className="flex items-center -ml-1 text-sm font-medium">
                <RxDotFilled size={30} color="green" />
                Pre-Order Available
              </p>
            )}
            {promotionData?.freeShipping && (
              <p className="flex items-center -ml-1 text-sm font-medium">
                <RxDotFilled size={30} color="green" />
                Free Shipping Available
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold text-bold text-xl text-gray-700">
              BDT {calculatePrice}/-
            </p>
            {calculatePrice !== data?.regularPrice && (
              <p className="line-through text-sm font-medium text-gray-500">
                BDT {data?.regularPrice}/-
              </p>
            )}
            {calculatePrice !== data?.regularPrice ||
              (percentageFloor !== 0 && (
                <PercentageBadge text={`- ${percentageFloor}%`} />
              ))}
          </div>
          <div className="flex items-center gap-2">
            {data?.size?.map((data, index) => (
              <button
                key={index}
                onClick={() => setGetSize(data)}
                className={`capitalize text-sm px-2 py-1 text-gray-700 border border-gray-400 hover:border-primary-color rounded-md hover:bg-primary-color hover:text-white font-normal ${
                  getSize === data &&
                  "border-primary-color bg-primary-color text-white"
                }`}
              >
                {data}
              </button>
            ))}
          </div>

          <div>
            <h2 className="font-medium text-gray-700 text-sm mb-1">Color</h2>
            <div className="flex items-center gap-x-1 gap-y-4">
              {data.variant.map((data, index) => (
                <div
                  key={index}
                  className="relative group flex flex-col items-center"
                >
                  <div className="mb-1 rounded-sm absolute opacity-0 z-50 group-hover:opacity-100 bottom-full px-2 py-[2px] text-xs w-max text-center font-medium text-gray-500 bg-gray-200 transition-opacity duration-300">
                    {data.color}
                  </div>
                  <button
                    onClick={() => {
                      setGetColor(data?.color);
                      dispatch(currentColor(data?.color));
                    }}
                    style={{ backgroundColor: data?.colorCode }}
                    className={`flex justify-center items-center w-7 h-7 border border-gray-300 rounded-sm shadow-sm`}
                  >
                    {getColor === data?.color &&
                      (data.color === "Black" ? (
                        <TiTick color="white" size={20} />
                      ) : (
                        <TiTick color="black" size={20} />
                      ))}
                  </button>
                </div>
              ))}
              {getColor && (
                <button
                  onClick={() => {
                    setGetColor(null);
                    dispatch(currentColor(null));
                  }}
                  className="text-xs text-primary-color flex items-center"
                >
                  <TiDelete size={17} color="red" /> Clear Select
                </button>
              )}
            </div>
          </div>

          <div>
            <h2 className="font-medium text-gray-700 text-sm mb-1">Quantity</h2>
            <div className="flex items-center">
              <button
                onClick={handleDecreasePrice}
                className={`flex justify-center items-center text-gray-700 border border-gray-400  hover:bg-primary-color hover:border-primary-color hover:text-white font-bold w-8 h-8 text-xl ${
                  calculatePrice == data?.salePrice && "cursor-not-allowed"
                }`}
              >
                -
              </button>
              <p className="text-gray-700 border border-gray-400 font-normal w-8 h-8 flex justify-center items-center">
                {quantity}
              </p>
              <button
                onClick={handleIncreasePrice}
                className={`flex justify-center items-center text-gray-700 border border-gray-400  hover:bg-primary-color hover:border-primary-color hover:text-white font-bold w-8 h-8 text-xl ${
                  quantity >= data?.stock && "cursor-not-allowed"
                }`}
              >
                +
              </button>
            </div>
          </div>

          <div>
            <p className="flex items-center gap-1 justify-center bg-gray-100 py-1 text-sm font-medium">
              <TbTruckDelivery /> Estimated Shipping Date:
              {` ${formatFutureDate(futureDate)}`}
            </p>
            <button
              onClick={handleAddToCart}
              className="group btn2 py-[10px] relative border-2 border-primary-color uppercase text-gray-700 tracking-wider leading-none overflow-hidden hover:text-white flex gap-[6px] justify-center items-center font-semibold w-full"
            >
              <span className="absolute inset-0 bg-primary-color"></span>
              <span className="hidden group-hover:flex gap-[6px] absolute inset-0 justify-center items-center font-medium">
                <FaCartPlus size={20} /> ADD TO CART
              </span>
              <FaCartPlus size={20} /> ADD TO CART
            </button>
          </div>
        </>
      ) : (
        <div className="w-full h-[50vh] flex justify-center items-center">
          <BeatLoader color="#820000" />
        </div>
      )}
    </div>
  );
};

export default ProductDetailsComponent;
