"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import parse from 'html-react-parser';

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
  const [openAccordion, setOpenAccordion] = useState(null); // Initialize as null or some default value

  const handleOpen = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null); // Close the Accordion if it's already open
    } else {
      setOpenAccordion(id); // Open the clicked Accordion
    }
  };

  return (
    <div className="my-10">
      {
        data && data.map((item,index) => (
        <Accordion
          key={index}
          open={openAccordion === item._id}
          icon={<Icon id={item._id} open={openAccordion} />}
        >
          <AccordionHeader
            className="font-normal text-lg"
            onClick={() => handleOpen(item._id)}
          >
            {item.title}
          </AccordionHeader>
          <AccordionBody>{parse(item.description)}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default HiringComponent;
