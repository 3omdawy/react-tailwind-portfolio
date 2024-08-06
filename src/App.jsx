import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else setTheme("light");
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        className="fixed z-10 right-2 top-2 bg-blue-500 text-lg p-1 rounded-md"
        onClick={() => handleThemeSwitch()}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
      <div className="font-OpenSans bg:white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto w-11/12">
          <HeroSection></HeroSection>
          <Services></Services>
          <Projects></Projects>
          <About></About>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
