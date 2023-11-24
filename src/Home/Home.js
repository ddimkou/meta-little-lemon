import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <Specials />
      </section>
      <section>
        <Reviews />
      </section>
    </main>
  );
};

export default Home;
