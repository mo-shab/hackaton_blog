import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <a href="#home"><h1 className="text-2xl font-bold">Four Fantastic's Blog</h1></a>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#posts" className="hover:text-blue-600">Posts</a></li>
        <li><a href="#subscribe" className="hover:text-blue-600">Subscribe</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;