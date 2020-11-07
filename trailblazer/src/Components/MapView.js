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
        lat: 35.5496939,
        lng: -120.7060049
        }}
        style={style}
      />
    );
    }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyDPc33bBrEA6T4kO6gI5wvgYj-Im3faTjM')
})(App);
