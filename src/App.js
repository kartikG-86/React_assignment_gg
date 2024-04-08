import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Options from "./Components/Options";

function App() {
  const [data, setData] = useState([]);

  const getdata = () => {
    axios
      .get(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      )
      .then((res) => {
        let fetchData = res.data.events;
        for (let i = 0; i < 3; i++) {
          fetchData = [...fetchData, ...fetchData];
        }
        console.log(fetchData.length);
        setData(fetchData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Options />
        <Banner data={data} />
      </div>
    </>
  );
}

export default App;
