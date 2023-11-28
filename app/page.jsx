import BookAppointment from "@/components/BookAppointment";
import Banner from "@/components/homepage/banner/Banner";
import DeliveryDesktop from "@/components/homepage/delivery-partner/DeliveryDesktop";
import Slider from "@/components/HomeCarosel/CaroselDataLoader";
import MainFestivalPage from "@/components/Festivals/MainFestivalPage";
import MainSalePage from "@/components/Sale/MainSalePage";
import MainDataContent from "@/components/card/youMayLike/MainDataContent";
import SubCategoriesData from "@/components/SubCategory/MainSubCategoryData";
import MainBestSellingDataContent from "@/components/card/BestSelling/MainDataContent";
import CaroselDataLoader from "@/components/HomeCarosel/CaroselDataLoader";

const Home = () => {
  return (
    <main>
      <div className="w-full">
        <CaroselDataLoader />
      </div>
      <div className="main-container my-10 lg:my-20 flex flex-col gap-y-10 lg:gap-y-20">
        {/* shop by festival start */}
        <div>
          <h1 className="card-title">SHOP BY FESTIVAL</h1>
          <MainFestivalPage />
        </div>
        {/* shop by festival end */}

        {/* shop by category start */}
        <div>
          <h1 className="card-title">SHOP BY CATEGORY</h1>
          <SubCategoriesData />
        </div>
        {/* shop by category end */}

        {/* shop by sale start */}
        <div>
          <h1 className="card-title">SHOP BY SALE</h1>
          <MainSalePage />
        </div>
        {/* shop by sale end */}

        {/* best selling start */}
        <div>
          <h1 className="card-title">BEST SELLING</h1>
          <MainBestSellingDataContent />
        </div>
        {/* best selling end */}

        {/* banner start */}
        <div>
          <Banner />
        </div>
        {/* banner end */}
        {/* YOU MAY LIKE start */}
        <div>
          <h1 className="card-title">YOU MAY LIKE</h1>
          <MainDataContent />
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
    </main>
  );
};

export default Home;
