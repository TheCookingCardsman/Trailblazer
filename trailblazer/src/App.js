import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Card from './Components/TrailCard.js';
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

          <Route path="/trails">
            <p>hello</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
