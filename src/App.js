import React, { useState, useEffect } from "react";
import "./App.css";
import LaunchList from "./LaunchList";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => {
        setLaunches(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <LaunchList launches={launches} />}
    </div>
  );
};

export default App;
