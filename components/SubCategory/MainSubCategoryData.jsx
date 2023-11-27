import React from "react";
import AllSubCategoriesCard from "../card/category-card/SubCategories";

//get all categories data
async function getSubCateogryData() {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/sub-category/published`,
    {
      next: { revalidate: 300 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const SubCategoriesData = async () => {
  const categories = await getSubCateogryData();
  //   console.log("festival data", festivals);
  return (
    <main>
      <AllSubCategoriesCard data={categories} />
    </main>
  );
};

export default SubCategoriesData;
