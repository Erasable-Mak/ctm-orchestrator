import React from "react";
// import React from 'react';
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import "../App.css";

import SBI from "../Forms/SBI";
import SBI87 from "../Forms/SBI87";

import Loader from "../components/Loader";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Total Allocation of the Month
      </Typography>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        2
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">See details....</Button>
    </CardActions>
  </React.Fragment>
);

function DefaultPage() {
  return (
    <Box>
      <div className="card">
        <Box className="card-box" sx={{ minWidth: 257 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
        <Box className="card-box" sx={{ minWidth: 257 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
        <Box className="card-box" sx={{ minWidth: 257 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
        <Box className="card-box" sx={{ minWidth: 257 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
      <SBI />
      <SBI87/>
      <Loader />
    </Box>
  );
}

export default DefaultPage;
