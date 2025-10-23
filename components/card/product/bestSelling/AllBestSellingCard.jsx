"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import BestSellingCard from "./BestSellingCard";
import { useCallback, useEffect, useState } from "react";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";

const AllBestSellingCard = () => {
  const [data, setData] = useState([]);

  const [slugData, setSlugData] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const slugApiUrl = `${process.env.API_URL}/api/v1/best-selling-product`;
        const slugResponse = await fetchServerSideData(slugApiUrl);

        const slugArray = slugResponse?.bestSellingData?.[0]?.slug || [];
        setSlugData(slugArray);

        // Fetch product data for each slug
        const productPromises = slugArray.map(async (slug) => {
          const productApiUrl = `${process.env.API_URL}/api/v1/product/${slug}`;
          try {
            const productResponse = await fetchServerSideData(productApiUrl);

            // Assuming API returns { data: { ...productData } }
            if (productResponse?.data) {
              return productResponse.data;
            } else {
              throw new Error("Product data fetch failed");
            }
          } catch (error) {
            console.error(`Error fetching product for slug ${slug}:`, error);
            return null;
          }
        });

        // Wait for all product promises to resolve
        const filteredProducts = await Promise.all(productPromises);
        setProducts(filteredProducts.filter((product) => product !== null));
      } catch (error) {
        console.error("Error fetching slug data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log("products data", products);

  const apiUrl = `${process.env.API_URL}/api/v1/product/productByOrders`;

  // const apiUrl = `${process.env.API_URL}/api/v1/product/${params.slug}`;

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchServerSideData(apiUrl);

      if (response?.result) {
        setData(response.result);
      } else {
        console.error("No result found in response:", response);
      }
    } catch (error) {
      console.error("product productByOrders fetching error", error);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [apiUrl, fetchData]);

  // const sliceData = data.slice(0, 8);

  // console.log("products", products);

  return (
    <>
      <div className="flex gap-4 lg:hidden card-mobile">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {products.map((elem) => (
            <SwiperSlide key={elem._id}>
              <BestSellingCard key={elem._id} elem={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {products && (
          <>
            {products.map((elem) => (
              <BestSellingCard key={elem._id} elem={elem} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default AllBestSellingCard;
