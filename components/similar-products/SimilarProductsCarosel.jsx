"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import ProductCart from "../ProductCart";

const SimilarProductsCarosel = ({ data }) => {
  // console.log("holaad", data);
  return (
    <>
      {data?.length >= 1 && (
        <>
          <div className="md:hidden">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              {data.map((data, i) => (
                <SwiperSlide className="!h-auto" key={data._id}>
                  <ProductCart data={data} i={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden md:block lg:hidden">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              {data.map((data, i) => (
                <SwiperSlide className="!h-auto" key={data._id}>
                  <ProductCart data={data} i={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden lg:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-6">
            {data.map((data, i) => (
              <div key={data._id}>
                <ProductCart data={data} i={i} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SimilarProductsCarosel;
