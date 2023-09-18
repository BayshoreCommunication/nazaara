import { removeItemFromCart, updateQuantity } from "@/services/cartSlice";
import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import Button from "../Button";
import Link from "next/link";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [productDetails, setProductDetails] = useState([]);
  const dispatch = useDispatch();

  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/api/v1/product/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
      return null;
    }
  };
  const fetchAllProductDetails = useCallback(async () => {
    const productDetails = await Promise.all(
      cartItems.map(async (item) => ({
        ...item,
        product: await fetchProductDetails(item.product),
      }))
    );
    setProductDetails(productDetails);
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length > 0) {
      fetchAllProductDetails();
    }
  }, [cartItems, fetchAllProductDetails]);

  return (
    <>
      {productDetails && (
        <div className="flex flex-col gap-5 bg-white w-96 h-min absolute top-8 right-0 z-50 rounded-xl p-4 shadow-xl">
          <div className="text-black flex justify-between border-b pb-2">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-black">Shopping Cart</h2>
              <span className="text-gray-500">
                {cartItems.length > 1
                  ? `(${cartItems.length} Items)`
                  : `(${cartItems.length} Item)`}
              </span>
            </div>
          </div>
          {cartItems.length ? (
            <>
              {productDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b"
                >
                  <Image
                    src={detail.product.data.variant[0].imageUrl[0]}
                    alt="cart"
                    width={90}
                    height={90}
                  />
                  <div className="text-black text-sm flex flex-col gap-1">
                    <h2>{detail.product.data.productName}</h2>
                    <p>
                      <span className="font-medium">Color:</span> {detail.color}
                    </p>
                    <p>
                      <span className="font-medium">Size:</span> {detail.size}
                    </p>
                    <p>
                      <span className="font-medium">Quantity:</span>{" "}
                      {detail.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-black text-sm">
                      BDT {detail.product.data.salePrice * detail.quantity}/-
                    </p>
                    <div className="flex items-center">
                      {detail.quantity > 1 ? (
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                variantId: detail.variantId, // Use the variantId re
                                newQuantity: detail.quantity - 1,
                              })
                            )
                          }
                          className={`flex items-center justify-center text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-7 h-7 text-xl`}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            dispatch(
                              removeItemFromCart(detail.variantId) // Use the variantId here
                            )
                          }
                          className={`flex items-center justify-center text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-7 h-7 text-xl`}
                        >
                          <MdDeleteForever />
                        </button>
                      )}

                      <p className="text-gray-500 border border-gray-300 font-normal w-7 h-7 flex justify-center items-center">
                        {detail.quantity}
                      </p>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              variantId: detail.variantId, // Use the variantId here
                              newQuantity: detail.quantity + 1,
                            })
                          )
                        }
                        className="flex items-center justify-center text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-7 h-7 text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="text-black text-center">No Product Available</p>
          )}
          {cartItems.length && (
            <Link
              href="/information"
              className="py-1 px-4 rounded-lg bg-primary-color flex justify-center hover:bg-primary-hover-color"
            >
              Proceed to Checkout
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
