import { Box } from "@mui/material";
import React from "react";
import logo from "../components/logo.png";

function Logo() {
  return (
    <Box>
      <img src={logo} alt="logo" width="50px" />
    </Box>
  );
}

export default Logo;
