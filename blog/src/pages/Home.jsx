import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import About from "../components/About";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <FeaturedPosts />
      
      {/* Pushes the footer to the bottom */}
      <div className="flex-grow"></div>
      <About />
      <Subscribe />
      <Footer />
    </div>
  );
};


export default Home;