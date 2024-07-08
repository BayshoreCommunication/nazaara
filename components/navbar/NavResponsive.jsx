"use client";
import useMediaQuery from "@/customhooks/useMediaQuery";
import React, { Suspense } from "react";
import NavBarLoading from "../NavBarLoading";
import NavBarContent from "./pcNav/NavBarContent";
import MobileNavContent from "./mobileNav/MobileNavContent";

const NavResponsive = ({ sales, advertisements }) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
      {isMobile ? (
        <Suspense fallback={<NavBarLoading />}>
          <MobileNavContent sales={sales} />
        </Suspense>
      ) : (
        <Suspense fallback={<NavBarLoading />}>
          <NavBarContent sales={sales} advertisements={advertisements} />
        </Suspense>
      )}
    </div>
  );
};

export default NavResponsive;
