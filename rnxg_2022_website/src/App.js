import React from "react";
import About from "./Components/About";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Project from "./Components/Project";
import Event from "./Components/Event";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar className=" " />
      <Hero />
      <About />
      <Project />
      <Event />
      <Footer />
    </div>
  );
}

export default App;
