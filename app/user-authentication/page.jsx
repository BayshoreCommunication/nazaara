"use client";
import SignIn from "@/components/authentication/SignIn";
import SignUp from "@/components/authentication/SignUp";
import React, { useState } from "react";

const page = () => {
  const [auth, setAuth] = useState("signIn");

  return (
    <div className="container">
      {auth === "signIn" && <SignIn setAuth={setAuth} />}
      {auth === "signUp" && <SignUp setAuth={setAuth} />}
    </div>
  );
};

export default page;
