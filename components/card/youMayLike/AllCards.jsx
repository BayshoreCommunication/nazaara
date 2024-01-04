"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import ProductCart from "../../ProductCart";

const AllCards = ({ randomProducts }) => {
  return (
    <>
      {randomProducts.data.length >= 1 && (
        <>
          {/* <div className="flex gap-4 md:hidden card-mobile">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              {randomProducts.data.map((data, i) => (
                <SwiperSlide key={i}>
                  <ProductCart data={data} i={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className=" gap-4 hidden md:flex lg:hidden card-mobile">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              {randomProducts.data.map((data, i) => (
                <SwiperSlide key={i}>
                  <ProductCart data={data} i={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 lg:gap-6">
            {randomProducts.data.map((data, i) => (
              <div key={i}>
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
