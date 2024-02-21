import MainContent from "@/components/recommendedProducts/MainContent";
import RouterBack from "@/helpers/RouterBack";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import { Suspense } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { Loader } from "../Loader";

const DataLoaderComponent = async ({ searchParams }) => {
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
        <Suspense fallback={<Loader height="h-[40vh]" />}>
          <MainContent
            product={subCategoryData.product}
            categoryName={categoryData.data.slug}
            othersName={searchParams.subCategory}
            titleIcon={<TbCategoryFilled />}
          />
        </Suspense>
      );
    } else if (searchParams.festival) {
      //subcategorydata
      const festivalUrl = `${process.env.API_URL}/api/v1/festival/${categoryId}/${searchParams.festival}`;
      const festivalData = await fetchServerSideData(festivalUrl);

      return (
        <Suspense fallback={<Loader height="h-[40vh]" />}>
          <MainContent
            product={festivalData.data}
            categoryName={categoryData.data.slug}
            othersName={searchParams.festival}
            titleIcon={<FaShoppingBag />}
          />
        </Suspense>
      );
    } else if (searchParams.sale) {
      //subcategorydata
      const saleUrl = `${process.env.API_URL}/api/v1/sale/${categoryId}/${searchParams.sale}`;
      const saleData = await fetchServerSideData(saleUrl);

      return (
        <Suspense fallback={<Loader height="h-[40vh]" />}>
          <MainContent
            product={saleData.data}
            categoryName={categoryData.data.slug}
            othersName={searchParams.sale}
            titleIcon={<FaShoppingBag />}
          />
        </Suspense>
      );
    }
  } else {
    return <RouterBack />;
  }
};

export default DataLoaderComponent;
