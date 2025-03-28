import React from "react";

const Subscribe = () => {
  return (
    <section id="subscribe" className="bg-blue-950 text-white py-16 text-center">
      <h3 className="text-3xl font-semibold">Stay Updated</h3>
      <p className="mt-2">Subscribe to our newsletter for the latest posts.</p>
      <div className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-l text-gray-900"
        />
        <button className="bg-white text-blue-500 px-4 py-2 rounded-r font-semibold">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
