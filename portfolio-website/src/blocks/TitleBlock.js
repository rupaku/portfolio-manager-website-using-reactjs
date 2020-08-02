import React from "react"

const TitleBlock = ({ data }) => {
  return (
    <div className="section-title">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  )
}

export default TitleBlock
