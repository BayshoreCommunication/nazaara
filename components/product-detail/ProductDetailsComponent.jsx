import { BsBoxArrowUp, BsShield } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import PendingShipBadge from "../PendingShipBadge";
import { RxDotFilled } from "react-icons/rx";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "@/services/cartSlice";
import axios from "axios";

const ProductDetailsComponent = ({ data, toggleDrawer }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [getSize, setGetSize] = useState(null);
  const [getColor, setGetColor] = useState(null);
  const [calculatePrice, setCalculatePrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  //set initial price
  useEffect(() => {
    setCalculatePrice(data?.salePrice);
    setGetSize(data?.size[0]);
    setGetColor(data?.variant[0].color);
  }, [data?.salePrice]);

  const percentageReduction =
    ((data?.regularPrice - data?.salePrice) / data?.regularPrice) * 100;

  const percentageFloor = Math.floor(percentageReduction);

  const [futureDate, setFutureDate] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 3); // Add 10 days
    setFutureDate(futureDate);
  }, []);

  //handle price
  const handleIncreasePrice = () => {
    setCalculatePrice((prevPrice) => prevPrice + data?.salePrice);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease the price
  const handleDecreasePrice = () => {
    if (data?.salePrice < calculatePrice) {
      setCalculatePrice((prevPrice) => prevPrice - data?.salePrice);
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    const jsonStr = getCookie("userAuthCredential");
    if (jsonStr && getColor && getSize) {
      const obj = JSON.parse(jsonStr);
      const cartData = {
        product: data?._id,
        user: obj._id,
        quantity,
        color: getColor,
        size: getSize,
      };
      dispatch(addItemToCart(cartData));
      console.log("Dispatched addItemToCart action: ", cartItems);
      // axios
      //   .post(`${process.env.API_URL}/api/v1/cart`, cartData)
      //   .then((response) => {
      //     toast.success(`${cartData.quantity} product added to cart`);
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     toast.error(`Something went wrong!`);
      //     console.error(error);
      //   });
    } else {
      if (!jsonStr) {
        toast.error("Please Login First!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-2 mt-4 lg:mt-0">
      {data && (
        <>
          <h3 className="font-bold text-2xl lg:text-xl">{data?.productName}</h3>
          <p className="text-gray-500">{data?.sku}</p>
          {data?.stock > 0 ? (
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
          <div className="flex items-center gap-2">
            <p className="font-bold text-bold text-xl">
              BDT {calculatePrice}/-
            </p>
            <p className="line-through text-sm font-medium">
              BDT {data?.regularPrice}/-
            </p>
            <PendingShipBadge text={`${percentageFloor}%`} />
          </div>
          <button
            className="text-blue-500 flex items-center gap-1"
            onClick={toggleDrawer}
          >
            <BsBoxArrowUp />
            Size Chart
          </button>
          <div className="flex items-center gap-2">
            {data?.size?.map((data) => (
              <button
                key={data}
                onClick={() => setGetSize(data)}
                className={`px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-600 font-normal ${
                  getSize === data &&
                  "bg-primary-color text-white hover:bg-primary-color hover:text-white"
                }`}
              >
                {data}
              </button>
            ))}
          </div>

          <h2 className="font-medium">Color</h2>
          <div className="flex items-center gap-2">
            {data?.variant?.map((data, i) => (
              <button
                key={i}
                onClick={() => setGetColor(data?.color)}
                className={`px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-600 font-normal ${
                  getColor === data?.color &&
                  "bg-primary-color text-white hover:bg-primary-color hover:text-white"
                }`}
              >
                {data?.color}
              </button>
            ))}
          </div>

          <h2 className="font-medium">Quantity</h2>
          <div className="flex items-center">
            <button
              onClick={handleDecreasePrice}
              className={`text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-8 h-8 text-xl ${
                calculatePrice == data?.salePrice && "cursor-not-allowed"
              }`}
            >
              -
            </button>
            <p className="text-gray-500 border border-gray-300 font-normal w-8 h-8 flex justify-center items-center">
              {quantity}
            </p>
            <button
              onClick={handleIncreasePrice}
              className="text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-8 h-8 text-xl"
            >
              +
            </button>
          </div>

          <p className="flex items-center gap-1 justify-center bg-gray-100 py-1 text-sm font-medium">
            <TbTruckDelivery /> Estimated Shipping Date:
            {` ${futureDate.toDateString()}`}
          </p>

          <button
            onClick={handleAddToCart}
            className="w-full text-white flex justify-center items-center bg-gray-800 hover:bg-black gap-1 py-2 font-medium"
          >
            <HiShoppingBag size={20} /> Add To Cart
          </button>
        </>
      )}
    </div>
  );
};

export default ProductDetailsComponent;
