"use client";
import React, { useEffect, useState } from "react";
const parse = require("html-react-parser");
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaUserCircle } from "react-icons/fa";
import Loader from "./Loader";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const HiringComponent = ({ data }) => {
  // console.log("data from hiring", data);
  const [openAccordion, setOpenAccordion] = useState(null); // Initialize as null or some default value
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching delay (you can replace this with your actual data fetching logic)
    setTimeout(() => {
      setLoading(false); // Set loading state to false when data is fetched (or when an error occurs)
    }, 1500); // Simulate a 2-second delay for demonstration purposes
  }, []);

  const handleOpen = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null); // Close the Accordion if it's already open
    } else {
      setOpenAccordion(id); // Open the clicked Accordion
    }
  };

  return (
    <div>
      <h1 className="flex items-center justify-center gap-x-2 h-28 border-b-2 text-xl font-medium text-gray-600">
        <FaUserCircle />
        WE ARE HIRING
      </h1>
      <div className=" my-10">
        {loading ? (
          <Loader height={"h-[50vh]"} />
        ) : (
          <>
            {data.map((item) => (
              <Accordion
                key={item._id}
                open={openAccordion === item._id}
                icon={<Icon id={item._id} open={openAccordion} />}
              >
                <AccordionHeader
                  className="font-normal"
                  onClick={() => handleOpen(item._id)}
                >
                  {item.title}
                </AccordionHeader>
                <AccordionBody>{parse(item.description)}</AccordionBody>
              </Accordion>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HiringComponent;
