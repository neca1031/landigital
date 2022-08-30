import React, { useState } from "react";
import {
  MainContainer,
  Picture,
  AccordionContainer,
  SectionHeader,
  SectionInfo,
  AccordionWrap,
  PictureWrap,
  AccordionContainerPadding,
  PictureSpacer,
} from "./AccordionSectionStyles";
import { Data } from "./Data";
import AccordionComponent from "./AccordionComponent";

const AccordionSection = () => {
  return (
    <MainContainer>
      <PictureWrap>
        <Picture>
          <PictureSpacer></PictureSpacer>
        </Picture>
      </PictureWrap>
      <AccordionContainer>
        <AccordionContainerPadding>
          <SectionHeader>Why choose us?</SectionHeader>
          <SectionInfo>
            Because we grew up in a digital environment, we are best suited to
            adapt to every challenge.
          </SectionInfo>
          <AccordionWrap>
            {Data.map((item, index) => {
              return (
                <AccordionComponent
                  key="index"
                  heading={item.heading}
                  content={item.info}
                ></AccordionComponent>
              );
            })}
          </AccordionWrap>
        </AccordionContainerPadding>
      </AccordionContainer>
    </MainContainer>
  );
};

export default AccordionSection;
