import React, { Component, useEffect, useState} from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Polygon} from 'react-google-maps';
const axios = require('axios');

const MapView = withScriptjs(withGoogleMap(props => {
  // const info = props.location.state;
  // console.log(info);
  const [coordinatesJson, setCoordinatesJson] = useState([])

  useEffect(() => {
    axios.post('http://localhost:8000/api/convertGPX', {
      file_name: 'pine-bluff-deep-creek-loop.gpx'
    })
    .then((response) => {
      setCoordinatesJson(response.data.features[0].geometry.coordinates);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  var coords = [];
  for (var i = 0; i < coordinatesJson.length; i++) {
    console.log('coodinatesJson', coordinatesJson);
    coords.push({ lat: coordinatesJson[i][0], lng: coordinatesJson[i][1] })
  }
  
  const reversedCoords = coords.map(ll => {
    return { lat: ll.lng, lng: ll.lat };
  });

  console.log(reversedCoords);
  return (
    <GoogleMap 
      defaultCenter = { { lat: reversedCoords[0][0], lng: reversedCoords[0][1] } }
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
  );
}))

export default MapView;