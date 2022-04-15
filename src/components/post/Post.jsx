import React from "react";
import "./Post.css";
// import post1 from "./20190311153646-GettyImages-932272022.jpeg";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  const publicFolder = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img src={publicFolder + post.photo} className="postImg" alt="" />
      )}
      <div className="postInfo">
        <div className="postCategory">
          {post.categories.map((e) => (
            <span className="postCategorySub">{e.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
