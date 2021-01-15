import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "@material-ui/core/Button";
import App from "./pages/App";
import Work from "./pages/how_works";
import Version from "./components/versions.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VersionSearch from './pages/VersionSearch'
import {useStyles, CheckboxesGroup} from './pages/VersionSearch2';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pages/how_works">How Inteliband Works</Link>
            </li>
            <li>
              <Link to="/components/versions.js">Versions</Link>
            </li>
            <li>
              <Link to="/VersionsSearch">Version Search</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/VersionSearch2">Search Version Color</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Button}>
            <App />
          </Route>
          <Route path="/pages/how_works" component={Button}>
            <Work />
          </Route>
          <Route path="/components/versions.js" component={Button}>
            <Version />
          </Route>
          <Route path="/VersionsSearch" component={VersionSearch} />
          <Route path="/pages/VersionSearch2" component={Button}>
            
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
