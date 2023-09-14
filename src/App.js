import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect } from "react";
// import './Components/star.css'


function App() {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');
      const size = Math.random() * 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      return star;
    };

    const addStars = () => {
      const sky = document.querySelector('.starry-sky');
      for (let i = 0; i < 100; i++) {
        sky.appendChild(createStar());
      }
    };

    addStars();
  }, []);
  return (
    <div className="starry-sky">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
