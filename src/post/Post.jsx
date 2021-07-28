import React from "react";
import "./Post.css";
import post1 from "./20190311153646-GettyImages-932272022.jpeg";
export default function Post() {
  return (
    <div className="post">
      <img src={post1} className="postImg" alt="" srcset="" />
      <div className="postInfo">
        <div className="postCategory">
          <span className="postCategorySub">Nature</span>
          <span className="postCategorySub">Animal</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
        voluptate dolor quasi repellendus temporibus numquam eos, eveniet ipsum
        labore delectus. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Saepe voluptate dolor quasi repellendus temporibus numquam eos,
        eveniet ipsum labore delectus. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Saepe voluptate dolor quasi repellendus temporibus
        numquam eos, eveniet ipsum labore delectus.
      </p>
    </div>
  );
}
