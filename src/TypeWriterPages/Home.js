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
import LogoutIcon from "@mui/icons-material/Logout";

import { useAuth } from "../contexts/AuthContext";

const drawerWidth = 240;

export default function Home() {
  const [contentName, setcontentName] = useState("Tech Initiation");

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
              selected={contentName === "Tech Initiation"}
              button
              onClick={() => {
                changeContent("Tech Initiation");
              }}
            >
              <ListItemText primary="Tech Initiation" />
            </ListItem>
            <Divider />
            <ListItem
              selected={contentName === "Images"}
              button
              onClick={() => {
                changeContent("Images");
              }}
            >
              <ListItemText primary="Images" />
            </ListItem>
            <Divider />
            <ListItem
              selected={contentName === "Valuation"}
              button
              onClick={() => {
                changeContent("Valuation");
              }}
            >
              <ListItemText primary="Valuation" />
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {contentName === "Tech Initiation" && <TechInitiation />}
        {contentName === "Images" && <Images />}
        {contentName === "Valuation" && <Valuation />}
      </Box>
    </Box>
  );
}
