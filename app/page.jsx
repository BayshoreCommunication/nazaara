import BookAppointment from "@/components/BookAppointment";
import AllCategoriesCard from "@/components/card/category-card/AllCategoriesCard";
import AllBestSellingCard from "@/components/card/product/bestSelling/AllBestSellingCard";
import AllCards from "@/components/card/youMayLike/AllCards";
import Banner from "@/components/homepage/banner/Banner";
import DeliveryDesktop from "@/components/homepage/delivery-partner/DeliveryDesktop";
import HomeSlider from "@/components/home-carosel/Slider";
import Slider from "@/components/carosel/Slider";
import MainFestivalPage from "@/components/Festivals/MainFestivalPage";
import MainSalePage from "@/components/Sale/MainSalePage";
import Image from "next/image";
// Test Image
import testImage from "../public/images/products/details1.png";
// Test Image

const Home = () => {
  return (
    <main>
      <div className="w-full z-0">
        <Slider />
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
          <AllCategoriesCard />
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
          <AllBestSellingCard />
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
    </main>
  );
};

export default Home;
