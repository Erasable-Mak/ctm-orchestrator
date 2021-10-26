import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import CreateCase from "./CreateCase";
import UpdateUser from "./UpdateUser";
import AddBank from "./AddBank";
import CreateUser from "./CreateUser";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [contentName, setcontentName] = useState("Create User");

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
              button
              onClick={() => {
                changeContent("Create case");
              }}
            >
              <ListItemText primary="Create case" />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                changeContent("Create user");
              }}
            >
              <ListItemText primary="Create user" />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                changeContent("Update user");
              }}
            >
              <ListItemText primary="Update user" />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                changeContent("Add bank details");
              }}
            >
              <ListItemText primary="Add bank details" />
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {contentName === "Create case" && <CreateCase />}
        {contentName === "Create user" && <CreateUser />}
        {contentName === "Update user" && <UpdateUser />}
        {contentName === "Add bank details" && <AddBank />}
      </Box>
    </Box>
  );
}
