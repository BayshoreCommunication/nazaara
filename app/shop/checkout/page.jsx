import CheckoutContent from "@/components/Checkout/page";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/paymentNav/Navigation";
import { fetchDynamicServerSideData } from "@/helpers/DynamicServerSideDataFetching";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FaBagShopping, FaCartShopping } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";

//define fetch user data from cookies function
async function getUserData() {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  // console.log("user data", userData);
  if (userData) {
    const data = JSON.parse(userData?.value);
    const user = await fetchServerSideData(
      `${process.env.API_URL}/api/v1/user/${data?._id}`
    );
    return user;
  }
  return redirect("/user-authentication");
}

const CheckoutPage = async () => {
  const userData = await getUserData(); //call fetch user data function

  //   console.log("user data", userData);

  //fetch cart data using user id
  const cartData = await fetchDynamicServerSideData(
    `${process.env.API_URL}/api/v1/cart/user/${userData?.data?._id}`
  );

  //fetch all country data
  const countryData = await fetchServerSideData(
    `https://restcountries.com/v2/all`
  );
  const countryName = countryData.map((data) => data?.name) || [
    "Bangladesh",
    "India",
    "Pakistan",
  ]; //extract all the country name

  const fetchCouponData = async (url) => {
    "use server";
    const res = await fetch(url, {
      next: { revalidate: 0 },
    });
    return res.json();
  };

  return (
    <main>
      <TopBar
        title={"Checkout"}
        icon={
          <span className="mb-1.5">
            <IoBagHandle size={24} />
          </span>
        }
      />
      <Navigation
        link2Title={"Cart"}
        link2Icon={<FaCartShopping />}
        link2Href={"/shop/cart"}
        link3Title={"Checkout"}
        link3Icon={
          <span className="mb-0.5">
            <FaBagShopping />
          </span>
        }
      />
      <section className="main-container py-6">
        <CheckoutContent
          userData={userData?.data}
          cartData={cartData?.data}
          countryName={countryName}
          fetchCouponData={fetchCouponData}
        />
      </section>
    </main>
  );
};

export default CheckoutPage;
