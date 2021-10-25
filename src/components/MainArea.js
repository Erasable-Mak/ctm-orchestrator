import React from "react";
import { Route } from "react-router";
import AssignQueue from "../pages/AssignQueue";
import InitiateNewVisit from "../pages/InitiateNewVisit";
import ValuerAssignedJobs from "../pages/ValuerAssignedJobs";

const MainArea = () => {
  return (
    <div className="main">
      <Route path="/AssignQueue" exact={true} component={AssignQueue} />
      <Route
        path="/InitiateNewVisit"
        exact={true}
        component={InitiateNewVisit}
      />
      <Route
        path="/ValuerAssignedJobs"
        exact={true}
        component={ValuerAssignedJobs}
      />
    </div>
  );
};

export default MainArea;
