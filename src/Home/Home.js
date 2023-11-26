import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Reviews from "./Reviews";
import "./Home.css";
import About from "./About";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <Hero />
      </section>
      <section className="specials">
        <Specials />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <About />
      </section>
    </main>
  );
};

export default Home;
