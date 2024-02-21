import { Loader } from "@/components/Loader";
import DataLoaderComponent from "@/components/recommendedProducts/DataLoaderComponent";
import React, { Suspense } from "react";

const recommendedProductsPage = ({ searchParams }) => {
  return (
    <main>
      <Suspense fallback={<Loader height="h-[40vh]" />}>
        <DataLoaderComponent searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

export default recommendedProductsPage;
