import React from "react"
import SkillProgress from "./SkillProgress"

const SkillBLock = ({ data }) => {
  return (
    <div className="row skills-content">
      <div className="col-lg-6" data-aos="fade-up">
        <SkillProgress data={data} min={0} max={3} />
      </div>
      <div className="col-lg-6" data-aos="fade-up">
        <SkillProgress data={data} min={3} max={6} />
      </div>
    </div>
  )
}

export default SkillBLock
