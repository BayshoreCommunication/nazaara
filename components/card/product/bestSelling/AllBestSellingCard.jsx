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
  const apiUrl = `${process.env.API_URL}/api/v1/product/productByOrders`;

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
          {sliceData.map((elem, i) => (
            <SwiperSlide key={i}>
              <BestSellingCard elem={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {sliceData.map((elem, i) => (
          <BestSellingCard key={i} elem={elem} />
        ))}
      </div>
    </>
  );
};

export default AllBestSellingCard;
