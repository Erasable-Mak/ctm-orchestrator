import "./App.css";
import AssignQueue from "./pages/AssignQueue";
import InitiateNewVisit from "./pages/InitiateNewVisit";
import ValuerAssignedJobs from "./pages/ValuerAssignedJobs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <NavBar />
        <div className="inner-wrapper">
          <SideNav />
          <div className="main-content">
            <Switch>
              <Route path="/assignQueue" exact component={AssignQueue} />
              <Route
                path="/initiateNewVisit"
                exact
                component={InitiateNewVisit}
              />
              <Route
                path="/valuerAssignedJobs"
                exact
                component={ValuerAssignedJobs}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
