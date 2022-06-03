import React, { useEffect, useState } from "react";
import axios from "axios";
import Jobs from "./components/jobs";
import "./App.css";

function App() {

  const[data, setData] = useState({
    name: '',
    college: '',
    profile_pic: '',

  })
  
  useEffect(() => {
    axios.get("http://refertest.pythonanywhere.com/user/data").then(res => {
      let studentDetails = res.data.data
      setData({
        name: studentDetails.name,
        college: studentDetails.college,
        profile_pic: studentDetails.pictureUrl
      })
    })
    .catch(err => console.log(err));
  }, []);
  return <div className="App">
    <h1>{data.college}</h1>
    <Jobs />
  </div>;
}

export default App;
