import { useState } from "react";
import "./App.css";
import Hero from "./Components/hero";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import Story from "./Components/Story";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
