"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import SingleCard from "./SingleCard";
import axios from "axios";
import { useEffect, useState } from "react";

const AllCards = () => {
  const [data, setData] = useState([]);

  const apiUrl = `${process.env.API_URL}/api/v1/product`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const productData = data?.product;
  console.log("data using axios in all card", productData);

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
          <SwiperSlide>
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </>
  );
};

export default AllCards;
