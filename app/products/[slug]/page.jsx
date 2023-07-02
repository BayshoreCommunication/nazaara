"use client";
import Image from "next/image";

//swiper import here
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

//drawer import here
// import Drawer from "react-modern-drawer";
import dynamic from "next/dynamic";

const Drawer = dynamic(() => import("react-modern-drawer"), {
  ssr: false,
});

import "react-modern-drawer/dist/index.css";
import DrawerContent from "@/components/drawer/DrawerContent";

// component import here
import SimilarProductsCarosel from "@/components/similar-products/SimilarProductsCarosel";
import useWindowDimensions from "@/components/useDimensionWindow";
import ProductDetailsComponent from "@/components/product-detail/ProductDetailsComponent";
import DetailImage from "@/components/product-detail/DetailImagePage";
import { useEffect, useState } from "react";
import Accordion from "@/components/Accordion";
import { ProductData } from "@/data/product";

const ProductDetails = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleScroll = () => {
    const div = document.getElementById("leftDiv");
    if (div.scrollTop === div.scrollHeight - div.offsetHeight) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //drawer
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const { width } = useWindowDimensions();

  SwiperCore.use([Autoplay]);

  if (openModal) {
    typeof document !== "undefined" &&
      (document.body.style.overflow = "hidden");
  } else {
    typeof document !== "undefined" && (document.body.style.overflow = "auto");
  }

  return (
    <>
      <div>
        <div className="lg:flex gap-8 container my-4 md:my-6 lg:my-10">
          <div
            id="leftDiv"
            className={`flex-1 w-full lg:w-[60%] overflow-y-scroll scrollbar-none bg-white ${
              isScrollingUp ? "scroll-up" : ""
            }`}
          >
            <DetailImage setOpenModal={setOpenModal} openModal={openModal} />
            <div className="block lg:hidden h-96 sm:h-[30rem]">
              <Swiper
                modules={[Pagination]}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {ProductData.data.map((x, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={x.src}
                      alt="details"
                      width={800}
                      height={1100}
                      className="w-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="w-full lg:w-[40%] sticky top-0 h-max">
            <ProductDetailsComponent toggleDrawer={toggleDrawer} />
            <Accordion />
          </div>
        </div>
        <Drawer
          open={isOpen}
          size={width < 640 ? 350 : 500}
          onClose={toggleDrawer}
          direction="right"
          className="overflow-y-auto scrollbar-none"
        >
          {/* drawer content  */}
          <DrawerContent setIsOpen={setIsOpen} />
        </Drawer>
        {/* similar products section  */}
        <div className="container">
          <h2 className="card-title">Similar Products</h2>
          <SimilarProductsCarosel />
        </div>
        {/* More From the collections  */}
        <div className="container mt-6">
          <h2 className="card-title">More From The Collections</h2>
          <SimilarProductsCarosel />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
