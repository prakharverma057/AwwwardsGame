import { useState } from "react";
import "./App.css";
import Hero from "./Components/hero";
import About from "./Components/About";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About/>
    </main>
  );
}

export default App;
