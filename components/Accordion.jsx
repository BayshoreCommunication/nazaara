"use client";
import { useState } from "react";
import {
  BsFillBagHeartFill,
  BsLayoutTextWindow,
  BsShield,
} from "react-icons/bs";
import { FaAngleDown, FaAngleUp, FaFemale } from "react-icons/fa";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
const parse = require("html-react-parser");

const Accordion = ({ data }) => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabId) => {
    setActiveTab((prevTab) => (prevTab === tabId ? null : tabId));
  };

  return (
    <>
      {data && (
        <div className="flex flex-col gap-y-3 mt-3">
          <div>
            <div className="collapse-content py-2">
              <div className="grid grid-cols-2 gap-2">
                <span className="flex items-center gap-2">
                  <TbTruckDelivery size={20} /> Worldwide Delivery
                </span>
                <span className="flex items-center gap-2">
                  <RiMoneyDollarCircleLine size={20} /> Safe Payment
                </span>
                <span className="flex items-center gap-2">
                  <TbTruckReturn size={20} /> Return Policy
                </span>
                <span className="flex items-center gap-2">
                  <AiOutlineHeart size={20} /> Nazaara Commitment
                </span>
              </div>
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg px-5">
            <button
              className="flex justify-between w-full py-3"
              type="button"
              onClick={() => toggleTab(1)}
            >
              <span className="flex gap-2 items-center">
                {/* <FaFemale /> Product Description */}
                <BsLayoutTextWindow /> Product Description
              </span>
              {activeTab === 1 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            <div className={activeTab === 1 ? "block" : "hidden"}>
              <div className="collapse-content py-2">
                {parse(data?.description)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Accordion;
