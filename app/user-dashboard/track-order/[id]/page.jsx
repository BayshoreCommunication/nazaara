import TopBar from "@/components/TopBar";
import TrackOrder from "@/components/user-dashboard/TrackOrder";
import { fetchDynamicServerSideData } from "@/helpers/DynamicServerSideDataFetching";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FaTruck } from "react-icons/fa";

const OrderTrackPage = async ({ params }) => {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  if (userData) {
    const data = JSON.parse(userData?.value);
    if (data) {
      const url = `${process.env.API_URL}/api/v1/order/${params.id}`;
      const orderData = await fetchDynamicServerSideData(url);
      //   console.log(orderData.data);
      if (orderData) {
        if (orderData.success) {
          return (
            <main>
              <TopBar title={"Order Track"} icon={<FaTruck />} />
              <div className="main-container my-10 flex flex-col gap-y-4">
                <div>
                  <p className="text-gray-800 font-medium mb-4">
                    ORDER ID: {params.id}
                  </p>
                </div>
                <TrackOrder orderData={orderData.data} />
              </div>
            </main>
          );
        }
      }
    }
  } else {
    return redirect("/user-authentication");
  }
};

export default OrderTrackPage;
