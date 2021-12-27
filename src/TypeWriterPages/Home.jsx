import React, { useState } from "react";
import DefaultPage from "./DefaultPage";
import Demo from "./Demo";
import LiveVisit from "./LiveVisit";
import clsx from "clsx";

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

import { useAuth } from "../contexts/AuthContext";
import { makeStyles, useTheme } from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";

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
  const [contentName, setcontentName] = useState("DefaultPage");
  const classes = useStyles();
  const theme = useTheme();
  const { currentUser, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const changeContent = (value) => {
    setcontentName(value);
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
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
              selected={contentName === "Demo"}
              button
              onClick={() => {
                changeContent("Demo");
                setOpen(false);
              }}
            >
              <ListItemText primary="Demo" />
            </ListItem>
            <Divider />
            <ListItem
              selected={contentName === "DefaultPage"}
              button
              onClick={() => {
                changeContent("DefaultPage");
                setOpen(false);
              }}
            >
              <ListItemText primary="DefaultPage" />
            </ListItem>
            <Divider />
            <ListItem
              selected={contentName === "LiveVisit"}
              button
              onClick={() => {
                changeContent("LiveVisit");
                setOpen(false);
              }}
            >
              <ListItemText primary="LiveVisit" />
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
        {contentName === "DefaultPage" && <DefaultPage />}
        {contentName === "Demo" && <Demo />}
        {contentName === "LiveVisit" && <LiveVisit />}
      </Box>
    </Box>
  );
}
