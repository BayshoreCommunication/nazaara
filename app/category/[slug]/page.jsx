import FestivalComponent from "@/components/Festivals/SingleFestivalContent";
import DynamicSubCategoryContent from "@/components/SubCategory/DynamicSubCategory/DynamicSubCategoryContent";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import React from "react";

const SubCategoryPage = async ({ params }) => {
  const url = `${process.env.API_URL}/api/v1/sub-category/${params.slug}`;
  const data = await fetchServerSideData(url);
  // console.log("slug", data.data[0]._id);

  const filterUrl = `${process.env.API_URL}/api/v1/product/published?subCategory=${data?.data[0]?._id}`;
  const subCategoryData = await fetchServerSideData(filterUrl);
  // console.log("subCategoryData", subCategoryData);
  return (
    <main>
      <div>
        <DynamicSubCategoryContent
          data={subCategoryData}
          subCategoryData={data}
        />{" "}
      </div>
    </main>
  );
};

export default SubCategoryPage;
