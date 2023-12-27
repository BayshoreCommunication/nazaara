"use server";

import { revalidatePath } from "next/cache";

export const handleUpdateUserInfo = async (formData, userId) => {
  const data = {
    fullName: formData.get("fullName"),
    gender: formData.get("gender"),
    phone: formData.get("phone"),
    // imageUrl: formData.get("imageUrl"),
  };
  const url = `${process.env.API_URL}/api/v1/user/${userId}`;

  // console.log("data ,,,", data);

  try {
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      revalidatePath("/user-dashboard");
      return {
        message: `Successfully Update User Information!`,
      };
    } else {
      throw new Error("Contact form submission failed.");
    }
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
