import CheckoutMainPage from "@/components/Checkout/MainPage";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/paymentNav/Navigation";
import { Suspense } from "react";
import { FaBagShopping, FaCartShopping } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { BeatLoader } from "react-spinners";

const CheckoutPage = () => {
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
        <Suspense
          fallback={
            <div className="w-full h-[40vh] flex justify-center items-center">
              <BeatLoader color="#820000" />
            </div>
          }
        >
          <CheckoutMainPage />
        </Suspense>
      </section>
    </main>
  );
};

export default CheckoutPage;
