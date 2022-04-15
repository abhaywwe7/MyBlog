import React from "react";
import Post from "../post/Post";
import "./Posts.css";
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((e) => (
        <Post post={e} />
      ))}

      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
}
