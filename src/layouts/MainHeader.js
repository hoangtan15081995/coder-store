import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Logo />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coder-Store
          </Typography>
          <Link to="/login">
            <Button variant="outlined" color="inherit">
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default MainHeader;
