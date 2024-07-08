import React, { Suspense } from "react";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import AllSubCategoriesCard from "./SubCategories";
import { Loader } from "../Loader";

const SubCategoriesData = async () => {
  const url = `${process.env.API_URL}/api/v1/sub-category/published`;
  const categories = await fetchServerSideData(url);
  return (
    <section>
      {categories && (
        <Suspense fallback={<Loader height="h-[20vh]" />}>
          <AllSubCategoriesCard data={categories} />
        </Suspense>
      )}
    </section>
  );
};

export default SubCategoriesData;
