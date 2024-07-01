const CaroselDataLoader = dynamic(() =>
  import("@/components/HomeCarosel/CaroselDataLoader")
);
const MainFestivalPage = dynamic(() =>
  import("@/components/Festivals/MainFestivalPage")
);
const SubCategoriesData = dynamic(() =>
  import("@/components/SubCategory/MainSubCategoryData")
);
const MainSalePage = dynamic(() => import("@/components/Sale/MainSalePage"));
const MainBestSellingDataContent = dynamic(() =>
  import("@/components/card/BestSelling/MainDataContent")
);
const MainDataContent = dynamic(() =>
  import("@/components/card/youMayLike/MainDataContent")
);
const Banner = dynamic(() => import("@/components/homepage/banner/Banner"));
const BookAppointment = dynamic(() => import("@/components/BookAppointment"));
const DeliveryDesktop = dynamic(() =>
  import("@/components/homepage/delivery-partner/DeliveryDesktop")
);
import { Loader } from "@/components/Loader";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Home = () => {
  return (
    <main>
      <Suspense fallback={<Loader height="h-[40vh]" />}>
        <div className="">
          <CaroselDataLoader />
        </div>
      </Suspense>
      <div className="main-container my-10 lg:my-16 flex flex-col gap-y-10 lg:gap-y-16">
        {/* shop by festival start */}
        <div>
          <h1 className="card-title">SHOP BY FESTIVAL</h1>
          <Suspense fallback={<Loader height="h-[40vh]" />}>
            <MainFestivalPage />
          </Suspense>
        </div>
        {/* shop by festival end */}

        {/* shop by category start */}
        <div>
          <h1 className="card-title">SHOP BY CATEGORY</h1>
          <Suspense fallback={<Loader height="h-[40vh]" />}>
            <SubCategoriesData />
          </Suspense>
        </div>
        {/* shop by category end */}

        {/* shop by sale start */}
        <div>
          <h1 className="card-title">SHOP BY SALE</h1>
          <Suspense fallback={<Loader height="h-[40vh]" />}>
            <MainSalePage />
          </Suspense>
        </div>
        {/* shop by sale end */}

        {/* best selling start */}
        <div>
          <h1 className="card-title">BEST SELLING</h1>
          <Suspense fallback={<Loader height="h-[40vh]" />}>
            <MainBestSellingDataContent />
          </Suspense>
        </div>
        {/* best selling end */}

        {/* banner start */}
        <Suspense fallback={<Loader height="h-[40vh]" />}>
          <Banner />
        </Suspense>
        {/* banner end */}
        {/* YOU MAY LIKE start */}
        <div>
          <h1 className="card-title">YOU MAY LIKE</h1>
          <Suspense fallback={<Loader height="h-[40vh]" />}>
            <MainDataContent />
          </Suspense>
        </div>
        {/* YOU MAY LIKE end */}

        {/* BOOK AN APPOINTMENT start */}
        <div>
          <h1 className="card-title">CONTACT WITH US</h1>
          <div className="">
            <Suspense fallback={<Loader height="h-[40vh]" />}>
              <BookAppointment />
            </Suspense>
          </div>
        </div>
        {/* BOOK AN APPOINTMENT end */}

        {/* Our Delivery Partner start */}
        <div>
          <h1 className="card-title">OUR DELIVERY PARTNERS</h1>
          <Suspense fallback={<Loader height="h-[40vh]" />}>
            <DeliveryDesktop />
          </Suspense>
        </div>
        {/* Our Delivery Partner end */}
      </div>
    </main>
  );
};

export default Home;
