import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import Meditations from "../pages/Meditations";
import Meditation from "../pages/Meditation";
import NotFound from "../pages/NotFound";
import Practices from "../pages/Practices";
import Login from "../pages/Login";
import UserRoute from "../components/UserRoute";
import PublicRoute from "../components/PublicRoute";
import MeditationV from "../pages/MeditationV";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <UserRoute>
            <Dashboard />
          </UserRoute>
        }
      />
      <Route
        path="/cuenta"
        element={
          <UserRoute>
            <Account />
          </UserRoute>
        }
      />
      <Route
        path="/meditaciones"
        element={
          <UserRoute>
            <Meditations />
          </UserRoute>
        }
      />
      <Route
        path="/meditaciones/:id"
        element={
          <UserRoute>
            <Meditation />
          </UserRoute>
        }
      />
      <Route
        path="/meditaciones-v/:id"
        element={
          <UserRoute>
            <MeditationV />
          </UserRoute>
        }
      />
      <Route
        path="/practicas"
        element={
          <UserRoute>
            <Practices />
          </UserRoute>
        }
      />
      <Route
        path="/*"
        element={
          <UserRoute>
            <NotFound />
          </UserRoute>
        }
      />
    </Routes>
  );
};

export default Router;
