import { Suspense } from "react";
import TopBar from "@/components/TopBar";
import { BsQuestionCircleFill } from "react-icons/bs";
import Loading from "../loading";
import FaqData from "@/components/Faq/FaqData";

const FaqPage = () => {
  return (
    <main>
      <TopBar icon={<BsQuestionCircleFill />} title={"FAQ"} />
      <div className="my-10 main-container">
        <h2 className="heading-4 text-center mb-10 text-gray-700">
          FREQUENTLY ASKED QUESTIONS BY CUSTOMERS
        </h2>
        {/* faq component  */}
        <Suspense fallback={<Loading />}>
          <FaqData />
        </Suspense>
      </div>
    </main>
  );
};

export default FaqPage;
