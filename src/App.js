import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "Layout";
import Customers from "pages/CustomersPage/CustomersPage";
import NotFoundPage from "pages/404/404";
import DashboardPage from "pages/DashboadPage/DashboardPage";
import ProductsPage from "pages/ProductsPage/ProductsPage";
import IncomePage from "pages/IncomePage/IncomePage";
import PromotePage from "pages/PromotePage/PromotePage";
import HelpPage from "pages/HelpPage/HelpPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/promote" element={<PromotePage />} />
        <Route path="/help" element={<HelpPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
