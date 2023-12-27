import { BsBoxArrowUp, BsShield } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "@/store/cartSlice";
import { currentColor } from "@/store/imgFilterSlice";

import { useRouter } from "next/navigation";
import {
  useCreateNewCartMutation,
  useUpdateCartByUserIdMutation,
} from "@/services/cartApi";
import PendingShipBadge from "../PendingShipBadge";
import PercentageBadge from "../PercentageBadge";
import { FaCartPlus } from "react-icons/fa";
import { BeatLoader } from "react-spinners";

const ProductDetailsComponent = ({ data }) => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [getSize, setGetSize] = useState(null);
  const [getColor, setGetColor] = useState(null);
  const [calculatePrice, setCalculatePrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [updateCart, { isLoading, isError, isSuccess }] =
    useUpdateCartByUserIdMutation();

  const [createCart] = useCreateNewCartMutation();

  //set initial price
  useEffect(() => {
    setCalculatePrice(data?.salePrice);
    setGetSize(data?.size[0]);
    // setGetColor(data?.variant[0].color);
  }, [data?.salePrice, data?.size, data?.variant]);

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
      // console.log("check", check);
      if (check && data.stock <= check.quantity) {
        toast.error(`Can't add more product! Already added into cart`);
      } else if (check) {
        const result = await updateCart({
          user: cartData.user,
          variantId: cartData.variantId,
          quantity: check.quantity + cartData.quantity,
        });
        if (result.data.status === "success") {
          toast.success(`${cartData.quantity} new product added to cart`);
        } else {
          toast.error(`Something went wrong!`);
        }
      } else {
        const result = await createCart(cartData);
        // console.log("result", result);
        if (result?.data?.status === "success") {
          toast.success(`${cartData.quantity} new product added to cart`);
        } else {
          toast.error(`Something went wrong!`);
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

  // console.log("product data", data);

  return (
    <div className="flex flex-col gap-y-4 mt-4 lg:mt-0">
      {data ? (
        <>
          <h3 className="font-bold text-2xl lg:text-xl uppercase">
            {data.productName}
          </h3>
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
            {data.preOrder && (
              <p className="flex items-center -ml-1 text-sm font-medium">
                <RxDotFilled size={30} color="green" />
                Pre-Order Available
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold text-bold text-xl text-gray-700">
              BDT {calculatePrice}/-
            </p>
            <p className="line-through text-sm font-medium text-gray-500">
              BDT {data?.regularPrice}/-
            </p>
            <PercentageBadge text={`- ${percentageFloor}%`} />
          </div>
          <div className="flex items-center gap-2">
            {data?.size?.map((data) => (
              <button
                key={data}
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
            <div className="flex items-center gap-2">
              {data.variant.map((data, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setGetColor(data?.color);
                    dispatch(currentColor(data.color));
                  }}
                  className={`capitalize text-sm px-2 py-1 text-gray-700 border border-gray-400 hover:border-primary-color rounded-md hover:bg-primary-color hover:text-white font-normal ${
                    getColor === data?.color &&
                    "border-primary-color bg-primary-color text-white"
                  }`}
                >
                  {data?.color}
                </button>
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
                  quantity == data?.stock && "cursor-not-allowed"
                }`}
              >
                +
              </button>
            </div>
          </div>

          <div>
            <p className="flex items-center gap-1 justify-center bg-gray-100 py-1 text-sm font-medium">
              <TbTruckDelivery /> Estimated Shipping Date:
              {` ${futureDate?.toDateString()}`}
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
        <div className="w-full h-[40vh] flex justify-center items-center">
          <BeatLoader color="#820000" />
        </div>
      )}
    </div>
  );
};

export default ProductDetailsComponent;
