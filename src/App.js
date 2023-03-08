import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services"
import {Container} from 'react-bootstrap'
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
     <Container fluid className="p-0">
        <Home />
        <About />
        <Services />
      </Container>
    </>
  );
}

export default App;
