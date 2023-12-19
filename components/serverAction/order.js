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
      zip: formData.get("zip"),
      details: formData.get("details"),
    },
    product: others.product,
    subTotal: others.subTotal,
    vatIncluded: others.vatIncluded,
    coupon: others.coupon,
    shippingCharge: others.shippingCharge,
    totalAmount: others.totalAmount,
    totalPay: others.totalPay,
    advancePay: others.advancePay,
    due: others.due,
    user: others.user,
    paymentStatus: others.paymentStatus,
    deliveryStatus: others.deliveryStatus,
  };
  const url = `${process.env.API_URL}/api/v1/order`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log("response", response);
    // console.log("data", data);

    if (response.ok) {
      return {
        message: `Successfully placed your order. We contact with you ASAP!`,
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
