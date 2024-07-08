"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavResponsive from "./NavResponsive";
import NavBarLoading from "../NavBarLoading";

async function getNavLinkData() {
  const res = await axios.get(
    `${process.env.API_URL}/api/v1/category/nav-data`,
    {
      headers: {
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
    }
  );
  return res.data;
}

async function getAdvertisementData() {
  const res = await axios.get(
    `${process.env.API_URL}/api/v1/nav-advertise/category`,
    {
      headers: {
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
    }
  );
  return await res.data;
}

export default function MainNavbar() {
  const [links, setLinks] = useState(null);
  const [advertisements, setAdvertisements] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [linkData, advertisementData] = await Promise.all([
          getNavLinkData(),
          getAdvertisementData(),
        ]);
        setLinks(linkData);
        setAdvertisements(advertisementData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <NavBarLoading />;
  if (error) return <NavBarLoading />;

  return (
    <div className="relative">
      <div className="fixed top-0 z-50 shadow-xl w-full">
        {links && advertisements ? (
          <NavResponsive sales={links} advertisements={advertisements} />
        ) : (
          <NavBarLoading />
        )}
      </div>
    </div>
  );
}
