import React, { Component, useEffect, useState} from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Polygon} from 'react-google-maps';
import StreetView from './StreetView.js';
import SplitPane from 'react-split-pane';

const axios = require('axios');

const MapView = withScriptjs(withGoogleMap(props => {
  const info = props.location.state;
  console.log(info);
  
  var original_trail_name = info.props.name.toLowerCase();
  var trail_name = original_trail_name.split(' ').join('-');

  const [coordinatesJson, setCoordinatesJson] = useState([])
  const [downloaded, setDownloaded] = useState(false)

  const downloadGPX = () => {
    axios.post('http://localhost:8000/api/downloadGPX', {
      trail_page: `${info.props.url}`
    })
    .then((response) => {
      console.log(response);
      setDownloaded(true);
    })
    .catch((err) =>  {
      console.log(err);
    })
  }

  const getData = () => {
    axios.post('http://localhost:8000/api/convertGPX', {
      file_name: `${trail_name}.gpx`
    })
    .then((response) => {
      setCoordinatesJson(response.data.features[0].geometry.coordinates);
    })
    .catch ((err) => {
      console.log(err);
    })
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(async () => {
    if (downloaded == false) {
      await downloadGPX();
    } else {
      await sleep(15000);
      await getData();
    }
  }, [downloaded])
  

  var coords = [];
  for (var i = 0; i < coordinatesJson.length; i++) {
    coords.push({ lat: coordinatesJson[i][0], lng: coordinatesJson[i][1] })
  }

  const reversedCoords = coords.map(ll => {
    return { lat: ll.lng, lng: ll.lat };
  });

  if (coordinatesJson.length > 0) {
    return (
      <SplitPane split="vertical" minSize={50}>
        <div>
          <GoogleMap 
            defaultCenter = { { lat: coordinatesJson[0][1], lng: coordinatesJson[0][0]  } }
            defaultZoom = { 13 }
          >
            <Polygon 
              path={reversedCoords} 
              editable={true}
              options={{
                strokeColor: "#00000F",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                // fillColor: "#FF0000",
                fillOpacity: 0.05,
                polygonKey: 1
              }}
            />
          </GoogleMap>
        </div>
        <div>
          <StreetView name={original_trail_name} />
        </div>
    </SplitPane>
    );
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
}))

export default MapView;
