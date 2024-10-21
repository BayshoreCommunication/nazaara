import CaroselDataLoader from "@/components/HomeCarosel/CaroselDataLoader";
import MainFestivalPage from "@/components/Festivals/MainFestivalPage";
import SubCategoriesData from "@/components/SubCategory/MainSubCategoryData";
import MainSalePage from "@/components/Sale/MainSalePage";
import MainBestSellingDataContent from "@/components/card/BestSelling/MainDataContent";
import MainDataContent from "@/components/card/youMayLike/MainDataContent";
import Banner from "@/components/homepage/banner/Banner";
import BookAppointment from "@/components/BookAppointment";
import DeliveryDesktop from "@/components/homepage/delivery-partner/DeliveryDesktop";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import MessengerChat from "@/components/Messenger";
// import { Loader } from "@/components/Loader";
// import { Suspense } from "react";

// ! carosel data
async function getCaroselData() {
  const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = fetchServerSideData(url);
  return allData;
}

// ! sub-cateory data
async function getSubCategoryData() {
  const url = `${process.env.API_URL}/api/v1/sub-category/published`;
  const categories = fetchServerSideData(url);
  return categories;
}

// ! festival data
async function getFestivalData() {
  const url = `${process.env.API_URL}/api/v1/festival/published`;
  const festivals = fetchServerSideData(url);
  return festivals;
}

// ! sale data
async function getSaleData() {
  const url = `${process.env.API_URL}/api/v1/sale/published`;
  const sales = fetchServerSideData(url);
  return sales;
}

// ! best selling data
async function getBestSellingData() {
  const url = `${process.env.API_URL}/api/v1/best-selling-product`;
  const data = fetchServerSideData(url);
  return data;
}

// ! banner data
async function getBannerData() {
  const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = fetchServerSideData(url);
  return allData;
}

// ! you may like data
async function getYouMayLikeData() {
  const url = `${process.env.API_URL}/api/v1/product/random-products`;
  const data = fetchServerSideData(url);
  return data;
}

// ! delivery data
async function getDeliveryData() {
  const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = fetchServerSideData(url);
  return allData;
}

const Home = async () => {
  const carosel = getCaroselData();
  const subCategory = getSubCategoryData();
  const festival = getFestivalData();
  const sale = getSaleData();
  const bestSelling = getBestSellingData();
  const banner = getBannerData();
  const youMayLike = getYouMayLikeData();
  const delivery = getDeliveryData();

  const [
    caroselData,
    subCategoryData,
    festivalData,
    saleData,
    bestSellingData,
    bannerData,
    youMayLikeData,
    deliveryData,
  ] = await Promise.all([
    carosel,
    subCategory,
    festival,
    sale,
    bestSelling,
    banner,
    youMayLike,
    delivery,
  ]);

  return (
    <main>
      {/* <Suspense fallback={<Loader height="h-[40vh]" />}> */}
      <CaroselDataLoader data={caroselData.data.homeCarosel} />
      {/* </Suspense> */}
      <div className="main-container my-10 lg:my-16 flex flex-col gap-y-10 lg:gap-y-16">
        {/* shop by category start */}
        <div>
          {/* <Suspense fallback={<Loader height="h-[20vh]" />}> */}
          <h1 className="card-title">SHOP BY CATEGORY</h1>
          <SubCategoriesData data={subCategoryData} />
          {/* </Suspense> */}
        </div>
        {/* shop by category end */}
        {/* shop by festival start */}
        <div>
          {/* <Suspense fallback={<Loader height="h-[20vh]" />}> */}
          <h1 className="card-title">SHOP BY FESTIVAL</h1>
          <MainFestivalPage data={festivalData} />
          {/* </Suspense> */}
        </div>
        {/* shop by festival end */}

        {/* shop by sale start */}
        <div>
          {/* <Suspense fallback={<Loader height="h-[20vh]" />}> */}
          <h1 className="card-title">SHOP BY SALE</h1>
          <MainSalePage data={saleData} />
          {/* </Suspense> */}
        </div>
        {/* shop by sale end */}

        {/* best selling start */}
        <div>
          {/* <Suspense fallback={<Loader height="h-[20vh]" />}> */}
          <h1 className="card-title">BEST SELLING</h1>
          <MainBestSellingDataContent data={bestSellingData} />
          {/* </Suspense> */}
        </div>
        {/* best selling end */}

        {/* banner start */}
        {/* <Suspense fallback={<Loader height="h-[20vh]" />}> */}
        <Banner data={bannerData?.data?.bannerSection} />
        {/* </Suspense> */}
        {/* banner end */}
        {/* YOU MAY LIKE start */}
        <div>
          {/* <Suspense fallback={<Loader height="h-[20vh]" />}> */}
          <h1 className="card-title">YOU MAY LIKE</h1>
          <MainDataContent data={youMayLikeData} />
          {/* </Suspense> */}
        </div>
        {/* YOU MAY LIKE end */}

        {/* BOOK AN APPOINTMENT start */}
        <div>
          <div className="">
            {/* <Suspense fallback={<Loader height="h-[20vh]" />}> */}
            <h1 className="card-title">CONTACT WITH US</h1>
            <BookAppointment />
            {/* </Suspense> */}
          </div>
        </div>
        {/* BOOK AN APPOINTMENT end */}

        {/* Our Delivery Partner start */}
        <div>
          {/* <Suspense fallback={<Loader height="h-[20vh]" />}> */}
          <h1 className="card-title">OUR DELIVERY PARTNERS</h1>
          <DeliveryDesktop data={deliveryData.data.deliveryPartnerImages} />
          {/* </Suspense> */}
        </div>
        {/* Our Delivery Partner end */}
      </div>
      <MessengerChat />
    </main>
  );
};

export default Home;
