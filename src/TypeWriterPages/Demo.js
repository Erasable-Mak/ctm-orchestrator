import React, { useState } from "react";
import TechInitiation from "./TechInitiation";
import Images from "./Images";
import MMSheet from "./MMSheet";
import DocumentReferred from "./DocumentReferred";
import Valuation from "./Valuation";
import PhysicalInspectionI from "./PhysicalnspectionI";
import PhysicalInspectionII from "./PhysicalnspectionII";
import CaseStatus from "./CaseStatus";

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
            selected={contentName === "MM sheet"}
            button
            onClick={() => {
              changeContent("MM sheet");
            }}
          >
            <ListItemText primary="MM sheet" />
          </ListItem>

          <Divider orientation="vertical" flexItem />
          <ListItem
            selected={contentName === "Document Reffered"}
            button
            onClick={() => {
              changeContent("Document Reffered");
            }}
          >
            <ListItemText primary="Document Reffered" />
          </ListItem>
          <Divider orientation="vertical" flexItem />
          <ListItem
            selected={contentName === "Physical inspection 1"}
            button
            onClick={() => {
              changeContent("Physical inspection 1");
            }}
          >
            <ListItemText primary="Physical inspection 1" />
          </ListItem>
          <Divider orientation="vertical" flexItem />
          <ListItem
            selected={contentName === "Physical inspection 2"}
            button
            onClick={() => {
              changeContent("Physical inspection 2");
            }}
          >
            <ListItemText primary="Physical inspection 2" />
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
          <ListItem
            selected={contentName === "Case Status"}
            button
            onClick={() => {
              changeContent("Case Status");
            }}
          >
            <ListItemText primary="Case Status" />
          </ListItem>
        </List>
      </Box>
      {contentName === "Tech Initiation" && <TechInitiation />}
      {contentName === "Images" && <Images />}
      {contentName === "MM sheet" && <MMSheet />}
      {contentName === "Document Reffered" && <DocumentReferred />}
      {contentName === "Physical inspection 1" && <PhysicalInspectionI />}
      {contentName === "Physical inspection 2" && <PhysicalInspectionII />}
      {contentName === "Valuation" && <Valuation />}
      {contentName === "Case Status" && <CaseStatus />}
    </div>
  );
};

export default Demo;
