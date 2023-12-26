import { cookies } from "next/headers";
import { fetchDynamicServerSideData } from "./DynamicServerSideDataFetching";
import { redirect } from "next/navigation";

export const GetAuthenticateUserData = async () => {
  //   "use server";
  const cookieData = cookies();
  const userCookieData = cookieData.get("userAuthCredential");
  if (userCookieData) {
    const data = JSON.parse(userCookieData?.value);
    const url = `${process.env.API_URL}/api/v1/user/${data._id}`;
    const userData = await fetchDynamicServerSideData(url);
    return userData;
  } else {
    return redirect("/user-authentication");
  }
};
