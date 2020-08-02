import React from "react"

const AboutDetails = ({ detail, min, max }) => {
  return (
    <div className="col-lg-6">
      <ul>
        {detail
          .filter((val, index) => index >= min && index < max)
          .map((val) => (
            <li key={val.index}>
              <i className="icofont-rounded-right"></i>{" "}
              <strong>{val.key} : </strong> {val.value}
            </li>
          ))}
      </ul>
    </div>
  )
}
export default AboutDetails
