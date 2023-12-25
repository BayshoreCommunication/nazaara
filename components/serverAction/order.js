"use server";

export const handleOrder = async (formData, others) => {
  const data = {
    paymentMethod: formData.get("payment"),
    shippingMethod: formData.get("shipping"),
    shippingAddress: {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      street: formData.get("street"),
      city: formData.get("city"),
      country: formData.get("country"),
      postalCode: formData.get("zip"),
      details: formData.get("details"),
    },
    product: others.product,
    subTotal: others.subTotal,
    vatIncluded: others.vatIncluded,
    coupon: others.coupon,
    shippingCharge: others.shippingCharge,
    totalAmount: others.totalAmount,
    discountAmount: others.discountAmount,
    totalPay: others.totalPay,
    advancePay: others.advancePay,
    due: others.due,
    user: others.user,
    paymentStatus: others.paymentStatus,
    deliveryStatus: others.deliveryStatus,
    cartId: others.cartId,
  };

  console.log("data from server action", data);
  // const url = `${process.env.API_URL}/api/v1/order`;
  const url = `http://localhost:8000/api/v1/order`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return {
        message: `Successfully placed your order. We contact with you ASAP!`,
        res: await response.json(),
      };
    } else {
      throw new Error("Order placed failed.");
    }
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
