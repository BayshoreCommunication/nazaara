import MyProfile from "@/components/user-dashboard/MyProfile";
import { GetAuthenticateUserData } from "@/helpers/GetAuthenticateUserData";

const userDashboardPage = async () => {
  const userData = await GetAuthenticateUserData();
  if (userData) {
    return (
      <main className="mt-20 lg:mt-28">
        <MyProfile userData={userData?.data} />
      </main>
    );
  }
};

export default userDashboardPage;
