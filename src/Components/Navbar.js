import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a
            className="navbar-brand me-auto col-2"
            href="/"
            style={{ color: "#CF2D2D", fontWeight: "bold" }}
          >
            BookUsNow
          </a>

          <div className="col-7">
            <form className="d-flex">
              <button
                className="btn btn-dark mx-3 d-none d-md-block"
                type="submit"
                style={{ color: "white" }}
              >
                <div className="d-flex">
                  <span className="mx-1">
                    <i className="bi bi-list"></i>
                  </span>
                  <span>Categories</span>
                </div>
              </button>
              <div className="d-none d-md-block" style={{ width: "35rem" }}>
                <div className="d-flex">
                  <input
                    className="form-control me-2  d-none d-sm-block"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn" type="button">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-3 d-flex justify-content-end">
            <button className="btn d-block d-md-none" type="button">
              <i className="bi bi-search"></i>
            </button>
            <button
              className="btn me-2 d-none d-md-block d-md-flex"
              type="button"
            >
              <i className="bi bi-person mx-2"></i>
              <span className="">Favourite</span>
            </button>
            <button className="btn d-block d-md-none">
              <i className="bi bi-heart"></i>
            </button>
            <button
              className="btn btn-outline-secondary d-none d-md-block"
              type="button"
            >
              <span>SignIn</span>
            </button>
            <button className="btn d-block d-md-none">
              <i className="bi bi-person"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
