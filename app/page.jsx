import BookAppointment from "@/components/BookAppointment";
import MainFestivalPage from "@/components/Festivals/MainFestivalPage";
import CaroselDataLoader from "@/components/HomeCarosel/CaroselDataLoader";
import MainSalePage from "@/components/Sale/MainSalePage";
import SubCategoriesData from "@/components/SubCategory/MainSubCategoryData";
import MainBestSellingDataContent from "@/components/card/BestSelling/MainDataContent";
import MainDataContent from "@/components/card/youMayLike/MainDataContent";
import Banner from "@/components/homepage/banner/Banner";
import DeliveryDesktop from "@/components/homepage/delivery-partner/DeliveryDesktop";

const Home = () => {
  return (
    <main>
      {/* <Suspense fallback={<Loader height="h-[40vh]" />}> */}
      <div className="w-full">
        <CaroselDataLoader />
      </div>
      {/* </Suspense> */}
      <div className="main-container my-10 lg:my-20 flex flex-col gap-y-10 lg:gap-y-20">
        {/* shop by festival start */}
        <div>
          <h1 className="card-title">SHOP BY FESTIVAL</h1>
          {/* <Suspense fallback={<Loader height="h-[40vh]" />}> */}
          <MainFestivalPage />
          {/* </Suspense> */}
        </div>
        {/* shop by festival end */}

        {/* shop by category start */}
        <div>
          <h1 className="card-title">SHOP BY CATEGORY</h1>
          {/* <Suspense fallback={<Loader height="h-[40vh]" />}> */}
          <SubCategoriesData />
          {/* </Suspense> */}
        </div>
        {/* shop by category end */}

        {/* shop by sale start */}
        <div>
          <h1 className="card-title">SHOP BY SALE</h1>
          {/* <Suspense fallback={<Loader height="h-[40vh]" />}> */}
          <MainSalePage />
          {/* </Suspense> */}
        </div>
        {/* shop by sale end */}

        {/* best selling start */}
        <div>
          <h1 className="card-title">BEST SELLING</h1>
          {/* <Suspense fallback={<Loader height="h-[40vh]" />}> */}
          <MainBestSellingDataContent />
          {/* </Suspense> */}
        </div>
        {/* best selling end */}

        {/* banner start */}
        {/* <Suspense fallback={<Loader height="h-[40vh]" />}> */}
        <Banner />
        {/* </Suspense> */}
        {/* banner end */}
        {/* YOU MAY LIKE start */}
        <div>
          <h1 className="card-title">YOU MAY LIKE</h1>
          {/* <Suspense fallback={<Loader height="h-[40vh]" />}> */}
          <MainDataContent />
          {/* </Suspense> */}
        </div>
        {/* YOU MAY LIKE end */}

        {/* BOOK AN APPOINTMENT start */}
        <div>
          <h1 className="card-title">CONTACT WITH US</h1>
          <div className="">
            {/* <Suspense fallback={<Loader height="h-[40vh]" />}> */}
            <BookAppointment />
            {/* </Suspense> */}
          </div>
        </div>
        {/* BOOK AN APPOINTMENT end */}

        {/* Our Delivery Partner start */}
        <div>
          <h1 className="card-title">OUR DELIVERY PARTNERS</h1>
          {/* <Suspense fallback={<Loader height="h-[40vh]" />}> */}
          <DeliveryDesktop />
          {/* </Suspense> */}
        </div>
        {/* Our Delivery Partner end */}
      </div>
    </main>
  );
};

export default Home;
