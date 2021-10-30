import React, { useState } from "react";
import { TextField } from "@mui/material";
import PopUp from "./PopUp";

const ClickableTextFieldComp = ({ id, name, value, setValue }) => {
  const [popUp, openPopUp] = useState(false);

  const displayValue = (name) => {
    const values = [];

    if (name === "Borrower Names") {
      value.map((ele) => values.push(`${ele.title} ${ele.fullName}`));
    } else if (name === "Contact No") {
      value.map((ele) => values.push(ele));
    }

    return values.join("/");
  };

  return (
    <>
      <TextField
        sx={{
          m: 1,
          width: "30ch",
        }}
        id={id}
        value={displayValue(name)}
        label={name}
        variant="outlined"
        onClick={() => openPopUp(true)}
      />
      <PopUp
        title={name}
        popUp={popUp}
        openPopUp={openPopUp}
        value={value}
        setValue={setValue}
      />
    </>
  );
};

export default ClickableTextFieldComp;
