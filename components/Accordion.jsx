"use client";
import { useState } from "react";
import { BsShield } from "react-icons/bs";
import { FaAngleDown, FaAngleUp, FaFemale } from "react-icons/fa";

const Accordion = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabId) => {
    setActiveTab((prevTab) => (prevTab === tabId ? null : tabId));
  };

  return (
    <div className="flex flex-col gap-y-3 mt-3">
      <div className="border border-gray-400 rounded-lg px-5">
        <button
          className="flex justify-between w-full py-3"
          type="button"
          onClick={() => toggleTab(1)}
        >
          <span className="flex gap-2 items-center">
            <FaFemale /> Product Description
          </span>
          {activeTab === 1 ? <FaAngleUp /> : <FaAngleDown />}
        </button>
        <div className={activeTab === 1 ? "block" : "hidden"}>
          <div className="collapse-content py-2">
            <p>
              <span>Outfit Type: </span>
              <span>Eastern</span>
            </p>
            <p>
              <span>Style: </span>
              <span>Frock</span>
            </p>
            <p>
              <span>Package Include: </span>
              <span>1 Piece -Top</span>
            </p>
            <p>
              <span>Fabric: </span>
              <span>OrganzaColor: BrownWork Technique: </span>
            </p>
            <ul>
              <li>{`Long Printed Organza frock style with Flair 160" round`}</li>
              <li>Dyed raw silk bottom</li>
              <li>Printed Organza Dupatta</li>
              <li>{`Model is wearing Small Size with the Height 5’5`}</li>
            </ul>
            <p>
              <span>Disclaimer: </span>
              <span>The color of the outfit may vary due to lighting</span>
            </p>
            <p>effect use in photography</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-400 rounded-lg px-5">
        <button
          className="flex justify-between items-center w-full py-3"
          type="button"
          onClick={() => toggleTab(2)}
        >
          <span className="flex gap-2 items-center">
            <BsShield /> Customer Protection
          </span>
          {activeTab === 2 ? <FaAngleUp /> : <FaAngleDown />}
        </button>
        <div className={activeTab === 2 ? "block" : "hidden"}>
          <div className="collapse-content py-2">
            <div className="grid grid-cols-2 gap-2">
              <span className="flex items-center gap-1">
                <BsShield /> Worldwide Delivery
              </span>
              <span className="flex items-center gap-1">
                <BsShield /> Safe Payment
              </span>
              <span className="flex items-center gap-1">
                <BsShield /> Return Policy
              </span>
              <span className="flex items-center gap-1">
                <BsShield /> Nazaara Commitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
