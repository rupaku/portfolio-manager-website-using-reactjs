import React, { useEffect, useState } from "react"
import data from "../data/Facts.json"
import TitleBlock from "../blocks/TitleBlock"
const Facts = () => {
  const [body, setBody] = useState([])
  useEffect(() => {
    setBody(data.body)
  }, [])
  return (
    <section id="facts" className="facts">
      <div className="container">
        <TitleBlock data={data.heading} />

        <div className="row no-gutters">
          {body.map((content) => (
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className={content.icon}></i>
                <span data-toggle="counter-up">{content.count}</span>
                <p>
                  <strong>{content.shortDescription}</strong> {content.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Facts
