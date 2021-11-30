import React, { useState } from "react";
import DefaultPage from "./DefaultPage";
import DocumentReferred from "./DocumentReferred";
// import {MMSheet1} from "./MMSheet1";
import MMSheet from "./MMSheet"

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
import LogoutIcon from "@mui/icons-material/Logout";

import { useAuth } from "../contexts/AuthContext";

const drawerWidth = 240;

export default function Home() {
  const [contentName, setcontentName] = useState("Default Page");

  const { currentUser, logout } = useAuth();

  const changeContent = (value) => {
    setcontentName(value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Makarand Rajendra
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex" } }}>
            <Typography variant="h6" noWrap component="div">
              {currentUser?.email}
            </Typography>
            <Button
              style={{ marginLeft: "10px" }}
              variant="contained"
              color="error"
              startIcon={<LogoutIcon />}
              onClick={() => logout()}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem
              selected={contentName === "Default Page"}
              button
              onClick={() => {
                changeContent("Default Page");
              }}
            >
              <ListItemText primary="Default Page" />
            </ListItem>
            <Divider />
            <ListItem
              selected={contentName === "Document Referred"}
              button
              onClick={() => {
                changeContent("Document Referred");
              }}
            >
              <ListItemText primary="Document Referred" />
            </ListItem>
            <Divider />
            <ListItem
              selected={contentName === "MM Sheet"}
              button
              onClick={() => {
                changeContent("MM Sheet");
              }}
            >
              <ListItemText primary="MM Sheet" />
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {contentName === "Default Page" && <DefaultPage />}
        {contentName === "Document Referred" && <DocumentReferred />}
        {contentName === "MM Sheet" && <MMSheet />}
      </Box>
    </Box>
  );
}
