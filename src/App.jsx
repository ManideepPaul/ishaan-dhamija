import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const[data, setData] = useState({
    name: '',
    college: '',
    profile_pic: '',

  })
  
  useEffect(() => {
    axios.get("http://refertest.pythonanywhere.com/user/data").then(res => {
      let jobData = res.data.data
      setData({
        name: jobData.name,
        college: jobData.college,
        profile_pic: jobData.pictureUrl
      })
      console.log(res)
    })
    .catch(err => console.log(err));
  }, []);
  return <div className="App">
    <h1>{data.college}</h1>
  </div>;
}

export default App;
