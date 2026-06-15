import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Homepage */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Dynamic Service Page */}
      <Route
        path="/services/:slug"
        element={<ServiceDetails />}
      />

    </Routes>
  );
}