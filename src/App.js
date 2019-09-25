import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <p>Hello this is my component for the coding challenge</p>
      <Footer />
    </div>
  );
}

export default App;
