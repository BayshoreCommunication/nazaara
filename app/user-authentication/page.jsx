"use client";
import SignIn from "@/components/authentication/SignIn";
import SignUp from "@/components/authentication/SignUp";
import React, { useState } from "react";

const Page = () => {
  const [auth, setAuth] = useState("signIn");

  return (
    <div className="main-container">
      {auth === "signIn" && <SignIn setAuth={setAuth} />}
      {auth === "signUp" && <SignUp setAuth={setAuth} />}
    </div>
  );
};

export default Page;
