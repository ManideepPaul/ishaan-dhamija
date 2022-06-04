import React, { useEffect, useState } from "react";
import axios from "axios";
import Jobs from "./components/jobs";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    college: "",
    profile_pic: "",
  });

  useEffect(() => {
    axios
      .get("https://refertest.pythonanywhere.com/user/data")
      .then((res) => {
        let studentDetails = res.data.data;
        setData({
          name: studentDetails.name,
          college: studentDetails.college,
          profile_pic: studentDetails.pictureUrl,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <div className="profile">
        <img src={data.profile_pic} alt="" />
        <h2>Name: {data.name}</h2>
        <h3>College: {data.college}</h3>
      </div>
      <Jobs />
    </div>
  );
}

export default App;
