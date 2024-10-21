"use client";
import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

const MessengerChat = () => {
  return (
    <MessengerCustomerChat
      pageId="115797558072759" // Replace with your Facebook Page ID
      appId="1153289488711586" // Replace with your Facebook App ID
      //   themeColor="#0084ff" // Optional: Customize the color
      //   loggedInGreeting="Hi! How can we help you?"
      //   loggedOutGreeting="Hi! Please log in to chat with us."
    />
  );
};

export default MessengerChat;
