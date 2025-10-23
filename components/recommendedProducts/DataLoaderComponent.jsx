"use client";
import MainContent from "@/components/recommendedProducts/MainContent";
import RouterBack from "@/helpers/RouterBack";
import { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { Loader } from "../Loader";
import TopBar from "../TopBar";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";

const DataLoaderComponent = ({ searchParams }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  //   console.log("data", data);
  //   console.log("loading", loading);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchParams.category) return;

      setLoading(true);

      try {
        // 1️⃣ Fetch category by slug
        const categorySlugUrl = `${process.env.API_URL}/api/v1/category/slug/${searchParams.category}`;
        const categoryData = await fetchServerSideData(categorySlugUrl);
        const categoryId = categoryData?.data?._id;

        if (!categoryId) {
          console.error("Category ID not found");
          setLoading(false);
          return;
        }

        // 2️⃣ Handle sub-category filter
        if (searchParams.subCategory) {
          const subCategorySlugUrl = `${process.env.API_URL}/api/v1/sub-category/slug/${searchParams.subCategory}`;
          const subCategoryIdData = await fetchServerSideData(
            subCategorySlugUrl
          );
          const subCategoryId = subCategoryIdData?.data?.[0]?._id;

          if (!subCategoryId) {
            console.error("Subcategory ID not found");
            setLoading(false);
            return;
          }

          const subCategoryUrl = `${process.env.API_URL}/api/v1/product/published?category=${categoryId}&subCategory=${subCategoryId}`;
          const subCategoryData = await fetchServerSideData(subCategoryUrl);

          setData({
            product: subCategoryData?.product,
            categoryName: categoryData?.data?.slug,
            othersName: searchParams.subCategory,
            titleIcon: <TbCategoryFilled />,
          });
        }

        // 3️⃣ Handle festival filter
        else if (searchParams.festival) {
          const festivalUrl = `${process.env.API_URL}/api/v1/festival/${categoryId}/${searchParams.festival}`;
          const festivalData = await fetchServerSideData(festivalUrl);

          setData({
            product: festivalData?.data,
            categoryName: categoryData?.data?.slug,
            othersName: searchParams.festival,
            titleIcon: <FaShoppingBag />,
          });
        }

        // 4️⃣ Handle sale filter
        else if (searchParams.sale) {
          const saleUrl = `${process.env.API_URL}/api/v1/sale/${categoryId}/${searchParams.sale}`;
          const saleData = await fetchServerSideData(saleUrl);

          setData({
            product: saleData?.data,
            categoryName: categoryData?.data?.slug,
            othersName: searchParams.sale,
            titleIcon: <FaShoppingBag />,
          });
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  if (loading) {
    return (
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
    );
  }

  if (!data) {
    return <RouterBack />;
  }

  return <MainContent {...data} />;
};

export default DataLoaderComponent;
