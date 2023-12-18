import CheckoutContent from "@/components/Checkout/page";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/paymentNav/Navigation";
import { fetchDynamicServerSideData } from "@/helpers/DynamicServerSideDataFetching";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import { cookies } from "next/headers";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

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

  return (
    <main>
      <TopBar title={"Checkout"} icon={<MdOutlineShoppingCartCheckout />} />
      <section className="main-container py-10">
        <Navigation />
        <CheckoutContent
          userData={userData?.data}
          cartData={cartData?.data}
          countryName={countryName}
        />
      </section>
    </main>
  );
};

export default CheckoutPage;
