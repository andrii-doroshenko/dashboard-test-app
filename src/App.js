import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "Layout";
import Customers from "pages/CustomersPage/CustomersPage";
import NotFoundPage from "pages/404/404";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<h1>Dashboad</h1>} />
        <Route path="/customers" element={<Customers />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
