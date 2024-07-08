import NavResponsive from "./NavResponsive";

async function getNavLinkData() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/category/nav-data`, {
      headers: {
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch nav links: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getAdvertisementData() {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/nav-advertise/category`,
      {
        headers: {
          authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch advertisements: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

const MainNavbar = async () => {
  const linkPromise = getNavLinkData();
  const advertisementPromise = getAdvertisementData();

  try {
    const [links, advertisements] = await Promise.all([
      linkPromise,
      advertisementPromise,
    ]);

    return (
      <div className="relative">
        <div className="fixed top-0 z-50 shadow-xl w-full">
          <NavResponsive sales={links} advertisements={advertisements} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading data for MainNavbar:", error);
    return (
      <div className="relative">
        <div className="fixed top-0 z-50 shadow-xl w-full">
          <NavResponsive sales={[]} advertisements={[]} />
        </div>
      </div>
    );
  }
};

export default MainNavbar;
