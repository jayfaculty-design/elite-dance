import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Gallery from "@/components/Gallery";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Classes />
      <Gallery />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
