import { IconButton } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainArea from "./MainArea";
import SideNav from "./SideNav";

const NavBar = () => {
  const [showSideNav, setShowSideNav] = useState(true);
  const [showHamburger, setShowHamburger] = useState(false);

  const hamBurger = (
    <IconButton onClick={() => setShowSideNav(!showSideNav)}>
      <MenuIcon />
    </IconButton>
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setShowHamburger(true);
        setShowSideNav(false);
      } else if (window.innerWidth > 767) {
        setShowHamburger(false);
        setShowSideNav(true);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Router>
        <div className="top-bar">{showHamburger && hamBurger}</div>
        <div>{showSideNav && <SideNav />}</div>
        <div>
          <MainArea />
        </div>
      </Router>
    </div>
  );
};

export default NavBar;
