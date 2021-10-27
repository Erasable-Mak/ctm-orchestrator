import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import AddBank from "./AddBank";
import CreateCase from "./CreateCase";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

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
                changeContent("Create Case");
              }}
            >
              <ListItemText primary="Create Case" />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                changeContent("Create User");
              }}
            >
              <ListItemText primary="Create User" />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                changeContent("Update User");
              }}
            >
              <ListItemText primary="Update User" />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                changeContent("Add Bank Details");
              }}
            >
              <ListItemText primary="Add Bank Details" />
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
      </Box>
    </Box>
  );
}
