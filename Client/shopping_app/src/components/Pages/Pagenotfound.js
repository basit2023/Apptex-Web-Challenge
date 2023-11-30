import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <div title={"go back- page not found"}>
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <h1 className="display-1 font-weight-bold text-dark">404</h1>
        <h2 className="h3 text-secondary mt-4">Oops! Page Not Found</h2>
        <Link
          to="/"
          className="btn btn-primary mt-4"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Pagenotfound;
