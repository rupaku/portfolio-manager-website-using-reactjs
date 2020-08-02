import React from "react"
import ProgressBar from "react-bootstrap/ProgressBar"

const SkillProgress = ({ data, min, max }) => {
  return data
    .filter((val, index) => index >= min && index < max)
    .map((val) => (
      <div className="progress" key={val.index}>
        <span className="skill">
          {val.name} <i className="val">{val.value}</i>
        </span>
        <ProgressBar
          variant="success"
          animated
          now={val.value}
          label={`${val.value}%`}
        />
      </div>
    ))
}

export default SkillProgress
