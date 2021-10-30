import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import BorrowerNameForm from "./BorrowerNameForm";
import ContactNoForm from "./ContactNoForm";

const PopUp = ({ title, popUp, openPopUp, value, setValue }) => {
  const [data, setData] = useState(value);

  useEffect(() => {
    setData(value);
  }, [value]);

  const getComponent = (title) => {
    if (title === "Borrower Names") {
      return (
        <BorrowerNameForm
          fields={data}
          setFields={(values) => setData(values)}
        />
      );
    } else if (title === "Contact No") {
      return (
        <ContactNoForm fields={data} setFields={(values) => setData(values)} />
      );
    }
  };

  return (
    <Dialog open={popUp} maxWidth="md">
      <DialogTitle>
        {title}
        {popUp ? (
          <IconButton
            aria-label="close"
            onClick={() => {
              openPopUp(false);
              setData(value);
            }}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent dividers>{getComponent(title)}</DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          autoFocus
          onClick={() => {
            openPopUp(false);
            setValue(data);
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUp;
