import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Base({
  title = "my Title",
  description = "my description",
  className = "bg-light text-black p-4",
  children,
}) {
  return (
    <div>
      <div className="container-fluid">
        <Menu />
        <div className="jumbotron bg-light text-black text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
          <div className={className}>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Base;
