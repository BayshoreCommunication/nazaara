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
import axios from "axios";

const AllBestSellingCard = () => {
  const [data, setData] = useState([]);

  const [slugData, setSlugData] = useState();
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const slugApiUrl = `${process.env.API_URL}/api/v1/best-selling-product`;
  //   const slugFunc = async () => {
  //     try {
  //       const response = await axios.get(slugApiUrl);
  //       setSlugData(response?.data?.bestSellingData[0].slug);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   slugFunc();

  //   const fetchProducts = async () => {
  //     const productPromises = slugData?.map(async (slug) => {
  //       const apiUrl = `${process.env.API_URL}/api/v1/product/${slug}`;
  //       try {
  //         // const response = await fetch(apiUrl);
  //         const productData = await axios.get(apiUrl);
  //         // setData(response.data.result);
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         // const productData = await response.json();
  //         return productData;
  //       } catch (error) {
  //         console.error(`Error fetching product for slug ${slug}:`, error);
  //         return null;
  //       }
  //     });
  //     const products = await Promise.all(productPromises);
  //     setProducts(products.filter((product) => product !== null));
  //   };
  //   fetchProducts();
  // }, [slugData]);

  useEffect(() => {
    const slugApiUrl = `${process.env.API_URL}/api/v1/best-selling-product`;
    axios
      .get(slugApiUrl)
      .then((response) => {
        const slugArray = response?.data?.bestSellingData[0]?.slug || [];
        setSlugData(slugArray);

        // Fetch product data based on slugs
        const productPromises = slugArray.map(async (slug) => {
          const productApiUrl = `${process.env.API_URL}/api/v1/product/${slug}`;
          try {
            const response = await axios.get(productApiUrl);
            // console.log("response for product", response);
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
      })
      .catch((error) => {
        console.error("Error fetching slug data:", error);
      });
  }, []);

  // console.log("products data", products);

  const apiUrl = `${process.env.API_URL}/api/v1/product/productByOrders`;

  // const apiUrl = `${process.env.API_URL}/api/v1/product/${params.slug}`;

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data.result);
    } catch (error) {
      console.error(error);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [apiUrl, fetchData]);

  const sliceData = data.slice(0, 8);

  // console.log("data", data);

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
          {products.map((elem, i) => (
            <SwiperSlide key={i}>
              <BestSellingCard elem={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {products && (
          <>
            {products.map((elem, i) => (
              <>
                {/* {console.log("elem", elem)} */}
                <BestSellingCard key={i} elem={elem} />
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default AllBestSellingCard;
