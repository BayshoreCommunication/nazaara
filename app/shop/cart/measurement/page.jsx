import Navigation from "@/components/paymentNav/Navigation";
import CreateMeasurementForm from "@/components/shop/CreateMeasurementForm";
import { redirect } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Measurement = async ({ searchParams }) => {
  if (Object.keys(searchParams).length > 0) {
    const getData = async () => {
      const response = await fetch(
        `${process.env.API_URL}/api/v1/cart/${searchParams?.cartId}`,
        {
          next: { revalidate: 0 },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = response.json();
      return data;
    };

    const data = await getData();
    // console.log("cart data", data.data.product);
    return (
      <main>
        <Navigation
          link1Title={"Shop"}
          link1Icon={<FaBagShopping />}
          link2Title={"Cart"}
          link2Icon={<FaShoppingCart />}
          link3Title={"Measurement"}
        />
        <div className="main-container flex lg:block flex-col gap-y-6 my-6 lg:my-10">
          <CreateMeasurementForm
            searchParams={searchParams}
            product={data.data.product}
          />
        </div>
      </main>
    );
  } else {
    redirect("/shop/cart");
  }
};

export default Measurement;
