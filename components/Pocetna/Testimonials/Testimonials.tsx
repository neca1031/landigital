import React from 'react'
import { TestimonialsWrapper,
          TestimonialsHeading,
          Testimonial,
          TestimonialIcon,
          TestimonialName,
          TestimonialTitle
} from './TestimonialsStyles'

const Testimonials = () => {
    return (
        <TestimonialsWrapper>
            <TestimonialsHeading>
            "Odličan dizajn i dobra saradnja!"
            </TestimonialsHeading>
            <Testimonial>
            Iako su momci jako mladi, pre svega su izuzetno ambiciozni i profesionalni.
Drago mi je što smo baš njih izabrali za održavanje našeg sajta!
            </Testimonial>
            <TestimonialIcon src={'/mg.jpeg'}>

            </TestimonialIcon>
            <TestimonialName>
            Milan Grujić
            </TestimonialName>
            <TestimonialTitle>
            POTPREDSEDNIK PORSCHE KLUBA SRBIJA
            </TestimonialTitle>
        </TestimonialsWrapper>
    )
}

export default Testimonials
