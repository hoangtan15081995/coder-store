import { Stack, Typography, Button, TextField } from "@mui/material";
import React from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <Stack spacing={3} sx={{ width: { md: "350px", xs: "200px" } }}>
      <Typography textAlign="center">
        <Logo />
      </Typography>
      <Typography variant="h4" textAlign="center">
        Login
      </Typography>
      <TextField id="standard-basic" label="Username" variant="standard" />
      <Button onClick={handleOnClick} type="submit" variant="contained">
        Login
      </Button>
    </Stack>
  );
}

export default LoginPage;
