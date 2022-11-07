import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  useEffect(() => {
    fetch("http://localhost:4000/hero")
      .then((response) => response.json())
      .then((data) => console.log("i App"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="Logo" alt="logo" />
      </header>
      <Hero />
    </div>
  );
}

export default App;
