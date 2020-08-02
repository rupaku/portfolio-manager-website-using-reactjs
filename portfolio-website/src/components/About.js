import React from "react"
import data from "../data/About.json"
import TitleBlock from "../blocks/TitleBlock"
import AboutBlock from "../blocks/AboutBlock"
import { Container } from "reactstrap"

const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <TitleBlock data={data.heading} />
        <AboutBlock data={data.body} />
      </Container>
    </section>
  )
}

export default About
