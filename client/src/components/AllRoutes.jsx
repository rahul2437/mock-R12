import React from "react";
import { Route, Routes } from "react-router-dom";
import Browse from "../pages/Browse";
import Post from "../pages/Post";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/browse" element={<Browse />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
};

export default AllRoutes;
