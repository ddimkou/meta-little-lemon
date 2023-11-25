import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Reviews from "./Reviews";
import "./Home.css";

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
    </main>
  );
};

export default Home;
