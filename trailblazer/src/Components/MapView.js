import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
class App extends Component {
  render() {
    const style = {
      width: 'auto',
      height: 'auto'
    }
    return (
      <Map 
        google={this.props.google} 
        zoom={10}
        initialCenter={{
        lat: 40.5496939,
        lng: -90.7060049
        }}
        style={style}
      />
    );
    }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyCJMqbBaiXmXkBkLnJlLaCc0oE-6Jr0CDc')
})(App);
