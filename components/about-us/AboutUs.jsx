import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import Image from "next/image";
import React from "react";

const AboutUs = async () => {
  const url = `${process.env.API_URL}/api/v1/customization`;
  const data = await fetchServerSideData(url);
  const aboutData = data.data[0].aboutUs;
  return (
    <>
      {data && (
        <div>
          <h2 className="heading-4 text-center mb-10 text-gray-700">
            {aboutData?.topHeading}
          </h2>
          <div className="text-center text-[17px] w-[94%] sm:w-3/5 mx-auto text-gray-600">
            <p className="leading-relaxed mb-6">{aboutData?.secondText}</p>
            <p>{aboutData?.thirdText}</p>
          </div>
          <div className="my-20">
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
            <div className="flex flex-col sm:flex-row justify-center gap-14 mt-10">
              {aboutData?.otherEmployeesData?.map((data, index) => (
                <div key={index} className="flex items-center flex-col">
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
