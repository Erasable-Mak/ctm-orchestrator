import React, { useState } from "react";

import { useAuth } from "../contexts/AuthContext";
import clsx from "clsx";
import { Menu, Close } from "@material-ui/icons";

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
  IconButton,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@material-ui/core";

import AddBank from "./AddBank";
import CreateCase from "./CreateCase";
import UpdateCase from "./UpdateCase";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import AssignTask from "./AssignTask";
import UpdateBankDetails from "./UpdateBankDetails";
import CaseStatus from "./CaseStatus";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}));

export default function Home() {
  const [contentName, setcontentName] = useState("Create User");

  const { currentUser, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const changeContent = (value) => {
    setcontentName(value);
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              className={clsx(classes.menuButton)}
            >
              {!open ? <Menu /> : <Close />}
            </IconButton>
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
          variant="temporary"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open={open}
          onBackdropClick={() => setOpen(false)}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem
                selected={contentName === "Create Case"}
                button
                onClick={() => {
                  changeContent("Create Case");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Create Case" />
              </ListItem>
              <Divider />
              <ListItem
                selected={contentName === "Update Case"}
                button
                onClick={() => {
                  changeContent("Update Case");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Update Case" />
              </ListItem>
              <Divider />
              <ListItem
                selected={contentName === "Create User"}
                button
                onClick={() => {
                  changeContent("Create User");
                  setOpen(false);
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
                  setOpen(false);
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
                  setOpen(false);
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
                  setOpen(false);
                }}
              >
                <ListItemText primary="Assign Task" />
              </ListItem>
              <Divider />
              <ListItem
                selected={contentName === "Update Banks"}
                button
                onClick={() => {
                  changeContent("Update Banks");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Update Banks" />
              </ListItem>
              <Divider />
              <ListItem
                selected={contentName === "Case Status"}
                button
                onClick={() => {
                  changeContent("Case Status");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Case Status" />
              </ListItem>
              <Divider />
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Toolbar />
          {contentName === "Create Case" && <CreateCase />}
          {contentName === "Update Case" && <UpdateCase />}
          {contentName === "Create User" && <CreateUser />}
          {contentName === "Update User" && <UpdateUser />}
          {contentName === "Add Bank Details" && <AddBank />}
          {contentName === "Assign Task" && <AssignTask />}
          {contentName === "Update Banks" && <UpdateBankDetails />}
          {contentName === "Case Status" && <CaseStatus />}
        </Box>
      </Box>
    </>
  );
}
