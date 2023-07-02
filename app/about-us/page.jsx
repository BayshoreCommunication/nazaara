import TopBar from "@/components/TopBar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <TopBar />
      <div className="my-10 container">
        <h2 className="heading-3 text-center mb-10 text-gray-700">
          NOT JUST FASHION BUT DESIGN
        </h2>
        <div className="text-center text-[17px] w-[94%] sm:w-3/5 mx-auto text-gray-600">
          <p className="leading-relaxed mb-6">
            NAZAARA | a concern of Anzara Lifestyle Ltd. started its journey at
            01 October, 2022. Former Managing Partner of Anzara Fashion, Md.
            Abirul Islam Chowdhury started this venture focusing on tradition
            and ethnic wear along with bridal attire collection.
          </p>
          <p>
            Bangladesh is well-rich with trendy and traditional designs. Nazaara
            tries to bring these fusion of design in its ethnic and bridal
            collection
          </p>
        </div>
        <div className="my-20">
          <h3 className="heading-3 text-primary-color text-center mb-10">
            CORE TEAM
          </h3>
          <div className="flex items-center flex-col">
            <Image
              src="/images/Abir-Chowdhury.png"
              alt="My Image"
              width={260}
              height={300}
            />
            <div className="text-center mt-6">
              <p className="font-semibold text-xl">Abir Chowdhury</p>
              <p className="text-gray-500">Founder, Director, CEO</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-14 mt-10">
            <div className="flex items-center flex-col">
              <Image
                src="/images/Tasrif-Alam.png"
                alt="My Image"
                width={260}
                height={300}
              />
              <div className="text-center mt-6">
                <p className="font-semibold text-xl">Tasrif Alam</p>
                <p className="text-gray-500">Admin & Accounts</p>
              </div>
            </div>
            <div className="flex items-center flex-col">
              <Image
                src="/images/Tahsin-Mahmud.png"
                alt="My Image"
                width={260}
                height={300}
              />
              <div className="text-center mt-6">
                <p className="font-semibold text-xl">Tahsin Mahmud</p>
                <p className="text-gray-500">Visualizer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
