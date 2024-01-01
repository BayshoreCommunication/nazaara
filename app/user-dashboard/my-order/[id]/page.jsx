import MyOrderDetails from "@/components/user-dashboard/MyOrderDetails";
import { fetchDynamicServerSideData } from "@/helpers/DynamicServerSideDataFetching";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const MyOrdersDetailsPage = async ({ params }) => {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  if (userData) {
    const data = JSON.parse(userData?.value);
    if (data) {
      const url = `${process.env.API_URL}/api/v1/order/${params.id}`;
      const orderData = await fetchDynamicServerSideData(url);
      console.log(orderData.data);
      if (orderData) {
        if (orderData.success) {
          return (
            <>
              <div className="main-container my-10 flex flex-col gap-y-4">
                <h2 className="text-xl font-semibold text-center uppercase">
                  HELLO, {data.fullName}
                </h2>
                <MyOrderDetails orderData={orderData.data} />
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

export default MyOrdersDetailsPage;
