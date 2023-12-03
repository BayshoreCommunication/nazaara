import React from "react";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import MainContent from "@/components/recommendedProducts/MainContent";
import { FaShoppingBag } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import RouterBack from "@/helpers/RouterBack";

const RecommendedProductsPage = async ({ searchParams }) => {
  // console.log("search params", searchParams);
  if (searchParams.category) {
    const categorySlugUrl = `${process.env.API_URL}/api/v1/category/slug/${searchParams.category}`;
    const categoryData = await fetchServerSideData(categorySlugUrl);
    const categoryId = categoryData.data._id;

    if (searchParams.subCategory) {
      //subcategoryid
      const subCategorySlugUrl = `${process.env.API_URL}/api/v1/sub-category/slug/${searchParams.subCategory}`;
      const subCategoryIdData = await fetchServerSideData(subCategorySlugUrl);
      const subCategoryId = subCategoryIdData.data[0]._id;

      //subcategorydata
      const subCategoryUrl = `${process.env.API_URL}/api/v1/product/published?category=${categoryId}&subCategory=${subCategoryId}`;
      const subCategoryData = await fetchServerSideData(subCategoryUrl);

      return (
        <MainContent
          product={subCategoryData.product}
          categoryName={categoryData.data.slug}
          othersName={searchParams.subCategory}
          titleIcon={<TbCategoryFilled />}
        />
      );
    } else if (searchParams.festival) {
      //subcategorydata
      const festivalUrl = `${process.env.API_URL}/api/v1/festival/${categoryId}/${searchParams.festival}`;
      const festivalData = await fetchServerSideData(festivalUrl);

      return (
        <MainContent
          product={festivalData.data}
          categoryName={categoryData.data.slug}
          othersName={searchParams.festival}
          titleIcon={<FaShoppingBag />}
        />
      );
    } else if (searchParams.sale) {
      //subcategorydata
      const saleUrl = `${process.env.API_URL}/api/v1/sale/${categoryId}/${searchParams.sale}`;
      const saleData = await fetchServerSideData(saleUrl);

      return (
        <MainContent
          product={saleData.data}
          categoryName={categoryData.data.slug}
          othersName={searchParams.sale}
          titleIcon={<FaShoppingBag />}
        />
      );
    }
  } else {
    return <RouterBack />;
  }
};

export default RecommendedProductsPage;
