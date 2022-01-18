import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import {
  MainContainer,
  Picture,
  AccordionContainer,
  SectionHeader,
  SectionInfo,
  Accordion,
  AccordionItem,
  AccordionHeading,
  AccordionInfo,
  AccordionHeadingElement,
  AccordionInfoElement,
  AccordionExpandIcon,
  AccordionWrap,
  PictureWrap,
  AccordionContainerPadding,
  PictureSpacer,
} from "./AccordionSectionStyles";
import { Data } from "./Data";

const AccordionSection = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = (index) => {
    if (expand === index) {
      return setExpand(null);
    }
    setExpand(index);
  };

  return (
    <MainContainer>
      <PictureWrap>
        <Picture>
          <PictureSpacer></PictureSpacer>
        </Picture>
      </PictureWrap>
      <AccordionContainer>
        <AccordionContainerPadding>
          <SectionHeader>Zašto izabrati nas?</SectionHeader>
          <SectionInfo>
            Kao momci koji su odrasli u digitalnom okruženju, najspremniji smo
            da se prilagodimo svakom izazovu.
          </SectionInfo>
          <AccordionWrap>
            <Accordion>
              {Data.map((item, index) => {
                return (
                  <AccordionItem>
                    <AccordionHeadingElement
                      onClick={() => toggleExpand(index)}
                      key={index}
                    >
                      <AccordionHeading expand={expand} index={index}>
                        {item.heading}
                      </AccordionHeading>
                      <AccordionExpandIcon expand={expand} index={index}>
                        {expand === index ? (
                          <FaMinusCircle />
                        ) : (
                          <FaPlusCircle />
                        )}
                      </AccordionExpandIcon>
                    </AccordionHeadingElement>
                    <AccordionInfoElement expand={expand} index={index}>
                      <AccordionInfo>{item.info}</AccordionInfo>
                    </AccordionInfoElement>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </AccordionWrap>
        </AccordionContainerPadding>
      </AccordionContainer>
    </MainContainer>
  );
};

export default AccordionSection;
