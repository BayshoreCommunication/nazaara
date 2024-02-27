import { cookies } from "next/headers";
import ScrollTopButton from "../ScrollToTop";
import { SetCartDataToRedux } from "../SetCartDataToRedux";
import Subscribe from "../Subscribe";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

async function getData() {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  // console.log("user data", userData);
  if (userData) {
    const data = JSON.parse(userData?.value);
    // console.log("data", data);
    const url = `${process.env.API_URL}/api/v1/cart/user/${data._id}`;
    const res = await fetch(url, {
      headers: {
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
}

const Footer = async () => {
  const data = await getData();
  return (
    <>
      <ScrollTopButton />
      <SetCartDataToRedux data={data} />
      <div className="bg-secondary-color">
        <Subscribe />
      </div>
      <footer className="py-10 bg-primary-color">
        {/* for mobile & tab*/}
        <MobileFooter />

        {/* for laptop & desktop */}
        <DesktopFooter />
      </footer>
    </>
  );
};

export default Footer;
