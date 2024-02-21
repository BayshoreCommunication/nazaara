import { Loader } from "@/components/Loader";
import TopBar from "@/components/TopBar";
import DataLoaderComponent from "@/components/recommendedProducts/DataLoaderComponent";
import React, { Suspense } from "react";

const recommendedProductsPage = ({ searchParams }) => {
  return (
    <main>
      <Suspense
        fallback={
          <div>
            <TopBar
              title={`${searchParams.category} / ${
                searchParams.subCategory ||
                searchParams.sale ||
                searchParams.festival
              }`}
            />
            <Loader height={"h-[50vh]"} />
          </div>
        }
      >
        <DataLoaderComponent searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

export default recommendedProductsPage;
