import React, { useState } from "react";
import RoomIcon from "@mui/icons-material/Room";

function Marker({ lat, lng }) {
  const [flag, setFlag] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <RoomIcon
        style={{
          position: "adsolute",
          left: "0px",
          top: "0px",
          color: "red",
        }}
      />
      {/* <button
        style={{
          backgroundColor: "transparent",
          borderColor: "transparent",
          padding: "0px",
        }}
        onClick={() => {
          console.log("clicked" + lat + " " + lng);
        }}
        onMouseOver={() => {
          setFlag(true);
        }}
        onMouseOut={() => {
          setFlag(false);
        }}
      >
        <RoomIcon style={{ color: "red" }} />
        {flag && <div>this is my home</div>}
      </button> */}
    </div>
  );
}

export default Marker;
