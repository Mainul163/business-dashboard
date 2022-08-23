import React from "react";
import { Routes, Route } from "react-router-dom";
import IncomeDetails from "../incomeDetails/IncomeDetails";
import Dashboard from "./../dashboard/Dashboard";
import Earning from "./../earning/Earning";
import IncomeBreakDown from "./../incomeBreakDown/IncomeBreakDown";
import OrderAnalytics from "./../ordersAnalytics/OrderAnalytics";
import ProductList from "./../productList/ProductList";
import NotFound from "./../notFound/NotFound";
const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/orderanalytics" element={<OrderAnalytics />} />
        <Route path="/incomebreakdown" element={<IncomeBreakDown />} />
        <Route path="/incomedetails" element={<IncomeDetails />} />
        <Route path="/earning" element={<Earning />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default Home;
