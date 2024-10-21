// components/WhatsAppButton.tsx
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const phoneNumber = "+8801752556120";
  const message = encodeURIComponent(
    "Hi! I have a question about your services."
  ); // Pre-filled message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full flex items-center justify-center"
      style={{ zIndex: 1000 }}
    >
      <BsWhatsapp size={17} />
    </a>
  );
};

export default WhatsAppButton;
