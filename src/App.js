import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

require("dotenv").config();

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Home/:Username">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
