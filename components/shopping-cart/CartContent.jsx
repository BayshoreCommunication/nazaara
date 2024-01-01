"use client";
import Image from "next/image";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import {
  useDeleteCartByUserIdAndVariantIdMutation,
  useGetCartByUserIdQuery,
  useUpdateCartByUserIdMutation,
} from "@/services/cartApi";
import { BeatLoader } from "react-spinners";
import ButtonOnHover from "../ButtonOnHover";
import { FaHandPointLeft, FaTimes } from "react-icons/fa";
import NoProductFound from "../NoProductFound";
import Link from "next/link";
import { calculateSalePrice } from "@/helpers/CalculateSalePrice";

const CartContent = ({ userData }) => {
  const [updateCartLoading, setUpdateCartLoading] = useState([]);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const {
    data: cartData,
    isLoading,
    refetch,
  } = useGetCartByUserIdQuery(`${userData._id}`);

  const [updateCart] = useUpdateCartByUserIdMutation();
  const [deleteCart] = useDeleteCartByUserIdAndVariantIdMutation();

  const handleDecreaseQuantity = async (variantId, quantity, user, index) => {
    try {
      setUpdateCartLoading((prevLoading) => {
        const newLoading = [...prevLoading];
        newLoading[index] = true;
        return newLoading;
      });
      await updateCart({
        user: user,
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
  const handleIncreaseQuantity = async (
    variantId,
    quantity,
    user,
    stock,
    preOrder,
    index
  ) => {
    try {
      if (stock === 0 && preOrder && quantity === 0) {
        setUpdateCartLoading((prevLoading) => {
          const newLoading = [...prevLoading];
          newLoading[index] = true;
          return newLoading;
        });
        await updateCart({
          user: user,
          variantId: variantId,
          quantity: quantity + 1,
        });
        setUpdateCartLoading((prevLoading) => {
          const newLoading = [...prevLoading];
          newLoading[index] = false;
          return newLoading;
        });
      } else if (quantity < stock) {
        setUpdateCartLoading((prevLoading) => {
          const newLoading = [...prevLoading];
          newLoading[index] = true;
          return newLoading;
        });
        await updateCart({
          user: user,
          variantId: variantId,
          quantity: quantity + 1,
        });
        setUpdateCartLoading((prevLoading) => {
          const newLoading = [...prevLoading];
          newLoading[index] = false;
          return newLoading;
        });
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };
  const handleDeleteCartItem = async (variantId, user) => {
    setIsDeleteLoading(true);
    try {
      const deleteCarts = await deleteCart({
        user: user,
        variantId: variantId,
      });
      // console.log("detecart", deleteCarts);
      if (deleteCarts?.data?.status == "success") {
        setIsDeleteLoading(false);
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  if (isLoading || isDeleteLoading) {
    return (
      <div className="w-full h-[40vh] flex justify-center items-center">
        <BeatLoader color="#820000" />
      </div>
    );
  } else {
    refetch;
    const data = cartData?.data;

    //calculate subtotal
    let subTotal = 0;
    data.forEach((detail) => {
      subTotal =
        subTotal +
        calculateSalePrice(
          detail?.product?.promotion?.validPromotion,
          detail?.product?.promotion?.discountType,
          detail?.product?.regularPrice,
          detail?.product?.promotion?.discountOff,
          detail?.product?.salePrice
        ) *
          detail.quantity;
    });

    //calculate vat
    const vatIncluded = (subTotal * 0.07).toFixed(2);

    //calculate total amount
    let totalAmount = subTotal;

    // console.log("data from cart", data);

    return (
      <div className="main-container flex gap-10 items-start">
        <div className="flex flex-[3] flex-col gap-5 bg-white">
          <div className="text-black flex justify-between border-b border-gray-300 pb-2">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-primary-color">
                  Shopping Cart
                </h2>
                <span className="text-gray-500">
                  {data.length > 1
                    ? `(${data.length} Items)`
                    : `(${data.length} Item)`}
                </span>
              </div>
              <Link href={"/shop"}>
                <button className="border-4 border-primary-color hover:border-transparent bg-primary-color text-white px-6 py-1.5 font-medium rounded-md hover:bg-primary-hover-color transition-colors duration-500 w-full flex gap-1 items-center justify-center text-sm">
                  <FaHandPointLeft size={20} /> Continue Shopping
                </button>
              </Link>
            </div>
          </div>
          <>
            {data.length > 0 ? (
              <>
                {data.map((detail, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-300 pb-5"
                  >
                    {detail?.product && (
                      <>
                        <div className="flex gap-4 items-center">
                          <Link href={`/products/${detail?.product?.slug}`}>
                            <Image
                              src={detail?.product?.variant[0]?.imageUrl[0]}
                              alt="cart"
                              width={90}
                              height={90}
                              className="rounded-md"
                            />
                          </Link>
                          <div className="text-sm flex flex-col gap-1 w-[20vw]">
                            <Link href={`/products/${detail?.product?.slug}`}>
                              <h2 className="text-gray-700 font-semibold text-base">
                                {detail?.product?.productName}
                              </h2>
                            </Link>
                            <p className="text-gray-600">
                              <span className="font-medium">Color:</span>{" "}
                              {detail?.color}
                            </p>
                            <p className="text-gray-600">
                              <span className="font-medium">Size:</span>{" "}
                              {detail?.size}
                            </p>
                            <p className="text-gray-600">
                              <span className="font-medium">Quantity:</span>{" "}
                              {detail?.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-gray-700 text-sm font-semibold">
                            ৳{" "}
                            {calculateSalePrice(
                              detail?.product?.promotion?.validPromotion,
                              detail?.product?.promotion?.discountType,
                              detail?.product?.regularPrice,
                              detail?.product?.promotion?.discountOff,
                              detail?.product?.salePrice
                            ) * detail?.quantity}
                            /-
                          </p>
                          <div className="relative group">
                            <div>
                              <span className="absolute opacity-0 z-50 group-hover:opacity-100 bottom-full px-0 py-1 text-xs w-full text-center font-medium text-gray-500 bg-gray-100 transition-opacity duration-300">
                                {`${
                                  detail.product.stock > 0
                                    ? `${detail?.product?.stock} Stock Available`
                                    : `${
                                        detail.product.preOrder
                                          ? "Pre-Order Available"
                                          : "Out Of Stock"
                                      }`
                                }`}
                              </span>
                            </div>
                            <div className="flex items-center">
                              {detail?.quantity > 1 ? (
                                <button
                                  onClick={() =>
                                    handleDecreaseQuantity(
                                      detail?.variantId,
                                      detail?.quantity,
                                      detail?.user,
                                      index
                                    )
                                  }
                                  className={`flex items-center justify-center text-gray-600 border border-gray-400  hover:bg-gray-300 hover:text-gray-700 font-bold w-7 h-7 text-xl`}
                                >
                                  -
                                </button>
                              ) : (
                                <button
                                  onClick={() =>
                                    handleDeleteCartItem(
                                      detail?.variantId,
                                      detail?.user
                                    )
                                  }
                                  className={`flex items-center justify-center text-gray-600 border border-gray-400  hover:bg-gray-300 hover:text-gray-700 font-bold w-7 h-7 text-xl`}
                                >
                                  <MdDeleteForever />
                                </button>
                              )}

                              {updateCartLoading[index] ? (
                                <p className="text-gray-600 border border-gray-400 font-normal w-7 h-7 flex justify-center items-center">
                                  <BeatLoader color="#820000" size={3} />
                                </p>
                              ) : (
                                <p className="text-gray-600 border border-gray-400 font-normal w-7 h-7 flex justify-center items-center">
                                  {detail?.quantity}
                                </p>
                              )}
                              <button
                                onClick={() =>
                                  handleIncreaseQuantity(
                                    detail?.variantId,
                                    detail?.quantity,
                                    detail?.user,
                                    detail?.product?.stock,
                                    detail?.product?.preOrder,
                                    index
                                  )
                                }
                                className={`flex items-center justify-center text-gray-600 border border-gray-400  hover:bg-gray-300 hover:text-gray-700 font-bold w-7 h-7 text-xl ${
                                  detail?.quantity >= detail?.product?.stock
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                                }`}
                                disabled={
                                  detail?.quantity >= detail?.product?.stock
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <Link
                          href={`/shop/cart/measurement?cartId=${detail?._id}&userId=${userData?._id}`}
                          className="relative group"
                        >
                          {detail.sizeChart && (
                            <div>
                              <span className="absolute opacity-0 z-50 group-hover:opacity-100 bottom-full px-2 py-1 text-xs w-full text-center font-medium text-gray-500 bg-gray-100 transition-opacity duration-300">
                                Already Added
                              </span>
                            </div>
                          )}
                          <button
                            disabled={detail.sizeChart}
                            className="bg-primary-color text-white px-2 py-1 text-xs rounded-sm hover:bg-primary-hover-color transition-colors duration-500 disabled:cursor-not-allowed"
                          >
                            Add Measurement
                          </button>
                        </Link>

                        <button
                          onClick={() =>
                            handleDeleteCartItem(
                              detail?.variantId,
                              detail?.user
                            )
                          }
                        >
                          <FaTimes className="text-gray-600" size={18} />
                        </button>
                      </>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                <NoProductFound text={"No item found in your cart"} />
              </>
            )}
          </>
        </div>
        <div className="flex-1 shadow-md rounded-md p-6">
          <h2 className="font-semibold text-gray-700 text-lg mb-4">
            Order Summary
          </h2>
          <div className="text-gray-700 flex flex-col gap-2 mb-4 font-medium text-sm">
            <div className="flex justify-between pb-2 border-b border-gray-300">
              <p>Sub-Total</p>
              <p className="flex gap-1">
                <span>৳</span> <span>{subTotal}</span>
              </p>
            </div>
            <div className="flex justify-between pb-2 border-b border-gray-300">
              <p>Vat Included</p>
              <p className="flex gap-1">
                <span>৳</span> <span>{vatIncluded}</span>
              </p>
            </div>
            <div className="flex justify-between pb-2 text-gray-800 font-semibold">
              <p>Total Order</p>
              <p className="flex gap-1">
                <span>৳</span> <span>{totalAmount}</span>
              </p>
            </div>
          </div>
          <Link href={"/shop/checkout"}>
            {" "}
            <ButtonOnHover text={"Proceed To Checkout"} />
          </Link>
        </div>
      </div>
    );
  }
};

export default CartContent;
