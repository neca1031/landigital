import React from "react";
import { useRef, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionHeadingElement,
  AccordionHeading,
  AccordionExpandIcon,
  AccordionInfoElement,
  AccordionInfo,
} from "./AccordionSectionStyles";

const AccordionComponent = ({ heading, content }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentSpace = useRef(null);
  const toggleAccordion = () => {
    setActive(!active);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
  };
  return (
    <>
      <Accordion>
        <AccordionItem key="index">
          <AccordionHeadingElement onClick={() => toggleAccordion()}>
            <AccordionHeading expand={active}>{heading}</AccordionHeading>
            <AccordionExpandIcon expand={active}>
              {active ? <FaMinusCircle /> : <FaPlusCircle />}
            </AccordionExpandIcon>
          </AccordionHeadingElement>
          <AccordionInfoElement
            ref={contentSpace}
            style={{ maxHeight: `${height}` }}
          >
            <AccordionInfo>{content}</AccordionInfo>
          </AccordionInfoElement>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionComponent;
