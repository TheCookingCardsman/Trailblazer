import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import MapView from './Components/MapView.js';
import FinalView from './Components/FinalView.js';
const axios = require('axios');

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <FinalView />
          </Route>

          <Route path="/discover">
            <FinalView />
          </Route>

          <Route path="/map-view">
            <MapView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
