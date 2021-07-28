import React from "react";
import "./SinglePost.css";
import post1 from "./20190311153646-GettyImages-932272022.jpeg";
export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img src={post1} className="singlePostImg" alt="" srcset="" />
        <h1 className="singlePosttitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Abhay</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ut
          voluptas ipsa perspiciatis delectus pariatur natus voluptatem
          explicabo iste! Animi tempore debitis porro nobis deleniti? Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Maiores ut voluptas
          ipsa perspiciatis delectus pariatur natus voluptatem explicabo iste!
          Animi tempore debitis porro nobis deleniti? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Maiores ut voluptas ipsa
          perspiciatis delectus pariatur natus voluptatem explicabo iste! Animi
          tempore debitis porro nobis deleniti? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Maiores ut voluptas ipsa perspiciatis
          delectus pariatur natus voluptatem explicabo iste! Animi tempore
          debitis porro nobis deleniti?
        </p>
      </div>
    </div>
  );
}
