import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

export default function Home() {
  console.log("api is", API);
  return (
    <Base title="Home page" description="Welcome to Store">
      <div className="container">
        <div className="row">
          <div className="col-4 ">
            <button className="btn btn-success">test</button>
          </div>
          <div className="col-4 ">
            <button className="btn btn-success">test</button>
          </div>
          <div className="col-4 ">
            <button className="btn btn-success">test</button>
          </div>
        </div>
      </div>
    </Base>
  );
}
