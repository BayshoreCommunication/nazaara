import MyProfile from "@/components/user-dashboard/MyProfile";
import { GetAuthenticateUserData } from "@/helpers/GetAuthenticateUserData";

const userDashboardPage = async () => {
  const userData = await GetAuthenticateUserData();
  if (userData) {
    return <MyProfile userData={userData?.data} />;
  }
};

export default userDashboardPage;
