import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { OrgProvider } from "./org-context";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";

export const App = () => {
  return (
    <OrgProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </OrgProvider>
  );
};