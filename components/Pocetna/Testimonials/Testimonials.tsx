import React from "react";
import {
  TestimonialsWrapper,
  TestimonialsHeading,
  Testimonial,
  TestimonialIcon,
  TestimonialName,
  TestimonialTitle,
} from "./TestimonialsStyles";

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <TestimonialsHeading>
        &quot;Excellent design and good collaboration!&quot;
      </TestimonialsHeading>
      <Testimonial>
        Although the guys are very young, above all they are extremely ambitious
        and professional. I am glad that we chose them to maintain our site!
      </Testimonial>
      <TestimonialIcon src={"/mg.jpeg"}></TestimonialIcon>
      <TestimonialName>Milan Grujić</TestimonialName>
      <TestimonialTitle>VICE PRESIDENT PORSCHE CLUB SERBIA</TestimonialTitle>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
