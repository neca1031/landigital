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
          <SectionHeader>Zašto izabrati nas?</SectionHeader>
          <SectionInfo>
            Kao momci koji su odrasli u digitalnom okruženju, najspremniji smo
            da se prilagodimo svakom izazovu.
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
