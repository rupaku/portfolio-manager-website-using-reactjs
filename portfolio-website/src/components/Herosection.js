import React from "react"
import Typed from "react-typed"

const Herosection = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Alex Smith</h1>
        <p>
          I'm &nbsp;
          <Typed
            className="typed"
            strings={["Designer", "Freelancer", "Dancer", "Developer"]}
            backDelay={2000}
            typeSpeed={100}
            backSpeed={70}
            showCursor
            shuffle
            smartBackspace
            loop
          ></Typed>
        </p>
      </div>
    </section>
  )
}

export default Herosection
