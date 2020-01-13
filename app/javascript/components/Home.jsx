import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Mackenzie's Kitchen</h1>
        <p className="lead">
          A curated exclusive list of recipes from my personal collection.
        </p>
       <br></br>
        <Link
          to="/recipes"
          className="btn btn-lg custom-button recipe-btn"
          role="button"
        >
          View Recipes
        </Link>
        <br></br>
        <br></br>
        <Link
          to="/blog"
          className="btn btn-lg custom-button blog-btn"
          role="button"
        >
          Read My Blog
        </Link>
      </div>
    </div>
  </div>
);