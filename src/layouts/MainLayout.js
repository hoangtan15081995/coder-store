import React from "react";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainFooter from "./MainFooter";

function MainLayout() {
  return (
    <>
      <Stack sx={{ minHeight: "100vh" }}>
        <MainHeader />
        <Outlet />
        <Box sx={{ flexGrow: 1 }} />
        <MainFooter />
      </Stack>
    </>
  );
}

export default MainLayout;
