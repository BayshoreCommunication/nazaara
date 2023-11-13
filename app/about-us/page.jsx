import TopBar from "@/components/TopBar";
import AboutUs from "@/components/about-us/AboutUs";
import { BsFillPersonFill } from "react-icons/bs";

const AboutUsPage = async () => {
  return (
    <main>
      <TopBar icon={<BsFillPersonFill />} title={"ABOUT US"} />
      <div className="my-10 main-container">
        <AboutUs />
      </div>
    </main>
  );
};

export default AboutUsPage;
