import React, { useState, useEffect } from 'react'
import Geocode from 'react-geocode';
import ReactStreetview from 'react-streetview';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();
function StreetViewComp(props) {
  const [view, setView] = useState(false);
  const [streetViewPanoramaOptions, setStreetViewPanoramaOptions] = useState({});
  Geocode.setApiKey(`${process.env.REACT_APP_API_KEY}`);
  
  useEffect(() => {
    Geocode.fromAddress(props.name)
      .then(response => {
        const {lat, lng} = response.results[0].geometry.location;
        console.log(lat, lng);
        setStreetViewPanoramaOptions({
          position: {lat: lat, lng: lng}, 
          pov: {heading: 100, pitch: 0},
          zoom: 1})
        setView(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  if (view == true && streetViewPanoramaOptions != {}) {
    return (
      <div style={{
        width: '1575px',
        height: '390px',
        backgroundColor: '#eeeeee'}}>
          <ReactStreetview
            apiKey="AIzaSyAAN2xbYu8DmKyaI_CLnrvevrC2yHNgi3U"
            streetViewPanoramaOptions={streetViewPanoramaOptions}
          />
      </div>
    );
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default StreetViewComp;
