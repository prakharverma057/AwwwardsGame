import { useState } from "react";
import "./App.css";
import Hero from "./Components/hero";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  );
}

export default App;
