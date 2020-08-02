import React from "react"

const ResumeBlock = ({ data, flag }) => (
  <>
    <h3 className="resume-title">{data.title}</h3>
    {data.details.map((val, index) => {
      if (flag) {
        return (
          <div key={index} className="resume-item">
            <h4>{val.institute}</h4>
            <h5>{val.acedemic}</h5>
            <p>
              <em>{val.address}</em>
            </p>
            <p>{val.description}</p>
          </div>
        )
      } else {
        return (
          <div key={index} className="resume-item">
            <h4>{val.role}</h4>
            <h5>{val.acedemic}</h5>
            <p>
              <em>{val.address}</em>
            </p>
            <ul>
              {val.description.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        )
      }
    })}
  </>
)

export default ResumeBlock
