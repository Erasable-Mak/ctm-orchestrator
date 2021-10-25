import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="side-bar">
      <ul className="side-bar__lists">
        <li className="side-bar__list">
          <Link to="/initiateNewVisit">Initiate New Visit</Link>
        </li>
        <li className="side-bar__list">
          <Link to="/assignQueue">Assign Queue</Link>
        </li>
        <li className="side-bar__list">
          <Link to="/valuerAssignedJobs">Valuer Assigned Jobs</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
