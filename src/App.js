import "./App.css";
import React from "react";
import Header from "./components/Header";
import About from "./components/About"
// import Home from "./components/Home";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="header">
      <Header />
      <About />
    </div>
  );
}

export default App;
