import React from "react";
import "../FAQ/Faqs.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

const Faqs = () => {
  return (
    <div className="faqs">
      <div className="faqs-wrapper">
        <div className="container1">
          <div className="head1">FAQs</div>
          <div className="head2">What people usually ask</div>
        </div>
        <div className="accordion">
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaAngleDown className="angle" />}
              id="panel1a-header"
            >
              How to buy NFTs?
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              voluptates assumenda dolores provident odio minima earum quasi
              quas fugiat et?
            </AccordionDetails>
          </Accordion>
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaAngleDown className="angle" />}
              id="panel1a-header"
            >
              How to create NFTs?
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              voluptates assumenda dolores provident odio minima earum quasi
              quas fugiat et?
            </AccordionDetails>
          </Accordion>
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaAngleDown className="angle" />}
              id="panel1a-header"
            >
              How to join the auction?
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              voluptates assumenda dolores provident odio minima earum quasi
              quas fugiat et?
            </AccordionDetails>
          </Accordion>
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaAngleDown className="angle" />}
              id="panel1a-header"
            >
              How to withdraw the coin NFTs?
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              voluptates assumenda dolores provident odio minima earum quasi
              quas fugiat et?
            </AccordionDetails>
          </Accordion>
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaAngleDown className="angle" />}
              id="panel1a-header"
            >
              How to buy NFTs?
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              voluptates assumenda dolores provident odio minima earum quasi
              quas fugiat et?
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
