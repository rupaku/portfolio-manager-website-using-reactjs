import React from "react"
import OwlCarousel from "react-owl-carousel2"
import "react-owl-carousel2/lib/styles.css"

const TestimonialBlock = ({ testimonial }) => {
  const options = {
    items: 1,
    rewind: true,
    autoplay: true,
  }

  return (
    <OwlCarousel options={options}>
      {testimonial.map((item) => (
        <div key={item.index} className="testimonial-item" data-aos="fade-up">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            {item.testimonialBody}
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src={item.image} className="testimonial-img" alt="" />
          <h3>{item.name}</h3>
          <h4>{item.profession}</h4>
        </div>
      ))}
    </OwlCarousel>
  )
}

export default TestimonialBlock
