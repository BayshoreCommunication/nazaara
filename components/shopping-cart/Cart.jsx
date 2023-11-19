"use client";
import { removeItemFromCart, updateQuantity } from "@/store/cartSlice";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
import {
  useDeleteCartByUserIdAndVariantIdMutation,
  // useGetCartByUserIdQuery,
  // useGetProductDetailsQuery,
  useUpdateCartByUserIdMutation,
} from "@/services/cartApi";
import { BeatLoader } from "react-spinners";

const Cart = ({ cookieData, setIsAddToCartOpen }) => {
  const [loading, setLoading] = useState(true);
  // console.log("cookie from cart", cookieData);
  const cartItems = useSelector((state) => state.cart.items);
  // console.log("cartItemsss", cartItems);
  const [productDetails, setProductDetails] = useState([]);
  const dispatch = useDispatch();

  const [updateCart] = useUpdateCartByUserIdMutation();
  const [deleteCart] = useDeleteCartByUserIdAndVariantIdMutation();

  const fetchProductDetails = async (productId) => {
    try {
      // console.log("top console");
      const response = await axios.get(
        `${process.env.API_URL}/api/v1/product/${productId}`
      );
      // const {data} = useGetCartByUserIdQuery(productId)
      // console.log("Product Details API Response:", response.data);
      // console.log("response");
      return response.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    const fetchAllProductDetails = async () => {
      // console.log("inside");
      const productDetails = await Promise.all(
        cartItems.map(async (item) => ({
          ...item,
          product: await fetchProductDetails(item.product),
        }))
      );
      if (!productDetails) {
        console.log("inside down");
      }
      console.log("inside down2");
      // console.log("productDetailsss", productDetails);
      setProductDetails(productDetails);
      setLoading(false);
    };
    // if (cartItems.length > 0) {
    fetchAllProductDetails();
    // }
  }, [cartItems]);

  const [updateCartLoading, setUpdateCartLoading] = useState([]);

  const handleDecreaseQuantity = async (variantId, quantity, index) => {
    try {
      setUpdateCartLoading((prevLoading) => {
        const newLoading = [...prevLoading];
        newLoading[index] = true;
        return newLoading;
      });

      dispatch(
        updateQuantity({
          variantId: variantId,
          newQuantity: quantity - 1,
        })
      );
      await updateCart({
        user: cookieData._id,
        variantId: variantId,
        quantity: quantity - 1,
      });

      setUpdateCartLoading((prevLoading) => {
        const newLoading = [...prevLoading];
        newLoading[index] = false;
        return newLoading;
      });
    } catch (err) {
      console.error("Update error:", err);
    }
  };
  const handleIncreaseQuantity = async (variantId, quantity, index) => {
    try {
      setUpdateCartLoading((prevLoading) => {
        const newLoading = [...prevLoading];
        newLoading[index] = true;
        return newLoading;
      });
      dispatch(
        updateQuantity({
          variantId: variantId,
          newQuantity: quantity + 1,
        })
      );
      await updateCart({
        user: cookieData._id,
        variantId: variantId,
        quantity: quantity + 1,
      });
      setUpdateCartLoading((prevLoading) => {
        const newLoading = [...prevLoading];
        newLoading[index] = false;
        return newLoading;
      });
    } catch (err) {
      console.error("Update error:", err);
    }
  };
  const handleDeleteCartItem = async (variantId) => {
    try {
      dispatch(
        removeItemFromCart(variantId) // Use the variantId here
      );
      await deleteCart({
        user: cookieData._id,
        variantId: variantId,
      });
      // console.log("result::::", result);
      // if (result?.data?.status === "success") {

      // }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  console.log("productDetails", productDetails);

  return (
    <div className="flex flex-col gap-5 bg-white w-80 lg:w-96 h-min absolute top-9 right-0 z-50 rounded-xl p-4 shadow-xl">
      {productDetails && (
        <>
          <div className="text-black flex justify-between border-b pb-2">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-primary-color">
                Shopping Cart
              </h2>
              <span className="text-gray-500">
                {cartItems.length > 1
                  ? `(${cartItems.length} Items)`
                  : `(${cartItems.length} Item)`}
              </span>
            </div>
          </div>
          {loading ? (
            <div className={`flex justify-center items-center w-full h-[20vh]`}>
              <BeatLoader color="#820000" />
            </div>
          ) : (
            <>
              {cartItems.length > 0 && productDetails ? (
                <>
                  {productDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b"
                    >
                      <Image
                        src={detail?.product?.data?.variant[0]?.imageUrl[0]}
                        alt="cart"
                        width={90}
                        height={90}
                      />
                      <div className="text-black text-sm flex flex-col gap-1">
                        <h2>{detail?.product?.data?.productName}</h2>
                        <p>
                          <span className="font-medium">Color:</span>{" "}
                          {detail?.color}
                        </p>
                        <p>
                          <span className="font-medium">Size:</span>{" "}
                          {detail?.size}
                        </p>
                        <p>
                          <span className="font-medium">Quantity:</span>{" "}
                          {detail?.quantity}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-black text-sm">
                          BDT{" "}
                          {detail?.product?.data?.salePrice * detail?.quantity}
                          /-
                        </p>
                        <div className="flex items-center">
                          {detail?.quantity > 1 ? (
                            <button
                              onClick={() =>
                                handleDecreaseQuantity(
                                  detail?.variantId,
                                  detail?.quantity,
                                  index
                                )
                              }
                              className={`flex items-center justify-center text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-7 h-7 text-xl`}
                            >
                              -
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handleDeleteCartItem(detail?.variantId)
                              }
                              className={`flex items-center justify-center text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-7 h-7 text-xl`}
                            >
                              <MdDeleteForever />
                            </button>
                          )}

                          {updateCartLoading[index] ? (
                            <p className="text-gray-500 border border-gray-300 font-normal w-7 h-7 flex justify-center items-center">
                              <BeatLoader color="#820000" size={3} />
                            </p>
                          ) : (
                            <p className="text-gray-500 border border-gray-300 font-normal w-7 h-7 flex justify-center items-center">
                              {detail?.quantity}
                            </p>
                          )}

                          <button
                            onClick={() =>
                              handleIncreaseQuantity(
                                detail?.variantId,
                                detail?.quantity,
                                index
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
                <>
                  <p className="text-black text-center">
                    🥺 No Product Available!
                  </p>
                </>
              )}
            </>
          )}
          {cartItems?.length > 0 && (
            <button onClick={() => setIsAddToCartOpen(false)}>
              <Link
                href="/information"
                className="py-1 px-4 rounded-lg bg-primary-color flex justify-center hover:bg-primary-hover-color proceed-to-checkout"
              >
                Proceed to Checkout
              </Link>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
