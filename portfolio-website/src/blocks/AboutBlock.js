import React from "react"
import AboutDetails from "./AboutDetails"

const AboutBlock = ({ data }) => {
  return (
    <div className="row">
      <div className="col-lg-4" data-aos="fade-right">
        <img src={data.image} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>{data.title}</h3>
        <p className="font-italic">{data.shortDescription}</p>
        <div className="row">
          <AboutDetails detail={data.details} min={0} max={4} />
          <AboutDetails detail={data.details} min={4} max={8} />
        </div>
        <p>{data.longDescription}</p>
      </div>
    </div>
  )
}
export default AboutBlock
