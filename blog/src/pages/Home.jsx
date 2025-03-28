import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <FeaturedPosts />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;