import React from "react";

const FeaturedPosts = () => {
  return (
    <section id="posts" className="py-16 px-8">
      <h3 className="text-3xl font-semibold text-center mb-8">Featured Posts</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h4 className="text-xl font-semibold">Post Title 1</h4>
          <p className="text-gray-600">A brief introduction to the post...</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h4 className="text-xl font-semibold">Post Title 2</h4>
          <p className="text-gray-600">Another interesting topic...</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h4 className="text-xl font-semibold">Post Title 3</h4>
          <p className="text-gray-600">Some insightful content...</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
