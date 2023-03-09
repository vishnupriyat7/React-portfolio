import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services"
import Skills from "./components/Skills";
import {Container} from 'react-bootstrap'
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
     <Container fluid className="p-0">
        <Home />
        <About />
        <Services />
        <Skills />
        <Contact />
      </Container>
    
    </>
  );
}

export default App;
