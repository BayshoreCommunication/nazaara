"use server";

export const sizeCharthandleContact = async (formData, searchParams) => {
  const data = {
    topType: formData.get("topsRadio"),
    bottomType: formData.get("bottomRadio"),
    tops: {
      chest: formData.get("tChest"),
      waist: formData.get("tWaist"),
      hip: formData.get("tHip"),
      end: formData.get("tEnd"),
      shoulder: formData.get("tShoulder"),
      armHole: formData.get("tArmHole"),
      sleeveLength: formData.get("tSleeve"),
      muscle: formData.get("tMuscle"),
      handOpening: formData.get("tHandOpening"),
      length: formData.get("tLength"),
      slit: formData.get("tSlit"),
      neckDeepf: formData.get("tNeckF"),
      neckDeepb: formData.get("tNeckB"),
      halfBody: formData.get("tHalfBody"),
    },
    bottom: {
      length: formData.get("bLength"),
      waist: formData.get("bWaist"),
      hip: formData.get("bHip"),
      thigh: formData.get("bThigh"),
      knee: formData.get("bKnee"),
      legOpening: formData.get("bLegOpening"),
    },
    note: formData.get("note"),
    cart: searchParams.cartId,
    user: searchParams.userId,
  };

  const url = `${process.env.API_URL}/api/v1/size-chart`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
    });

    if (response.ok) {
      return {
        message: `Successfully saved your size!`,
        // success: true,
      };
    } else {
      throw new Error(`Size chart already exists for this cart!`);
    }
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
