import React, { useState } from "react";

import TechInitiation from "./TechInitiation";
import Images from "./Images";
import Valuation from "./Valuation";

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

const Demo = () => {
  const [contentName, setcontentName] = useState("Tech Initiation");

  const changeContent = (value) => {
    setcontentName(value);
  };

  return (
    <div>
      {" "}
      <Box>
        <List sx={{ display: "flex", alignItems: "center" }}>
          <ListItem
            selected={contentName === "Tech Initiation"}
            button
            onClick={() => {
              changeContent("Tech Initiation");
            }}
          >
            <ListItemText primary="Tech Initiation" />
          </ListItem>
          <Divider orientation="vertical" flexItem />
          <ListItem
            selected={contentName === "Images"}
            button
            onClick={() => {
              changeContent("Images");
            }}
          >
            <ListItemText primary="Images" />
          </ListItem>
          <Divider orientation="vertical" flexItem />
          <ListItem
            selected={contentName === "Valuation"}
            button
            onClick={() => {
              changeContent("Valuation");
            }}
          >
            <ListItemText primary="Valuation" />
          </ListItem>
          <Divider orientation="vertical" flexItem />
        </List>
      </Box>
      {contentName === "Tech Initiation" && <TechInitiation />}
      {contentName === "Images" && <Images />}
      {contentName === "Valuation" && <Valuation />}
    </div>
  );
};

export default Demo;
