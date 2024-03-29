"use server";

export const handleContact = async (formData) => {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };
  const url = `${process.env.API_URL}/api/v1/contact`;

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
        message: `Successfully received your message. We contact with you ASAP!`,
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
