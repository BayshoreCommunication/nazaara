import { Loader } from "@/components/Loader";
import TopBar from "@/components/TopBar";
import MyOrderDetails from "@/components/user-dashboard/MyOrderDetails";
import { fetchDynamicServerSideData } from "@/helpers/dynamicServerSideDataFetching";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IoBag } from "react-icons/io5";

const MyOrdersDetailsPage = async ({ params }) => {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  if (userData) {
    const data = JSON.parse(userData?.value);
    if (data) {
      const url = `${process.env.API_URL}/api/v1/order/${params.id}`;
      const orderData = await fetchDynamicServerSideData(url);
      if (orderData) {
        if (orderData.success) {
          return (
            <main>
              <TopBar
                title={"Order Details"}
                icon={<IoBag className="mb-1" size={20} />}
              />
              <div className="main-container mb-10 mt-6 flex flex-col gap-y-4">
                <MyOrderDetails orderData={orderData.data} />
              </div>
            </main>
          );
        }
      } else {
        return <Loader height={"h-[50vh]"} />;
      }
    }
  } else {
    return redirect("/user-authentication");
  }
};

export default MyOrdersDetailsPage;
