import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import About from "../components/About";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Prevents content from going under navbar */}
        <Hero />
        <About />
        <FeaturedPosts />
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default Home;