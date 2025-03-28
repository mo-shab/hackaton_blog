import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">The Four Fantastic's Blog</h1>
        <ul className="flex space-x-6">
          <li><button onClick={() => scrollToSection("Home")} className="hover:text-blue-600">Home</button></li>
          <li><button onClick={() => scrollToSection("posts")} className="hover:text-blue-500">Post</button></li>
          <li><button onClick={() => scrollToSection("about")} className="hover:text-blue-500">About</button></li>
          <li><button onClick={() => scrollToSection("subscribe")} className="hover:text-blue-500">Subscribe</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
