import React from "react";
import "../App.css";
const Options = () => {
  return (
    <>
      <div class="container-fluid row my-0 my-sm-2">
        <div class="col-md-3 col-12">
          <div class=" text-md-center text-start">
            <span class="mx-1">
              <i class="bi bi-geo-alt" style={{ color: "grey" }}></i>
            </span>
            <span class="mx-1">Mumbai,India</span>
            <span class="mx-1">
              <i class="bi bi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div
          class="col-md-9 col-12 my-md-0 my-3"
          style={{ overflow: "hidden", overflowX: "scroll" }}
        >
          <ul
            class="d-flex justify-content-start"
            style={{ listStyle: "none" }}
          >
            <li class=" px-1" style={{ minWidth: "fit-content" }}>
              Live Shows
            </li>
            <li class="mx-4">Streams</li>
            <li class="mx-4">Movies</li>
            <li class="mx-4">Plays</li>
            <li class="mx-4">Events</li>
            <li class="mx-4">Sports</li>
            <li class="mx-4">Activities</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Options;
