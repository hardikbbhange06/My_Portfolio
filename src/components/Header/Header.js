import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Header.css"
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{backgroundColor:"#00C9F3" }}>
        <Typography variant="h6" component="div">
          <div className="waviy">
            <span style={{ "--i": 1 }}>M</span>
            <span style={{ "--i": 2 }}>Y</span>
            <br />
            <span style={{ "--i": 3 }}>P</span>
            <span style={{ "--i": 4 }}>O</span>
            <span style={{ "--i": 5 }}>R</span>
            <span style={{ "--i": 6 }}>T</span>
            <span style={{ "--i": 7 }}>F</span>
            <span style={{ "--i": 8 }}>O</span>
            <span style={{ "--i": 9 }}>L</span>
            <span style={{ "--i": 10 }}>I</span>
            <span style={{ "--i": 10 }}>O</span>
          </div>

          {/* My Portfolio */}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
