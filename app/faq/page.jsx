import FaqData from "@/components/Faq/FaqData";
import { Loader } from "@/components/Loader";
import TopBar from "@/components/TopBar";
import { Suspense } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

export const metadata = {
  title: "Faq",
};

const FaqPage = () => {
  return (
    <main>
      <TopBar icon={<BsQuestionCircleFill />} title={"FAQ"} />
      <div className="my-10 main-container">
        <h2 className="heading-4 text-center mb-10 text-gray-700">
          FREQUENTLY ASKED QUESTIONS BY CUSTOMERS
        </h2>
        {/* faq component  */}
        <Suspense fallback={<Loader height={"h-[50vh]"} />}>
          <FaqData />
        </Suspense>
      </div>
    </main>
  );
};

export default FaqPage;
