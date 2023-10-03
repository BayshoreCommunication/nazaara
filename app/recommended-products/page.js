"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import TopBar from "@/components/TopBar";
import Link from "next/link";
import Image from "next/image";
import PercentageBadge from "@/components/PercentageBadge";
import ReadyToShipBadge from "@/components/ReadyToShipBadge";
import { useGetNavDataQuery } from "@/services/navApi";
import axios from "axios";

const RecommendedProductsPage = () => {
  const searchParams = useSearchParams();
  const categorySearch = searchParams.get("category");
  const saleSearch = searchParams.get("sale");

  //   const url = `api/v1/nav-sale?saleTitle=Ready to ship&navCategoryTitle=Party Wear`
  //   const url = `${process.env.API_URL}/api/v1/nav-sale?saleTitle=${saleSearch}&navCategoryTitle=${categorySearch}`;

  const { data, isLoading, isError } = useGetNavDataQuery({
    saleTitle: saleSearch,
    navCategoryTitle: categorySearch,
  });

  //   console.log("urlll data", data?.saleData[0]?.productSlug);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const slugApiUrl = `${process.env.API_URL}/api/v1/best-selling-product`;
    const slugArray = data?.saleData[0]?.productSlug;
    // axios
    //   .get(slugApiUrl)
    //   .then((response) => {
    //     const slugArray = response?.data?.bestSellingData[0]?.slug || [];
    //     setSlugData(slugArray);

    // Fetch product data based on slugs
    const productPromises = slugArray?.map(async (slug) => {
      const productApiUrl = `${process.env.API_URL}/api/v1/product/${slug}`;
      try {
        const response = await axios.get(productApiUrl);
        console.log("response for product", response);
        if (response.status === 200) {
          return response.data.data;
        } else {
          throw new Error("Product data fetch failed");
        }
      } catch (error) {
        console.error(`Error fetching product for slug ${slug}:`, error);
        return null;
      }
    });

    // Wait for all product promises to resolve
    Promise.all(productPromises)
      .then((filteredProducts) => {
        setProducts(filteredProducts.filter((product) => product !== null));
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching slug data:", error);
    //   });
  }, [data?.saleData]);

  //   console.log("productss", products);

  return (
    <div>
      {products && (
        <>
          <TopBar />/
          <div className="container my-10">
            {/* products  */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6 my-6">
              {products?.map((data, i) => (
                <div key={i}>
                  <div>
                    <Link href={`/products/${data?.slug}`}>
                      <div className="relative">
                        <Image
                          src={data?.variant[0]?.imageUrl[0]}
                          alt="bridal_top"
                          width={326}
                          height={461}
                          className="w-full h-full rounded-[4px] border"
                        />
                        <div className="absolute top-2 left-2">
                          <PercentageBadge
                            text={`-${Math.ceil(
                              ((data?.regularPrice - data?.salePrice) /
                                data?.regularPrice) *
                                100
                            )}%`}
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="w-full text-left bg-white my-4 ">
                      <div className="flex items-center gap-2">
                        <p className="text-md font-bold text-gray-700">
                          BDT {data?.salePrice}/- BDT 1000/-
                        </p>
                        <p className="text-sm font-semibold line-through text-gray-500">
                          BDT {data?.regularPrice}/- BDT 1500/-
                        </p>
                      </div>
                      <p className="text-xs font-semibold my-2 text-gray-500">
                        {data?.productName}
                        hola product
                      </p>
                      <div className="flex gap-2 items-center">
                        <ReadyToShipBadge text="Ready to Ship" />
                        {/* <PendingShipBadge text="Up to 2 weeks" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecommendedProductsPage;
