import React from "react";
import { Route, Routes } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
