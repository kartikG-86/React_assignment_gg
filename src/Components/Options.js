import React from "react";
import "../App.css";
const Options = () => {
  return (
    <>
      <div className="container-fluid row my-0 my-sm-2">
        <div className="col-md-3 col-12">
          <div className=" text-md-center text-start">
            <span className="mx-1">
              <i className="bi bi-geo-alt" style={{ color: "grey" }}></i>
            </span>
            <span className="mx-1">Mumbai,India</span>
            <span className="mx-1">
              <i className="bi bi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div
          className="col-md-9 col-12 my-md-0 my-3"
          style={{ overflow: "hidden", overflowX: "scroll" }}
        >
          <ul
            className="d-flex justify-content-start"
            style={{ listStyle: "none" }}
          >
            <li className=" px-1" style={{ minWidth: "fit-content" }}>
              Live Shows
            </li>
            <li className="mx-4">Streams</li>
            <li className="mx-4">Movies</li>
            <li className="mx-4">Plays</li>
            <li className="mx-4">Events</li>
            <li className="mx-4">Sports</li>
            <li className="mx-4">Activities</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Options;
