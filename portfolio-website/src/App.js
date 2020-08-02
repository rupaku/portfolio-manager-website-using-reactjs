import React from "react"
import "./App.css"
import Header from "./components/Header"
import Herosection from "./components/Herosection"
import About from "./components/About"
import Facts from "./components/Facts"
import Skills from "./components/Skills"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Herosection />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
