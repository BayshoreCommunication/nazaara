import React from "react";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import AllSubCategoriesCard from "./SubCategories";

const SubCategoriesData = async () => {
  const url = `${process.env.API_URL}/api/v1/sub-category/published`;
  const categories = await fetchServerSideData(url);
  return (
    <main>
      <AllSubCategoriesCard data={categories} />
    </main>
  );
};

export default SubCategoriesData;
