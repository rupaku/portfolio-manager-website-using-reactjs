import React from "react"
import { Col, Row } from "reactstrap"

const ServiceBlock = ({ service }) => {
  return (
    <Row>
      {service.map((service) => (
        <Col key={service.icon} md={4} data-aos="fade-up">
          <div className="icon">
            <i className={service.icon}></i>
            {service.index}
          </div>
          <h4 className="title">
            <a href="ds">{service.title}</a>
          </h4>
          <p className="description">{service.description}</p>
        </Col>
      ))}
    </Row>
  )
}

export default ServiceBlock
