import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Index from './Components/Index.js';
import MapView from './Components/MapView.js';
import FinalView from './Components/FinalView.js';

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <FinalView />
          </Route>

          <Route path="/map-view" render={(props) => (
            <MapView 
            {...props}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAN2xbYu8DmKyaI_CLnrvevrC2yHNgi3U&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `1000px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
          )}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
