import NavResponsive from "./NavResponsive";
export const revalidate = 360;

async function getNavLinkData() {
  const res = await fetch(`${process.env.API_URL}/api/v1/category/nav-data`, {
    headers: {
      authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
    },
  });
  return await res.json();
}

async function getAdvertisementData() {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/nav-advertise/category`,
    {
      headers: {
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
    }
  );
  return await res.json();
}

export default async function MainNavbar() {
  const linkPromise = getNavLinkData();
  const advertisementPromise = getAdvertisementData();

  const [links, advertisements] = await Promise.all([
    linkPromise,
    advertisementPromise,
  ]);

  // console.log(links, advertisements);

  return (
    <div className="relative">
      <div className="fixed top-0 z-50 shadow-xl w-full">
        <NavResponsive sales={links} advertisements={advertisements} />
      </div>
    </div>
  );
}
