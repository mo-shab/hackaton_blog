const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">The Four Fantastic's Blog</h1>
        <ul className="flex space-x-6">
          <li><a href="#Home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#FeaturedPosts" className="hover:text-blue-500">Post</a></li>
          <li><a href="#About" className="hover:text-blue-500">About</a></li>
          <li><a href="#Subscribe" className="hover:text-blue-500">Subscribe</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;