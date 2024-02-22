"use client";
import { calculateSalePrice } from "@/helpers/CalculateSalePrice";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BeatLoader } from "react-spinners";
import Swal from "sweetalert2";
import { handleOrder } from "../serverAction/order";
import Link from "next/link";
import { useGetCartByUserIdQuery } from "@/services/cartApi";

const CheckoutContent = ({
  userData,
  // cartData,
  countryName,
  fetchCouponData,
}) => {
  const [couponCode, setCouponCode] = useState("");
  const [couponAmount, setCouponAmount] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const [couponId, setCouponId] = useState(null);
  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const [isPromotionAvailable, setIsPromotionAvailable] = useState(false);
  const [addressIndex, setAddressIndex] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("inside-dhaka");
  const [paymentMethod, setPaymentMethod] = useState("partial-payment");
  const [isLoading, setIsLoading] = useState(false);
  const [isUserAgree, setIsUserAgree] = useState(false);
  const [userNotAgreed, setUserNotAgreed] = useState(true);
  const [subTotal, setSubTotal] = useState(0);
  const [vatIncluded, setVatIncluded] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [payAmount, setPayAmount] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);

  const { data, isLoading: isCartDataLoading } = useGetCartByUserIdQuery(
    `${userData._id}`
  );

  const cartData = data?.data;

  // console.log("cart data", cartData);
  console.log("user data", userData);

  useEffect(() => {
    if (cartData) {
      const isFreeShippingData = cartData.map(
        (cart) =>
          (cart?.product?.category?.promotion?.freeShipping &&
            cart?.product?.category?.promotion?.validPromotion) ||
          (cart?.product?.subCategory?.promotion?.freeShipping &&
            cart?.product?.subCategory?.promotion?.validPromotion)
      );
      // console.log("is free", isFreeShippingData);
      const hasFreeShipping = isFreeShippingData.some(
        (value) => value === true
      );
      // console.log("hasFreeShipping", hasFreeShipping);
      const isPromotion = cartData.map(
        (cart) =>
          cart?.product?.category?.promotion?.validPromotion ||
          cart?.product?.subCategory?.promotion?.validPromotion
      );
      const hasPromotion = isPromotion.some((value) => value === true);

      // Set the state based on the condition
      setIsFreeShipping(hasFreeShipping);
      setIsPromotionAvailable(hasPromotion);
    }
  }, [cartData]);

  const cartId = cartData?.map((data) => data._id);

  const handleClick = (index, event) => {
    event.preventDefault();
    setAddressIndex(index);
  };

  useEffect(() => {
    const calculateSalePriceFunc = () => {
      if (cartData) {
        let updatedSalePrice = 0;
        // console.log("updatedSalePrice", updatedSalePrice);
        cartData.map((detail) => {
          if (detail?.product?.category?.promotion) {
            updatedSalePrice +=
              calculateSalePrice(
                detail?.product?.category?.promotion?.validPromotion,
                detail?.product?.category?.promotion?.discountType,
                detail?.product?.regularPrice,
                detail?.product?.category?.promotion?.discountOff,
                detail?.product?.salePrice
              ) * detail?.quantity;
          } else {
            updatedSalePrice +=
              calculateSalePrice(
                detail?.product?.subCategory?.promotion?.validPromotion,
                detail?.product?.subCategory?.promotion?.discountType,
                detail?.product?.regularPrice,
                detail?.product?.subCategory?.promotion?.discountOff,
                detail?.product?.salePrice
              ) * detail?.quantity;
          }
        });
        return updatedSalePrice;
      }
    };

    const price = calculateSalePriceFunc();
    // console.log("price", price);
    setSubTotal(price);

    //calculate vat
    setVatIncluded(Number((subTotal * 0.07).toFixed(2)));

    if (isFreeShipping) {
      setTotalAmount(subTotal - couponAmount);
    } else if (shippingMethod === "inside-dhaka" && !isFreeShipping) {
      setTotalAmount(subTotal + 100 - couponAmount);
    } else if (shippingMethod === "outside-dhaka" && !isFreeShipping) {
      setTotalAmount(subTotal + 250 - couponAmount);
    } else if (shippingMethod === "shop-pickup" || !isFreeShipping) {
      setTotalAmount(subTotal - couponAmount);
    }
  }, [cartData, couponAmount, isFreeShipping, shippingMethod, subTotal]);

  useEffect(() => {
    // let payAmout = 0;
    if (paymentMethod === "partial-payment") {
      setPayAmount((totalAmount * 20) / 100);
    } else {
      setPayAmount(totalAmount);
    }
    // let dueAmout = 0;
    if (paymentMethod === "partial-payment") {
      setDueAmount(totalAmount - (totalAmount * 20) / 100);
    } else {
      setDueAmount(0);
    }

    if (isFreeShipping) {
      // shippingCharge = 0;
      setShippingCharge(0);
    } else if (shippingMethod === "inside-dhaka" && !isFreeShipping) {
      // shippingCharge = 100;
      setShippingCharge(100);
    } else if (shippingMethod === "outside-dhaka" && !isFreeShipping) {
      // shippingCharge = 250;
      setShippingCharge(250);
    } else if (shippingMethod === "shop-pickup" || !isFreeShipping) {
      // shippingCharge = 0;
      setShippingCharge(0);
    }
  }, [isFreeShipping, paymentMethod, shippingMethod, totalAmount]);

  //extract cart data into an array of object
  const productData =
    cartData &&
    cartData.map((item) => ({
      productDetails: item.product._id,
      title: item.product.productName,
      sku: item.product.sku,
      slug: item.product.slug,
      // imgUrl: item.product.variant[0].imageUrl[0],
      imgUrl:
        item.product.variant
          .flatMap((v) => v.imageUrl)
          .find((image) => image.isFeatured)?.image ||
        item.product.variant[0].imageUrl[0].image,
      quantity: item.quantity,
      color: item.color,
      size: item.size,
      sizeChart: item.sizeChart,
      salePrice: item.product.salePrice,
      stock: item.product.stock,
      preOrder: item.product.preOrder,
      offeredPrice: calculateSalePrice(
        item?.product?.category?.promotion?.validPromotion,
        item?.product?.category?.promotion?.discountType,
        item?.product?.regularPrice,
        item?.product?.category?.promotion?.discountOff,
        item?.product?.salePrice
      ),
    }));

  //handle the coupon
  const handleCoupon = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log("Coupon Code:", couponCode);
    if (!couponCode) {
      toast.error("Enter a valid coupon code to get offer");
      setIsLoading(false);
    } else {
      const couponData = await fetchCouponData(
        `${process.env.API_URL}/api/v1/coupon/code/${couponCode}`
      );

      // console.log("coupon data", couponData);

      if (couponData) {
        if (couponData?.data?.freeShipping) {
          setIsFreeShipping(true);
        }

        // console.log("coupon dataatatata", couponData);
        if (isPromotionAvailable) {
          setIsLoading(false);
          toast.error(
            "Coupon can't be applied as promotion already available!"
          );
        } else if (
          couponData?.success &&
          couponData?.data?.valid &&
          couponData?.data?.minimumPurchaseAmount <= subTotal
        ) {
          if (
            couponData?.data?.valid &&
            couponData?.data?.discountType === "amount"
          ) {
            if (couponAmount > 0) {
              setIsLoading(false);
              toast.error("Coupon already applied");
            } else {
              setCouponAmount(couponData?.data?.discountOff);
              setIsLoading(false);
              toast.success("Coupon applied successfully");
              // validCouponId = couponData.data._id;
              setCouponId(couponData?.data?._id);
            }
          } else if (
            couponData?.data?.valid &&
            couponData?.data?.discountType === "percentage"
          ) {
            const discountOff = couponData?.data?.discountOff;
            const calculateCurrentSubtotal = (discountOff * subTotal) / 100;

            if (couponAmount > 0) {
              setIsLoading(false);
              toast.error("Coupon already applied");
            } else {
              setCouponAmount(calculateCurrentSubtotal);
              setIsLoading(false);
              toast.success("Coupon applied successfully");
              // validCouponId = couponData.data._id;
              setCouponId(couponData?.data?._id);
            }
          }
        } else if (couponData?.data?.minimumPurchaseAmount > subTotal) {
          setIsLoading(false);
          toast.error(
            `Minimum purchase amount ${couponData?.data?.minimumPurchaseAmount}/-`
          );
        } else if (couponData?.success && !couponData?.data?.valid) {
          setIsLoading(false);
          toast.error("Coupon is expired!");
        } else if (!couponData.success) {
          setIsLoading(false);
          toast.error("Coupon code not valid!");
        } else {
          setIsLoading(false);
          toast.error("Something went wrong!");
        }
      }
    }
  };

  //make a object others to send data in server action
  const others = {
    subTotal: subTotal,
    vatIncluded: vatIncluded,
    coupon: couponId,
    shippingCharge: shippingCharge,
    totalAmount: totalAmount,
    discountAmount: couponAmount,
    totalPay: 0,
    advancePay: payAmount,
    due: dueAmount,
    user: userData._id,
    product: productData,
    paymentStatus: "pending",
    deliveryStatus: "pending",
    cartId,
  };

  // console.log("others", others);

  //server action for create form data
  async function clientAction(formData) {
    // console.log("form data", formData);
    if (!isUserAgree) {
      setUserNotAgreed(false);
    } else {
      const swal = await Swal.fire({
        title: "Please confirm your order",
        text: "You won't be able to revert this!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#880202",
        confirmButtonText: "Yes, confirm it!",
      });
      if (swal.isConfirmed) {
        const result = await handleOrder(formData, others);
        // console.log("result", result);
        if (result.error) {
          toast.error(result.error, { duration: 4000 });
        } else {
          // console.log("result", result);
          redirect(result.res.url);
        }
      }
    }
  }

  // console.log("data others", others);

  return (
    <form action={clientAction} className="flex flex-col lg:flex-row">
      <div className="flex-1 border-e pr-10">
        <div>
          <div className="w-full flex flex-col gap-y-4 lg:gap-y-8">
            <div className="w-full flex flex-col gap-y-3">
              <p className="text-lg font-semibold text-gray-700">
                CONTACT INFORMATION
              </p>
              <input
                className="appearance-none block w-full text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-not-allowed text-sm"
                type="email"
                name="email"
                required
                value={userData?.email}
                readOnly
                placeholder="Enter Your Email"
              />
            </div>

            <div className="w-full flex flex-col gap-y-3">
              <p className="text-lg font-semibold text-gray-700">
                SHIPPING INFORMATION
              </p>
              <div className="flex gap-2">
                {userData?.addressBook.map((elem, index) => {
                  if (index === addressIndex) {
                    return (
                      <button
                        className="border text-white rounded-md px-2 py-1 bg-primary-color text-xs font-medium"
                        key={index}
                        type="button"
                        onClick={(event) => handleClick(index, event)}
                      >
                        {elem.addressType}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        className="border rounded-md px-2 py-1 bg-gray-300 text-xs font-medium"
                        key={index}
                        type="button"
                        onClick={(event) => handleClick(index, event)}
                      >
                        {elem.addressType}
                      </button>
                    );
                  }
                })}
              </div>
              <div>
                <label
                  htmlFor="fullName"
                  className="text-gray-700 text-sm font-semibold"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  defaultValue={userData?.addressBook[addressIndex]?.fullName}
                  placeholder="Enter Full Name"
                />
              </div>

              <div>
                <label
                  htmlFor="street"
                  className="text-gray-700 text-sm font-semibold"
                >
                  Street <span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  type="text"
                  name="street"
                  id="street"
                  required
                  defaultValue={userData?.addressBook[addressIndex]?.street}
                  placeholder="Enter Apartment, suite, etc."
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="city"
                    className="text-gray-700 text-sm font-semibold"
                  >
                    City <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                    type="text"
                    name="city"
                    id="city"
                    required
                    defaultValue={userData?.addressBook[addressIndex]?.city}
                    placeholder="Enter Your City"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="zip"
                    className="text-gray-700 text-sm font-semibold"
                  >
                    Postal Code <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                    type="text"
                    name="zip"
                    id="zip"
                    required
                    defaultValue={
                      userData?.addressBook[addressIndex]?.postalCode
                    }
                    placeholder="Enter City Postal Code"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="country"
                    className="text-gray-700 text-sm font-semibold"
                  >
                    Country <span className="text-red-600">*</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      className="w-full appearance-none border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="country"
                      name="country"
                      required
                      defaultValue={
                        userData?.addressBook.length > 0
                          ? userData?.addressBook[addressIndex]?.country
                          : "Bangladesh"
                      }
                    >
                      <option value="" disabled>
                        Select A Country
                      </option>
                      {countryName.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="text-gray-700 text-sm font-semibold"
                  >
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="phone"
                    id="phone"
                    required
                    defaultValue={userData?.addressBook[addressIndex]?.phone}
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="details"
                  className="text-gray-700 text-sm font-semibold"
                >
                  Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter details about location"
                  className="w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  name="details"
                  id="details"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-3">
              <div className="flex justify-between">
                <p className="text-lg font-semibold text-gray-700">
                  SHIPPING METHOD
                </p>
              </div>
              <div>
                <div className="relative">
                  <select
                    name="shipping"
                    required
                    className="block appearance-none w-full border border-gray-300 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                    onChange={(e) => setShippingMethod(e.target.value)}
                  >
                    <option disabled>Select Shipping Method</option>
                    <option value="inside-dhaka">Inside Dhaka</option>
                    <option value="outside-dhaka">Outside Dhaka</option>
                    <option value="shop-pickup">Shop pickup</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {shippingMethod === "inside-dhaka" && (
                  <span className="text-green-500 text-xs">
                    *Delivary inside dhaka will charge ৳100/- only
                  </span>
                )}
                {shippingMethod === "outside-dhaka" && (
                  <span className="text-green-500 text-xs">
                    *Delivary outside dhaka will charge ৳250/- only
                  </span>
                )}
                {shippingMethod === "shop-pickup" && (
                  <span className="text-green-500 text-xs">
                    *No delivary charge applied
                  </span>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-3">
              <div className="flex justify-between">
                <p className="text-lg font-semibold text-gray-700">PAYMENT</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div
                  onClick={(e) => setPaymentMethod(e.target.value)}
                  className="flex flex-1 items-center pl-4 border border-gray-200 rounded"
                >
                  <input
                    type="radio"
                    id="credit"
                    required
                    name="payment"
                    value="partial-payment"
                    defaultChecked={true}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
                  />
                  <label
                    htmlFor="credit"
                    className="w-full py-4 ml-2 text-xs font-medium text-gray-800 cursor-pointer"
                  >
                    CASH ON DELIVERY(ADVANCED PAYMENT 20%)
                  </label>
                </div>
                <div
                  onClick={(e) => setPaymentMethod(e.target.value)}
                  className="flex flex-1 items-center pl-4 border border-gray-200 rounded cursor-pointer"
                >
                  <input
                    type="radio"
                    id="debit"
                    required
                    name="payment"
                    value="full-payment"
                    // defaultChecked={paymentMethod === "full-payment"}
                    className="w-4 h-4 text-primary-color bg-gray-100 border-gray-300 cursor-pointer"
                  />
                  <label
                    htmlFor="debit"
                    className="w-full py-4 ml-2 text-xs font-medium text-gray-800 cursor-pointer"
                  >
                    DEBIT/CREDIT CARDS AND MOBILE BANKING
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-6 lg:mt-0 lg:ml-10">
        <div className="w-full xl:payment-container-end text-sm mt-6">
          {cartData && !isCartDataLoading ? (
            <>
              {cartData?.map((data, index) => {
                return (
                  <div
                    className="flex justify-between items-center pb-4 border-b mb-4"
                    key={index}
                  >
                    <div className="flex gap-4 items-center relative">
                      <Image
                        // src={`${data?.product?.variant[0]?.imageUrl[0]}`}
                        src={
                          data?.product?.variant
                            .flatMap((v) => v.imageUrl)
                            .find((image) => image.isFeatured)?.image ||
                          data?.product?.variant[0].imageUrl[0].image
                        }
                        alt="bridal_top"
                        width={60}
                        height={40}
                        className="w-[5rem] h-[5.7rem] border-2 border-secondary-color rounded-sm"
                      />
                      <div className="flex justify-center items-center bg-white border-2 border-secondary-color rounded-full w-5 h-5 absolute -top-[6px] left-[66px]">
                        <p className="text-primary-color text-xs font-semibold">
                          {data?.quantity}
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-gray-700">
                          {data?.product?.productName}
                        </p>
                        <p className="text-sm text-gray-700">
                          Size: {data?.size}
                        </p>
                        <p className="text-sm text-gray-700">
                          Price: ৳
                          {data?.product?.category?.promotion
                            ? calculateSalePrice(
                                data?.product?.category?.promotion
                                  ?.validPromotion,
                                data?.product?.category?.promotion
                                  ?.discountType,
                                data?.product?.regularPrice,
                                data?.product?.category?.promotion?.discountOff,
                                data?.product?.salePrice
                              ) * data?.quantity
                            : calculateSalePrice(
                                data?.product?.subCategory?.promotion
                                  ?.validPromotion,
                                data?.product?.subCategory?.promotion
                                  ?.discountType,
                                data?.product?.regularPrice,
                                data?.product?.subCategory?.promotion
                                  ?.discountOff,
                                data?.product?.salePrice
                              ) * data?.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className="w-full h-[20vh] flex justify-center items-center">
                <BeatLoader color="#820000" size={10} />
              </div>
            </>
          )}

          <div className="border-b pb-4">
            <div className="flex gap-2 items-center w-full">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                name="coupon"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="focus:outline-none border border-gray-400 p-2 text-gray-600 text-sm rounded-md w-full"
              />
              <button
                onClick={(e) => handleCoupon(e)}
                className="w-max flex gap-1 items-center bg-primary-color text-white px-4 py-2 text-sm rounded-md hover:bg-primary-hover-color transition-colors duration-500"
              >
                {isLoading ? (
                  <>
                    APPLING
                    <BeatLoader color="#fff" size={6} />
                  </>
                ) : (
                  "APPLY"
                )}
              </button>
            </div>
          </div>

          <p className="text-lg font-semibold text-gray-700 mb-3 mt-6">
            ORDER SUMMERY
          </p>

          <div className="border-b pb-7 text-gray-700 font-medium">
            <div className="flex justify-between items-center mb-3">
              <p>Sub-Total</p>
              <p>৳ {subTotal}/-</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p>Vat Included</p>
              <p>৳ {vatIncluded}/-</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p>Discount Amount</p>
              <p>৳ {couponAmount}/-</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping</p>
              {/* {shippingMethod === "inside-dhaka" && <p>৳ 100/-</p>}
              {shippingMethod === "outside-dhaka" && <p>৳ 250/-</p>}
              {shippingMethod === "shop-pickup" && <p>৳ 0/-</p>} */}
              <p>৳ {shippingCharge}/-</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-6 text-gray-700 font-medium">
              <p>Total Amount</p>
              <p>৳ {totalAmount}/-</p>
            </div>
            <div className="flex justify-between items-center mt-3 text-gray-700 font-medium">
              <p>Payable Amount</p>
              {paymentMethod === "partial-payment" && (
                <p>৳ {(totalAmount * 20) / 100}/-</p>
              )}
              {paymentMethod === "full-payment" && <p>৳ {totalAmount}/-</p>}
            </div>
            <div className="flex justify-between items-center mt-3 text-gray-700 font-medium border-b pb-6">
              <p>Due Amount</p>
              {paymentMethod === "partial-payment" && (
                <p>৳ {totalAmount - (totalAmount * 20) / 100}/-</p>
              )}
              {paymentMethod === "full-payment" && <p>৳ 0/-</p>}
            </div>
          </div>
        </div>
        <div className="w-full xl:payment-container-end mt-6">
          <div
            // onClick={(e) => setPaymentMethod(e.target.value)}
            className="flex items-center"
          >
            <input
              type="checkbox"
              id="isUserAgree"
              // required
              name="isUserAgree"
              value={isUserAgree}
              onChange={() => setIsUserAgree(!isUserAgree)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
            />
            <label
              htmlFor="isUserAgree"
              className="w-full ml-2 text-xs font-medium text-gray-700 cursor-pointer"
            >
              {`I HAVE READ AND AGREED TO THE WEBSITE'S`}{" "}
              <Link
                className="text-primary-color font-semibold hover:underline underline-offset-2"
                href={"/terms-of-use"}
              >
                TERMS AND CONDITION
              </Link>{" "}
              ,{" "}
              <Link
                className="text-primary-color font-semibold hover:underline underline-offset-2"
                href={"/privacy-policy"}
              >
                PRIVACY POLICY
              </Link>{" "}
              AND{" "}
              <Link
                className="text-primary-color font-semibold hover:underline underline-offset-2"
                href={"/return-exchange"}
              >
                RETURN POLICIES
              </Link>
            </label>
          </div>
          {!userNotAgreed && !isUserAgree && (
            <small className="text-red-600 text-xs font-medium">
              *please check the checkbox to continue
            </small>
          )}
        </div>
        <div className="flex gap-5 items-center mt-6">
          <div
            // href={`/measurement`}
            // onClick={handleSubmit}
            className="w-full xl:payment-container-end"
          >
            <button
              type="submit"
              className="border-4 border-primary-color hover:border-transparent bg-primary-color text-white px-6 py-1.5 font-medium rounded-md hover:bg-primary-hover-color transition-colors duration-500 w-full flex gap-1 items-center justify-center text-sm"
            >
              <MdShoppingCartCheckout size={20} /> CONFIRM ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutContent;
