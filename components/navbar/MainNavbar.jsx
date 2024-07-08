import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import NavBarContent from "./NavBarContent";
import { Suspense } from "react";

async function getNavLinkData() {
  const url = `${process.env.API_URL}/api/v1/category/nav-data`;
  return fetchServerSideData(url);
}

async function getAdvertisementData() {
  const url = `${process.env.API_URL}/api/v1/nav-advertise/category`;
  return fetchServerSideData(url);
}

const MainNavbar = async () => {
  const linkPromise = getNavLinkData();
  const advertisementPromise = getAdvertisementData();

  const [links, advertisements] = await Promise.all([
    linkPromise,
    advertisementPromise,
  ]);

  return (
    <div className="relative">
      <div className="fixed top-0 z-50 shadow-xl w-full">
        <Suspense fallback={"loading...."}>
          <NavBarContent sales={links} advertisements={advertisements} />
        </Suspense>
      </div>
    </div>
  );
};

export default MainNavbar;
