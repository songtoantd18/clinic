import React from "react";
import "../ErrorPages/ErrorPages.css";

const ErrorPages = () => {
  return (
    <div>
      <h1>404 Error Page </h1>
      <p className="zoom-area"></p>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container"></div>
    </div>
  );
};

export default ErrorPages;
