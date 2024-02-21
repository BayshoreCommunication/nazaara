"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import MainContent from "@/components/recommendedProducts/MainContent";
import RouterBack from "@/helpers/RouterBack";
import { FaShoppingBag } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { Loader } from "../Loader";
import TopBar from "../TopBar";

const DataLoaderComponent = ({ searchParams }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  console.log("data", data);
  console.log("loading", loading);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (searchParams.category) {
        setLoading(true);
        try {
          const categorySlugUrl = `${process.env.API_URL}/api/v1/category/slug/${searchParams.category}`;
          const categoryData = await axios.get(categorySlugUrl);
          console.log("category data", categoryData);
          const categoryId = categoryData?.data?.data?._id;

          if (searchParams.subCategory) {
            setLoading(true);
            const subCategorySlugUrl = `${process.env.API_URL}/api/v1/sub-category/slug/${searchParams.subCategory}`;
            const subCategoryIdData = await axios.get(subCategorySlugUrl);
            console.log("subCategoryIdData", subCategoryIdData);
            const subCategoryId = subCategoryIdData?.data?.data[0]?._id;

            const subCategoryUrl = `${process.env.API_URL}/api/v1/product/published?category=${categoryId}&subCategory=${subCategoryId}`;
            const subCategoryData = await axios.get(subCategoryUrl);

            setData({
              product: subCategoryData.data.product,
              categoryName: categoryData.data.data.slug,
              othersName: searchParams.subCategory,
              titleIcon: <TbCategoryFilled />,
            });
          } else if (searchParams.festival) {
            setLoading(true);
            const festivalUrl = `${process.env.API_URL}/api/v1/festival/${categoryId}/${searchParams.festival}`;
            const festivalData = await axios.get(festivalUrl);
            console.log("festivalData");

            setData({
              product: festivalData.data.data,
              categoryName: categoryData.data.data.slug,
              othersName: searchParams.festival,
              titleIcon: <FaShoppingBag />,
            });
          } else if (searchParams.sale) {
            setLoading(true);
            const saleUrl = `${process.env.API_URL}/api/v1/sale/${categoryId}/${searchParams.sale}`;
            const saleData = await axios.get(saleUrl);
            console.log("saleData", saleData);

            setData({
              product: saleData.data.data,
              categoryName: categoryData.data.data.slug,
              othersName: searchParams.sale,
              titleIcon: <FaShoppingBag />,
            });
          }
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
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

  return <MainContent {...data} loading={loading} />;
};

export default DataLoaderComponent;
