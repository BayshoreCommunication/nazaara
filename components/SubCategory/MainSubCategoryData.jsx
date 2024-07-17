import React, { Suspense } from "react";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import AllSubCategoriesCard from "./SubCategories";
import { Loader } from "../Loader";

const SubCategoriesData = async ({ data }) => {
  // const url = `${process.env.API_URL}/api/v1/sub-category/published`;
  // const categories = await fetchServerSideData(url);
  // console.log("shop by category");
  return (
    <section>
      {data && (
        <Suspense fallback={<Loader height="h-[20vh]" />}>
          <AllSubCategoriesCard data={data} />
        </Suspense>
      )}
    </section>
  );
};

export default SubCategoriesData;
