import HiringData from "@/components/Hiring/HiringData";
import TopBar from "@/components/TopBar";
import { Suspense } from "react";
import { FaUserCircle } from "react-icons/fa";
import Loading from "../loading";

const HiringPage = () => {
  return (
    <main>
      <TopBar icon={<FaUserCircle />} title={"WE ARE HIRING"} />
      <div className="main-container">
        <Suspense fallback={<Loading />}>
          <HiringData />
        </Suspense>
      </div>
    </main>
  );
};

export default HiringPage;
