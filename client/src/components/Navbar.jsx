import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-6 bg-cyan-100 shadow-md px-4 py-2">
      <div>
        <h1 className="text-3xl">Olx</h1>
      </div>
      <div className="flex gap-2">
        <Link
          to={"/browse"}
          className="border rounded px-2 bg-gray-300 hover:bg-gray-400"
        >
          Browse
        </Link>
        <Link
          to={"/post"}
          className="border rounded px-2 bg-gray-300 hover:bg-gray-400"
        >
          Post
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
