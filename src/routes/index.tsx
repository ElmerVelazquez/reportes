
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Documents from "../pages/Documents/Documents";
import SideBar from "../components/layouts/Sidebar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="documents" element={<Documents />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;