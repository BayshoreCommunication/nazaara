// "use client";
import React, { Suspense } from "react";
import NavResponsive from "./NavResponsive";
import NavBarLoading from "../NavBarLoading";

async function getNavLinkData() {
  const res = await fetch(`${process.env.API_URL}/api/v1/category/nav-data`, {
    headers: {
      authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
    },
    next: { revalidate: 360 },
  });
  return res.json();
}

async function getAdvertisementData() {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/nav-advertise/category`,
    {
      headers: {
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
      next: { revalidate: 360 },
    }
  );
  return await res.json();
}

export default async function MainNavbar() {
  // const [links, setLinks] = useState(null);
  // const [advertisements, setAdvertisements] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const [linkData, advertisementData] = await Promise.all([
  //         getNavLinkData(),
  //         getAdvertisementData(),
  //       ]);
  //       setLinks(linkData);
  //       setAdvertisements(advertisementData);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // if (loading) return <NavBarLoading />;
  // if (error) return <NavBarLoading />;

  const navLink = getNavLinkData();
  const advertisement = getAdvertisementData();

  const [navLinkData, advertisementData] = await Promise.all([
    navLink,
    advertisement,
  ]);

  return (
    <div className="relative">
      <div className="fixed top-0 z-50 shadow-xl w-full">
        <Suspense fallback={<NavBarLoading />}>
          <NavResponsive
            sales={navLinkData}
            advertisements={advertisementData}
          />
        </Suspense>
      </div>
    </div>
  );
}
