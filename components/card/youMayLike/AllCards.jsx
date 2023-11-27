"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import ProductCart from "../ProductCart";

const AllCards = ({ randomProducts }) => {
  return (
    <>
      {randomProducts.data.length >= 1 && (
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
              {randomProducts.data.map((data, i) => (
                <SwiperSlide key={i}>
                  <ProductCart data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden lg:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-6">
            {randomProducts.data.map((data, i) => (
              <div key={i}>
                <ProductCart data={data} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllCards;
