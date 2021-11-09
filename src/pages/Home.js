import React, { useState } from "react";

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

import AddBank from "./AddBank";
import CreateCase from "./CreateCase";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import AssignTask from "./AssignTask";

import { useAuth } from "../contexts/AuthContext";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [contentName, setcontentName] = useState("Create User");

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
          <Typography variant="h6" noWrap component="div">
            {currentUser?.email}
          </Typography>
          <Button
            variant="contained"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={() => logout()}
          >
            Logout
          </Button>
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
              selected={contentName === "Create Case"}
              button
              onClick={() => {
                changeContent("Create Case");
              }}
            >
              <ListItemText primary="Create Case" />
            </ListItem>
            <Divider />
            <ListItem
              selected={contentName === "Create User"}
              button
              onClick={() => {
                changeContent("Create User");
              }}
            >
              <ListItemText primary="Create User" />
            </ListItem>
            <Divider />
            <ListItem
              selected={contentName === "Update User"}
              button
              onClick={() => {
                changeContent("Update User");
              }}
            >
              <ListItemText primary="Update User" />
            </ListItem>
            <Divider />
            <ListItem
              selected={contentName === "Add Bank Details"}
              button
              onClick={() => {
                changeContent("Add Bank Details");
              }}
            >
              <ListItemText primary="Add Bank Details" />
            </ListItem>
            <Divider />
            <ListItem
              selected={contentName === "Assign Task"}
              button
              onClick={() => {
                changeContent("Assign Task");
              }}
            >
              <ListItemText primary="Assign Task" />
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {contentName === "Create Case" && <CreateCase />}
        {contentName === "Create User" && <CreateUser />}
        {contentName === "Update User" && <UpdateUser />}
        {contentName === "Add Bank Details" && <AddBank />}
        {contentName === "Assign Task" && <AssignTask />}
      </Box>
    </Box>
  );
}
