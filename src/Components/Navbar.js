import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a
            class="navbar-brand me-auto col-2"
            href="#"
            style={{ color: "#CF2D2D", fontWeight: "bold" }}
          >
            BookUsNow
          </a>

          <div class="col-7">
            <form class="d-flex">
              <button
                class="btn btn-dark mx-3 d-none d-md-block"
                type="submit"
                style={{ color: "white" }}
              >
                <div class="d-flex">
                  <span class="mx-1">
                    <i class="bi bi-list"></i>
                  </span>
                  <span>Categories</span>
                </div>
              </button>
              <div class="d-none d-sm-block" style={{ width: "35rem" }}>
                <div class="d-flex">
                  <input
                    class="form-control me-2  d-none d-sm-block"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div class="input-group-append">
                    <button class="btn" type="button">
                      <i class="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="col-3 d-flex justify-content-end">
            <button class="btn d-block d-md-none" type="button">
              <i class="bi bi-search"></i>
            </button>
            <button class="btn me-2 d-none d-sm-block d-md-flex" type="button">
              <i class="bi bi-person mx-2"></i>
              <span class="">Favourite</span>
            </button>
            <button class="btn d-block d-md-none">
              <i class="bi bi-heart"></i>
            </button>
            <button
              class="btn btn-outline-secondary d-none d-sm-block"
              type="button"
            >
              <span>SignIn</span>
            </button>
            <button class="btn d-block d-md-none">
              <i class="bi bi-person"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
