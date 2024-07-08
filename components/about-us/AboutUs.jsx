import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import Image from "next/image";

const AboutUs = async () => {
  const url = `${process.env.API_URL}/api/v1/customization`;
  const data = await fetchServerSideData(url);
  const aboutData = data.data[0].aboutUs;
  return (
    <>
      {data && (
        <div>
          <h2 className="text-xl font-medium text-center mb-10 text-gray-700">
            {aboutData?.topHeading}
          </h2>
          {/* <div className="text-center text-[17px] w-[94%] sm:w-3/5 mx-auto text-gray-600">
            <p className="leading-relaxed mb-6">{aboutData?.secondText}</p>
            <p>{aboutData?.thirdText}</p>
          </div> */}
          <div className="text-base text-gray-700 flex flex-col gap-4">
            <p>
              Welcome to ANZARA LIFESTYLE LTD, the epitome of exquisite fashion
              and timeless elegance. Nestled in the heart of Bangladesh, we
              proudly present our exceptional clothing brand, NAZAARA, where
              every stitch tells a story of grace, sophistication, and cultural
              richness. ANZARA LIFESTYLE LTD started its journey on 1st
              December, 2022, in Dhaka, Bangladesh (Trade License no.
              TRAD/DSCC/026507/2022)
            </p>
            <p>
              {" "}
              At ANZARA LIFESTYLE LTD, we embark on a journey to redefine the
              essence of female ethnic wear, blending tradition with
              contemporary allure. Our commitment to craftsmanship and quality
              is manifested in every garment we create, making NAZAARA a symbol
              of unparalleled luxury and style.
            </p>
            <p>
              Inspired by the vibrant heritage of Bangladesh, we specialize in
              crafting opulent designs that capture the essence of femininity.
              Our curated collections showcase a mesmerizing array of ethnic
              wear, adorned with intricate details and embellishments that
              elevate each piece to a work of art. This customer oriented brand
              is ready to serve, keeping in mind your comfort zone and desire to
              be different for the crowd.We take pride in our dedication to
              providing an exclusive shopping experience for those seeking the
              perfect ensemble for every occasion. Whether you are in search of
              elegant daily wear or breathtaking bridal dresses, NAZAARA is your
              destination for exceptional craftsmanship and timeless allure.
            </p>
            <p>
              {" "}
              At ANZARA LIFESTYLE LTD, we understand the significance of every
              celebration and the role clothing plays in making these moments
              memorable. Our team of skilled artisans and designers work
              tirelessly to ensure that each creation is a reflection of your
              individuality and the cultural richness that defines our
              roots.Beyond fashion, we are committed to sustainability and
              ethical practices, ensuring that our creations not only adorn you
              with beauty but also contribute positively to the world around us.
            </p>
            <p>
              {" "}
              {`Join us on this enchanting journey through the world of NAZAARA,
              where every garment is more than just clothing—it's a celebration
              of femininity, tradition, and the artistry that defines us.`}
            </p>
          </div>
          <div className="my-16">
            <h3 className="heading-3 text-primary-color text-center mb-10">
              CORE TEAM
            </h3>
            <div className="flex items-center flex-col">
              <Image
                src={aboutData?.ceoData?.image}
                alt="My Image"
                width={260}
                height={300}
              />
              <div className="text-center mt-6">
                <p className="font-semibold text-xl">
                  {aboutData?.ceoData?.userName}
                </p>
                <p className="text-gray-500">
                  {aboutData?.ceoData?.designation}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-14 mt-10">
              {aboutData?.otherEmployeesData?.map((data, index) => (
                <div key={data?._id} className="flex items-center flex-col">
                  <Image
                    src={data?.image}
                    alt="Nazaara employee data"
                    width={260}
                    height={300}
                  />
                  <div className="text-center mt-6">
                    <p className="font-semibold text-xl">{data?.userName}</p>
                    <p className="text-gray-500">{data?.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
