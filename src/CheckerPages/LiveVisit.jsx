import React, { useState } from "react";
import ShowVisitStatus from "./ShowVisitStatus";
import Report from "./Report";

const LiveVisit = () => {
  //if tableOn is true => show table
  //when tableOn is false => show form
  //tableOn is toggled by clicking on the button in table on LiveVisit Page
  const [VisitVariables, setVisitVariables] = useState({ tableOn: true });

  //this state var store everythig related to the selected case
  const [SelectedCaseDetails, setSelectedCaseDetails] = useState({});

  return (
    <div>
      {VisitVariables.tableOn ? (
        <ShowVisitStatus
          setVisitVariables={setVisitVariables}
          setSelectedCaseDetails={setSelectedCaseDetails}
        />
      ) : (
        <Report
          VisitVariables={VisitVariables}
          setVisitVariables={setVisitVariables}
          SelectedCaseDetails={SelectedCaseDetails}
          setSelectedCaseDetails={setSelectedCaseDetails}
        />
      )}
    </div>
  );
};

export default LiveVisit;
