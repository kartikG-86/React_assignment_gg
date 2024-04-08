import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Options from "./Components/Options";
import Recommende from "./Components/Recommende";

function App() {
  const [data, setData] = useState([]);

  const getdata = () => {
    axios
      .get(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      )
      .then((res) => {
        setData(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, [data]);
  return (
    <>
      <div class="overflow-x-hidden">
        <Navbar />
        <Options />
        <Banner data={data} />
      </div>
    </>
  );
}

export default App;
