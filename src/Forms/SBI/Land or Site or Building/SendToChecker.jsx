import React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function SendToChecker() {
  return (
    <Box>
      <h3>
        Once you click button below, this case will be send to Checker and you
        will not be able to make any modifications to it, unless checker sends
        it back.
      </h3>
      <Button variant="contained" color="primary">
        Finish
      </Button>
    </Box>
  );
}

export default SendToChecker;
