"use client";
import React from "react";
import messenger from "@/public/images/messenger.png";
import Image from "next/image";

const MessengerRedirect = () => {
  const handleMessengerClick = () => {
    const username = "nazaara.official"; // Replace with the desired Facebook username
    const messengerUrl = `https://m.me/${username}`;
    window.open(messengerUrl, "_blank");
  };
  return (
    <button
      onClick={handleMessengerClick}
      className="fixed bottom-5 right-16"
      style={{ zIndex: 1000 }}
    >
      {/* <BsMessenger color="blue" size={30} /> */}
      <Image src={messenger} alt="messenger" className="w-10 h-10" />
    </button>
  );
};

export default MessengerRedirect;
