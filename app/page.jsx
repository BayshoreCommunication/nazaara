"use client";
import BookAppointment from "@/components/BookAppointment";
import AllCategoriesCard from "@/components/card/category-card/AllCategoriesCard";
import AllBestSellingCard from "@/components/card/product/bestSelling/AllBestSellingCard";
import AllCards from "@/components/card/youMayLike/AllCards";
import Slider from "@/components/carosel/Slider";
import DeliveryDesktop from "@/components/delivery-partner/DeliveryDesktop";
import TinySlider from "@/components/tiny-carosel/TinySlider";
import Image from "next/image";
import Link from "next/link";
// import { useGetContactsQuery } from "@/services/contactApi";

const Home = () => {
  // const {
  //   data: contact,
  //   isLoading,
  //   isError,
  //   isFetching,
  //   isSuccess,
  // } = useGetContactsQuery();

  // contact != undefined &&
  //   console.log(
  //     "test data",
  //     contact.data.map((elem) => elem.message)
  //   );

  return (
    <div className="container my-4 lg:my-10 flex flex-col gap-y-10 lg:gap-y-16">
      {/* top carosel start */}
      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-4 lg:gap-6">
        <div className="lg:w-[70%] 2xl:w-3/4 z-0">
          <Slider />
        </div>
        <div className="lg:w-[28%] 2xl:w-[23%] z-0">
          <TinySlider />
        </div>
      </div>
      {/* top carosel end */}

      {/* shop by category start */}
      <div>
        <h1 className="card-title">SHOP BY CATEGORY</h1>
        <AllCategoriesCard />
      </div>
      {/* shop by category end */}

      {/* best selling start */}
      <div>
        <h1 className="card-title">BEST SELLING</h1>
        <AllBestSellingCard />
      </div>
      {/* best selling end */}

      {/* banner start */}
      <div className="">
        <div className="relative">
          <Image
            src="/images/homepage_banner.png"
            alt="bridal_top"
            width={1860}
            height={681}
            className="w-full h-40 lg:h-auto"
          />
          <div className="text-primary-color absolute top-1/2 -translate-y-1/2 right-5 lg:right-28">
            <p className="text-xs lg:text-base font-medium">
              Shipped in 24 Hours
            </p>
            <p className="text-lg lg:text-4xl font-bold lg:mt-1 mb-1 lg:mb-4">
              Festive Unstitched
            </p>
            <Link href="/">
              <button className="text-white bg-secondary-color px-3 py-1 text-sm lg:text-base rounded-lg">
                Shopping Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* YOU MAY LIKE start */}
      <div>
        <h1 className="card-title">YOU MAY LIKE</h1>
        <AllCards />
      </div>
      {/* YOU MAY LIKE end */}

      {/* BOOK AN APPOINTMENT start */}
      <div>
        <h1 className="card-title">BOOK AN APPOINTMENT</h1>
        <div className="">
          <BookAppointment />
        </div>
      </div>
      {/* BOOK AN APPOINTMENT end */}

      {/* Our Delivery Partner start */}
      <div>
        <h1 className="card-title">OUR DELIVERY PARTNERS</h1>
        <DeliveryDesktop />
      </div>
      {/* Our Delivery Partner end */}
    </div>
  );
};

export default Home;
