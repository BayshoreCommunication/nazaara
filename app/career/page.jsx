import HiringData from "@/components/Hiring/HiringData";
import TopBar from "@/components/TopBar";
import { Suspense } from "react";
import { FaUserCircle } from "react-icons/fa";
import Loading from "../loading";

const HiringPage = () => {
  return (
    <main>
      <TopBar icon={<FaUserCircle />} title={"WE ARE HIRING"} />
      <Suspense fallback={<Loading />}>
        <div className="main-container">
          <HiringData />
        </div>
      </Suspense>
    </main>
  );
};

export default HiringPage;
