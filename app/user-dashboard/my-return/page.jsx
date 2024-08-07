// import NoProductFound from "@/components/NoProductFound";

import DashboardUtil from "@/components/user-dashboard/DashboardUtil";
import MyReturn from "@/components/user-dashboard/MyReturn";
import { fetchDynamicServerSideData } from "@/helpers/dynamicServerSideDataFetching";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const MyReturns = async () => {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  if (userData) {
    const data = JSON.parse(userData?.value);
    if (data) {
      const url = `${process.env.API_URL}/api/v1/return-exchange/user/${data._id}`;
      const returnData = await fetchDynamicServerSideData(url);
      // console.log(returnData.data);
      if (returnData) {
        if ((returnData.status = "success")) {
          return (
            <>
              <div className="main-container mb-10 mt-20 lg:mt-28 flex flex-col gap-y-4">
                <h2 className="text-xl font-semibold text-primary-color uppercase">
                  Hello, {data?.fullName}
                </h2>
                <DashboardUtil />
                {returnData?.data?.length > 0 ? (
                  <MyReturn returnData={returnData.data} />
                ) : (
                  <>
                    <p className="text-gray-800 font-semibold text-center my-24">
                      No Return Order Found
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

export default MyReturns;
