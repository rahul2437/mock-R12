import React from "react";
import PostForm from "../components/PostForm";

const Post = () => {
  return (
    <div className="mx-auto w-3/4">
      <h1 className="text-3xl font-bold">Post a new Ad</h1>
      <PostForm />
    </div>
  );
};

export default Post;
