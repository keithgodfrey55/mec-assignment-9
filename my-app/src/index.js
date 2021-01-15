import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "@material-ui/core/Button";
import App from "./pages/App";
import Work from "./pages/how_works";
import SignUp from "./pages/sign-up";
import Version from "./components/versions.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VersionSearch from './pages/VersionSearch'
import Feedback from "./components/feedback.js";
import { CheckboxesGroup } from './pages/VersionSearch2';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Button>
              <Link to="/sign_up">Sign Up</Link>
              </Button>
            </li>
            <li>
                <Button>
              <Link to="/pages/how_works">How Inteliband Works</Link>
                </Button>
            </li>
            <li>
              <Button>
              <Link to="/components/versions">Versions</Link>
              </Button>
            </li>
            <li>
            <Button>
              <Link to="/VersionsSearch">Version Search</Link>
              </Button>
            </li>
            
            <li>
              <Button>
                <Link to="/components/feedback">Feedback</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link to="/pages/VersionSearch2">Search Version Color</Link>
              </Button>
            </li>
            <li>
              <Button>
              <Link to="/">Home</Link>
              </Button>
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
          <Route path="/components/versions" component={Button}>
            <Version />
          </Route>
          <Route path="/VersionsSearch" component={VersionSearch} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/components/feedback" component={Feedback} />
          <Route path="/pages/VersionSearch2" component={CheckboxesGroup} />
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
