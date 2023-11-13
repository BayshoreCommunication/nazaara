"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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

const Faq = ({ data }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleOpen = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <div className="my-10">
      {data.map((item) => (
        <Accordion
          key={item._id}
          open={openAccordion === item._id}
          icon={<Icon id={item._id} open={openAccordion} />}
        >
          <AccordionHeader
            className="font-normal text-lg"
            onClick={() => handleOpen(item._id)}
          >
            {item.title}
          </AccordionHeader>
          <AccordionBody>{item.answer}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default Faq;
