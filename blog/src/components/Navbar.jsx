import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Blog</h1>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#posts" className="hover:text-blue-600">Posts</a></li>
        <li><a href="#subscribe" className="hover:text-blue-600">Subscribe</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;