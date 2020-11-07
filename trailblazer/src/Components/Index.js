import React, { useState, useEffect } from 'react'
// import logo from './logo.svg';
// import './Card.css';
const axios = require('axios');

function Index() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [maxDistance, setMaxDistance] = useState(25);
  const [trails, setTrails] = useState([]);
  const getData = () => {
    axios.get(`https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${maxDistance}&key=200967639-5ae34afc9d4778363c950c2067076465`)
      .then(res => {
        console.log(res);
        setTrails(res.data.trails);
      })
      .catch(err => {
        console.log(err);
      })
  } 

  useEffect(() => {
    if ("geolocation" in navigator) {
      // setNavigation(true);
      navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      setLatitude(position.coords.latitude.toFixed(4));
      console.log("Longitude is :", position.coords.longitude);
      setLongitude(position.coords.longitude.toFixed(4));
      });
    } else {
      console.log("Not Available");
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        {latitude} <br />
        {longitude}
        <button onClick={getData}>
          Get Data
        </button>
        
        {trails.map((item,index) => {
          return <div>{item.name}</div>
        })}

      </header>
    </div>
  );
}

export default Index;
