import React from "react";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import { useTitle } from "../../hook/useTitle";

const HomePage = ({ title }) => {
  useTitle(title);
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default HomePage;
