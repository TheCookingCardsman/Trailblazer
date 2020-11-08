import React, { useState, useEffect } from 'react'
import TrailCard from './TrailCard';
import CardDeck from 'react-bootstrap/CardDeck';
import Geocode from 'react-geocode';
const axios = require('axios');

function FinalView(props) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [maxDistance, setMaxDistance] = useState(25);
  const [trails, setTrails] = useState([]);
  const [address, setAddress] = useState('');
  const [loadEffect, setLoadEffect] = useState(false);
  const [addressState, setAddressState] = useState(false);
  const [getLatitude, setGetLatitude] = useState(false);
  require('dotenv').config();
  Geocode.setApiKey(`${process.env.REACT_APP_API_KEY}`);
  

  useEffect(() => {
    if (loadEffect == true) {
      axios.get(`https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${maxDistance}&key=${process.env.REACT_APP_HIKER_KEY}`)
        .then(res => {
          console.log(res);
          setTrails(res.data.trails);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [latitude, longitude]);


  useEffect(() => {
    if (address != '') {
      Geocode.fromAddress(address)
        .then(response => {
          const {lat, lng} = response.results[0].geometry.location;
          setLoadEffect(true);
          setLatitude(lat); 
          setLongitude(lng);
        })
        .catch((err) => {
          console.log(err);
        })
      }
  }, [addressState])

  useEffect(() => {
    if (loadEffect == true) {
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
    }
  }, [loadEffect])



  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setLoadEffect(true)}>
          Find Trails Near You!
        </button>
        <br />
        Alternatively, enter any address and we'll give you trails near by: 

        <input type="text" placeholder="Enter Address" onChange={event => setAddress(event.target.value)}></input>
        <button onClick={() => setAddressState(true)}> Find Trails </button>

        <CardDeck>
          {trails.map((info, idx) => {
            let props = {
              info: info,
            }
            return <div key={idx} style={{marginLeft: 'auto', padding: 50}}><TrailCard props={props} /></div>
          })}
        </CardDeck>

      </header>
    </div>
  );
}

export default FinalView;
