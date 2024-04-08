import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Banner = ({ data }) => {
  function formatDate(inputDateString) {
    const dateObject = new Date(inputDateString);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return dateObject.toLocaleDateString("en-US", options);
  }

  const [events, setEvents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    try {
      // Simulate a loading delay with a timeout

      const response = await axios.get(
        `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNumber}&type=upcoming`
      );
      console.log(response);
      const { data } = response;
      setEvents((prevEvents) => [...prevEvents, ...data.events]);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after data is fetched (whether successful or not)
    }
  };

  const fetchMoreData = () => {
    if (pageNumber <= totalPages) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      fetchData(); // Fetch more data when reaching the end of the page
    }
  };

  return (
    <>
      <div className="position-relative">
        <div
          className="container-fluid p-5"
          style={{
            backgroundImage: 'url("/Banner.jpg")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "40rem",
            color: "white",
          }}
        >
          <h1 className="fs-1 text-center my-4">
            Discover Exciting Events Happening
          </h1>
          <h1 className="fs-1 text-center my-4">
            Near You - Stay Tuned for Updates
          </h1>
          <p className="text-center px-5 mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique
          </p>
        </div>

        <div
          className="position-absolute"
          style={{ color: "white", left: "1rem", top: "30rem" }}
        >
          <div className="mx-5" style={{ width: "82vw" }}>
            <h4 className="my-4">
              Recommended shows
              <span>
                <i className="bi bi-arrow-right"></i>
              </span>
            </h4>

            <div
              className=" d-flex mb-4"
              style={{
                overflowX: "scroll",
              }}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="card custom-card mx-3"
                  style={{
                    backgroundImage: `url(https://drive.google.com/thumbnail?sz=w1000&id=${
                      item.imgUrl.split("/")[item.imgUrl.split("/").length - 2]
                    })`,
                    backgroundSize: "cover",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                    minHeight: "25rem",
                    minWidth: "20rem",
                    shapeRendering: "crispEdges",
                  }}
                >
                  <div
                    className="container-fluid position-absolute px-4"
                    style={{ color: "white", top: "17rem" }}
                  >
                    <div className="row">
                      <div className="col-6 text-start fw-bold">
                        {item.eventName}
                      </div>
                      <div className="col-6" style={{ fontSize: "0.9rem" }}>
                        {formatDate(item.date)}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        {" "}
                        <span className="mx-1">
                          <i
                            className="bi bi-geo-alt"
                            style={{ color: "grey" }}
                          ></i>
                        </span>
                        {item.cityName}
                      </div>
                      <div className="col-6">{item.weather}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container-fluid" style={{ color: "black" }}>
            <div className="my-5 mx-5">
              <h4 className="fw-bold my-4">
                Upcoming Events
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </h4>
              <hr />
            </div>
            <InfiniteScroll
              dataLength={events.length} // This is important to prevent loading the same data multiple times
              next={fetchMoreData} // Function to call when reaching the end of the page
              hasMore={pageNumber <= totalPages} // Check if there are more pages to fetch
              loader={
                <div className="d-flex py-3 justify-content-center">
                  <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              } // Loader component to show while fetching data
              endMessage={
                events.length > 0 ? (
                  <p className="text-center fs-5 my-5">
                    Ohh! No more events to load
                  </p>
                ) : (
                  <p className="text-center fs-5 my-5">
                    Wait, we are fetching data
                  </p>
                )
              } // Message to show when all events have been loaded
            >
              <div className="row mx-5">
                {events.map((item, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-12 my-3"
                    key={index}
                  >
                    <div
                      className="card"
                      style={{ width: "22rem", height: "22rem" }}
                    >
                      <img
                        src={`https://drive.google.com/thumbnail?sz=w1000&id=${
                          item.imgUrl.split("/")[
                            item.imgUrl.split("/").length - 2
                          ]
                        }`}
                        className="card-img-top"
                        alt="..."
                      />
                      <div
                        className="position-absolute"
                        style={{
                          top: "13.4rem",
                          left: "1rem",
                          width: "19.9rem",
                          opacity: 0.8,
                          backgroundColor: "grey",
                          color: "white",
                          fontSize: "0.8rem",
                          padding: "0.2rem",
                          paddingLeft: "1rem",
                          borderBottomLeftRadius: "0.4rem",
                          borderBottomRightRadius: "0.4rem",
                        }}
                      >
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="card-body mb-2">
                        <h5 className="card-title">{item.eventName}</h5>
                        <div
                          className="row "
                          style={{ fontSize: "0.9rem", color: "grey" }}
                        >
                          <span className=" col-6">
                            {" "}
                            <i
                              className="bi bi-geo-alt mx-1"
                              style={{ color: "grey" }}
                            ></i>
                            {item.cityName}
                          </span>
                          <span className="col-6">
                            {item.weather} | {Math.floor(item.distanceKm / 100)}
                            Km
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
