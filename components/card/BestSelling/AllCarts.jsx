"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import ProductCart from "../../ProductCart";

const AllCards = ({ bestSellingProducts }) => {
  return (
    <>
      {bestSellingProducts.data[0].products.length >= 1 && (
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
              {bestSellingProducts.data[0].products.map((data, i) => (
                <SwiperSlide className="!h-auto" key={i}>
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
              {bestSellingProducts.data[0].products.map((data, i) => (
                <SwiperSlide className="!h-auto" key={i}>
                  <ProductCart data={data} i={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden lg:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-6">
            {bestSellingProducts.data[0].products.map((data, i) => (
              <div className="!h-auto" key={i}>
                <ProductCart data={data} i={i} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllCards;
