"use client";
import { calculateSalePrice } from "@/helpers/CalculateSalePrice";
import {
  useDeleteCartByUserIdAndVariantIdMutation,
  useGetCartByUserIdQuery,
  useUpdateCartByUserIdMutation,
} from "@/services/cartApi";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaHandPointLeft, FaTimes } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BeatLoader } from "react-spinners";
import ButtonOnHoverFullWidth from "../ButtonOnHoverWithFullWidth";
import NoProductFound from "../NoProductFound";

const CartContent = ({ userData }) => {
  const [updateCartLoading, setUpdateCartLoading] = useState([]);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  // const [promotionData, setPromotionData] = useState(null);
  // const [isExtraProduct, setIsExtraProduct] = useState(false);

  const {
    data: cartData,
    isLoading,
    refetch,
  } = useGetCartByUserIdQuery(`${userData._id}`);
  const [updateCart] = useUpdateCartByUserIdMutation();
  const [deleteCart] = useDeleteCartByUserIdAndVariantIdMutation();
  // console.log("cartData", cartData);

  // useEffect(() => {
  //   if (cartData) {
  //     if (
  //       cartData.data.map(
  //         (data) => data.quantity > data.product.stock && !data.product.preOrder
  //       )
  //     ) {
  //       setIsExtraProduct(true);
  //     }
  //   }
  // }, [cartData, cartData?.data]);
  // useEffect(() => {
  //   // if (cartData) {
  //   const promotionData = cartData?.data?.map(
  //     (data) =>
  //       data?.product?.category?.promotion ||
  //       data?.product?.subCategory?.promotion
  //   );

  //   // console.log("promotion teti", promotionData);
  //   // if (promotionData) {
  //   //   if (promotionData.validPromotion) {
  //   //     setPromotionData(promotionData);
  //   //   }
  //   // }
  //   // }
  //   // const promotionData =
  //   //   productDetails?.subCategory?.promotion ||
  //   //   productDetails?.category?.promotion;
  //   // if (promotionData) {
  //   //   if (promotionData.validPromotion) {
  //   //     setPromotionData(promotionData);
  //   //   }
  //   // }
  // }, [cartData]);

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
        revalidatePath("/shop/checkout");
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
    // console.log("data", data);

    //calculate subtotal
    let subTotal = 0;
    data.forEach((detail) => {
      detail?.product?.category?.promotion
        ? (subTotal =
            subTotal +
            calculateSalePrice(
              detail?.product?.category?.promotion?.validPromotion,
              detail?.product?.category?.promotion?.discountType,
              detail?.product?.regularPrice,
              detail?.product?.category?.promotion?.discountOff,
              detail?.product?.salePrice
            ) *
              detail?.quantity)
        : (subTotal =
            subTotal +
            calculateSalePrice(
              detail?.product?.subCategory?.promotion?.validPromotion,
              detail?.product?.subCategory?.promotion?.discountType,
              detail?.product?.regularPrice,
              detail?.product?.subCategory?.promotion?.discountOff,
              detail?.product?.salePrice
            ) *
              detail?.quantity);
    });

    //calculate vat
    const vatIncluded = (subTotal * 0.07).toFixed(2);

    //calculate total amount
    let totalAmount = subTotal;

    // console.log("data from cart", data);

    return (
      <div className="main-container flex flex-col lg:flex-row gap-10 lg:items-start">
        <div className="flex lg:flex-[3] flex-col gap-5 bg-white">
          <div>
            <div className="text-black flex justify-between border-b border-gray-300 pb-2">
              <div className="w-full flex justify-between items-center">
                <div className="lg:flex lg:items-center gap-2">
                  <h2 className="text-lg font-semibold text-primary-color">
                    Shopping Cart
                  </h2>
                  <div className="text-gray-500 flex justify-center">
                    {data.length > 1
                      ? `(${data.length} Items)`
                      : `(${data.length} Item)`}
                  </div>
                </div>
                <Link className="" href={"/shop"}>
                  <button className="border-4 border-primary-color hover:border-transparent bg-primary-color text-white px-6 py-1.5 font-medium rounded-md hover:bg-primary-hover-color transition-colors duration-500 flex gap-1 items-center justify-center text-sm mb-3 sm:mb-0">
                    <FaHandPointLeft size={20} /> Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
            <div>
              {data.length > 0 ? (
                <div>
                  {data.map((detail, index) => (
                    <div
                      key={detail._id}
                      className="flex flex-col lg:flex-row lg:justify-between lg:items-center border-b border-gray-300 py-5"
                    >
                      {detail?.product && (
                        <>
                          <div className="hidden lg:flex gap-4 items-center">
                            <Link href={`/products/${detail?.product?.slug}`}>
                              <Image
                                // src={detail?.product?.variant[0]?.imageUrl[0]}
                                src={
                                  detail?.product?.variant
                                    .flatMap((v) => v.imageUrl)
                                    .find((image) => image.isFeatured)?.image ||
                                  detail?.product?.variant[0].imageUrl[0].image
                                }
                                alt="cart"
                                width={90}
                                height={80}
                                className="rounded-md w-[64px] h-[90px]"
                              />
                            </Link>
                            <div className="text-sm flex flex-row lg:flex-col gap-1 lg:w-[20vw] items-between items-center lg:items-start">
                              <div className="text-gray-700 font-semibold text-md lg:text-base">
                                <Link
                                  href={`/products/${detail?.product?.slug}`}
                                >
                                  {detail?.product?.productName.length > 90
                                    ? `${detail?.product?.productName.slice(
                                        0,
                                        90
                                      )}...`
                                    : detail?.product?.productName}
                                </Link>
                                <p className="text-gray-700 mt-2 text-sm font-semibold lg:hidden">
                                  ৳{" "}
                                  {detail?.product?.category?.promotion
                                    ? calculateSalePrice(
                                        detail?.product?.category?.promotion
                                          ?.validPromotion,
                                        detail?.product?.category?.promotion
                                          ?.discountType,
                                        detail?.product?.regularPrice,
                                        detail?.product?.category?.promotion
                                          ?.discountOff,
                                        detail?.product?.salePrice
                                      ) * detail?.quantity
                                    : calculateSalePrice(
                                        detail?.product?.subCategory?.promotion
                                          ?.validPromotion,
                                        detail?.product?.subCategory?.promotion
                                          ?.discountType,
                                        detail?.product?.regularPrice,
                                        detail?.product?.subCategory?.promotion
                                          ?.discountOff,
                                        detail?.product?.salePrice
                                      ) * detail?.quantity}
                                  /-
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">
                                  <span className="font-semibold">Color:</span>{" "}
                                  {detail?.color}
                                </p>
                                <p className="text-gray-600">
                                  <span className="font-semibold">Size:</span>{" "}
                                  {detail?.size}
                                </p>
                                <p className="text-gray-600">
                                  <span className="font-semibold">
                                    Quantity:
                                  </span>{" "}
                                  {detail?.quantity}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="hidden lg:flex flex-col gap-1">
                            <p className="text-gray-700 text-sm font-semibold">
                              ৳{" "}
                              {detail?.product?.category?.promotion
                                ? calculateSalePrice(
                                    detail?.product?.category?.promotion
                                      ?.validPromotion,
                                    detail?.product?.category?.promotion
                                      ?.discountType,
                                    detail?.product?.regularPrice,
                                    detail?.product?.category?.promotion
                                      ?.discountOff,
                                    detail?.product?.salePrice
                                  ) * detail?.quantity
                                : calculateSalePrice(
                                    detail?.product?.subCategory?.promotion
                                      ?.validPromotion,
                                    detail?.product?.subCategory?.promotion
                                      ?.discountType,
                                    detail?.product?.regularPrice,
                                    detail?.product?.subCategory?.promotion
                                      ?.discountOff,
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
                            className="relative group hidden lg:block"
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
                            <FaTimes
                              className="text-gray-600 hidden lg:block"
                              size={18}
                            />
                          </button>

                          {/* mobile responsive part  */}
                          <div className="lg:hidden">
                            <div className="flex gap-3 items-start">
                              <Link
                                className="flex-shrink-0"
                                href={`/products/${detail?.product?.slug}`}
                              >
                                <Image
                                  src={detail?.product?.variant[0]?.imageUrl[0]}
                                  alt="cart"
                                  width={90}
                                  height={80}
                                  className="rounded-md w-[64px] h-[90px]"
                                />
                              </Link>
                              <div className="font-semibold text-sm">
                                <Link
                                  href={`/products/${detail?.product?.slug}`}
                                  className="text-gray-700"
                                >
                                  {detail?.product?.productName}
                                </Link>
                                <div>
                                  <p className="text-gray-600">
                                    <span className="font-semibold">
                                      Color:
                                    </span>{" "}
                                    {detail?.color}
                                  </p>
                                  <p className="text-gray-600">
                                    <span className="font-semibold">Size:</span>{" "}
                                    {detail?.size}
                                  </p>
                                  <p className="text-gray-600">
                                    <span className="font-semibold">
                                      Quantity:
                                    </span>{" "}
                                    {detail?.quantity}
                                  </p>
                                  <p className="text-gray-700 text-sm font-semibold">
                                    <span className="font-semibold">
                                      Price:
                                    </span>{" "}
                                    ৳
                                    {detail?.product?.category?.promotion
                                      ? calculateSalePrice(
                                          detail?.product?.category?.promotion
                                            ?.validPromotion,
                                          detail?.product?.category?.promotion
                                            ?.discountType,
                                          detail?.product?.regularPrice,
                                          detail?.product?.category?.promotion
                                            ?.discountOff,
                                          detail?.product?.salePrice
                                        ) * detail?.quantity
                                      : calculateSalePrice(
                                          detail?.product?.subCategory
                                            ?.promotion?.validPromotion,
                                          detail?.product?.subCategory
                                            ?.promotion?.discountType,
                                          detail?.product?.regularPrice,
                                          detail?.product?.subCategory
                                            ?.promotion?.discountOff,
                                          detail?.product?.salePrice
                                        ) * detail?.quantity}
                                    /-
                                  </p>
                                </div>
                              </div>
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
                            </div>
                            <div className="flex items-center justify-between gap-2 mt-3">
                              <div className="flex lg:flex-col gap-1">
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
                                        detail?.quantity >=
                                        detail?.product?.stock
                                          ? "cursor-not-allowed"
                                          : "cursor-pointer"
                                      }`}
                                      disabled={
                                        detail?.quantity >=
                                        detail?.product?.stock
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
                                  className="bg-primary-color text-white px-2 py-1 text-xs rounded-md hover:bg-primary-hover-color transition-colors duration-500 disabled:cursor-not-allowed"
                                >
                                  Add Measurement
                                </button>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <NoProductFound text={"No item found in your cart"} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:flex-1 shadow-md rounded-md px-6 pb-6 lg:p-6">
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

          {cartData?.data?.length > 0 ? (
            <div className="w-full">
              <Link className="flex justify-center" href={"/shop/checkout"}>
                <ButtonOnHoverFullWidth text={"Proceed To Checkout"} />
              </Link>
            </div>
          ) : (
            <div
              className="w-full"
              onClick={() =>
                toast.error("Please add some products to continue!")
              }
            >
              <ButtonOnHoverFullWidth text={"Proceed To Checkout"} />
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default CartContent;
