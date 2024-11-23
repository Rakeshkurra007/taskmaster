import React from "react";
import { Typography } from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Typography variant="h4" component="h1" color="white" align="center">
        TaskMaster
      </Typography>
      <Typography variant="subtitle1" color="white" align="center">
        Manage your tasks efficiently
      </Typography>
    </div>
  );
};

export default Header;
