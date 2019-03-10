import React from "react";
import Thor from "./Thor";
import BlackPanther from "./BlackPanther";
import CaptainMarvel from "./CaptainMarvel";
import SpiderMan from "./SpiderMan";
import "./Featured.css";

function Featured() {
  return (
    <div>
      <h2 className="py-2 _title-bars">FEATURED CHARACTERS</h2>
      <div className="row mx-auto mb-5">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <Thor />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <BlackPanther />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <CaptainMarvel />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <SpiderMan />
        </div>
      </div>
    </div>
  );
}

export default Featured;
