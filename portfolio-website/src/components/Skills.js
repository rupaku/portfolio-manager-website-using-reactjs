import React from "react"
import ProgressBar from "react-bootstrap/ProgressBar"
import data from "../data/skills.json"
import TitleBlock from "../blocks/TitleBlock"
import { Container } from "reactstrap"
import SkillBlock from "../blocks/SkillBlock"

const Skills = () => {
  /*return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
              <ProgressBar variant="success" animated now={100} />
            </div>

            <div className="progress">
              <span className="skill">
                CSS <i className="val">90%</i>
              </span>
              <ProgressBar animated now={90} />
            </div>

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">75%</i>
              </span>
              <ProgressBar animated now={75} />
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                PHP <i className="val">80%</i>
              </span>
              <ProgressBar animated now={80} />
            </div>

            <div className="progress">
              <span className="skill">
                WordPress/CMS <i className="val">90%</i>
              </span>
              <ProgressBar animated now={90} />
            </div>

            <div className="progress">
              <span className="skill">
                Photoshop <i className="val">55%</i>
              </span>
              <ProgressBar variant="danger" animated now={55} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )  */
  return (
    <section id="skills" className="skills section-bg">
      <Container>
        <TitleBlock data={data.heading} />
        <SkillBlock data={data.body} />
      </Container>
    </section>
  )
}
export default Skills
