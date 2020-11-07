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
            <Index />
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
