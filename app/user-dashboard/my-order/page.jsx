// import NoProductFound from "@/components/NoProductFound";
import DashboardUtil from "@/components/user-dashboard/DashboardUtil";
import MyOrder from "@/components/user-dashboard/MyOrder";
import { fetchDynamicServerSideData } from "@/helpers/DynamicServerSideDataFetching";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const MyOrders = async () => {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  if (userData) {
    const data = JSON.parse(userData?.value);
    if (data) {
      const url = `${process.env.API_URL}/api/v1/order/user/${data._id}`;
      const orderData = await fetchDynamicServerSideData(url);
      console.log(orderData.data);
      if (orderData) {
        if (orderData.success) {
          return (
            <>
              <div className="main-container my-10 flex flex-col gap-y-4">
                <h2 className="text-xl font-semibold">
                  Hello, {data.fullName}
                </h2>
                <DashboardUtil />
                {orderData?.data?.length > 0 ? (
                  <MyOrder orderData={orderData.data} />
                ) : (
                  <>
                    <p className="text-gray-800 font-semibold text-center my-24">
                      No Order Found🥹
                    </p>
                  </>
                )}
              </div>
            </>
          );
        }
      }
    }
  } else {
    return redirect("/user-authentication");
  }
};

export default MyOrders;
