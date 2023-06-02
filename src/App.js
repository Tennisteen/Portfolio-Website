import React from "react";
import { useState } from "react"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Portfolio />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
