import HiringData from "@/components/Hiring/HiringData";
import { Loader } from "@/components/Loader";
import TopBar from "@/components/TopBar";
import { Suspense } from "react";
import { FaUserCircle } from "react-icons/fa";

export const metadata = {
  title: "Career",
};

const HiringPage = () => {
  return (
    <main>
      <TopBar icon={<FaUserCircle />} title={"WE ARE HIRING"} />
      <div className="main-container">
        <Suspense fallback={<Loader height="h-[40vh]" />}>
          <HiringData />
        </Suspense>
      </div>
    </main>
  );
};

export default HiringPage;
