import React from "react";

const FeaturedPosts = () => {
  return (
    <section id="posts" className="py-16 px-8">
      <h3 className="text-3xl font-semibold text-center mb-8">Featured Posts</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h4 className="text-xl font-semibold">Post Title 1</h4>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iure et doloremque culpa? Tenetur maiores delectus adipisci, cumque molestias vel consectetur possimus voluptatum id molestiae velit eaque libero deserunt beatae?</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h4 className="text-xl font-semibold">Post Title 2</h4>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam error enim id explicabo, ipsum minus ratione optio, ipsa saepe deleniti. Reiciendis laboriosam sint suscipit dolorem maiores dignissimos modi cupiditate.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h4 className="text-xl font-semibold">Post Title 3</h4>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum recusandae distinctio quos eligendi doloremque, modi quaerat eos aperiam odit culpa deleniti numquam velit dolore corporis? Ipsum vel distinctio necessitatibus!</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
