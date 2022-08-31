import React from "react";
import "./LeftNav.css";
import {
  AreaChartOutlined,
  LineChartOutlined,
  BarChartOutlined,
  RiseOutlined,
  PieChartOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import Dashboard from "./../dashboard/Dashboard";
import Earning from "./../earning/Earning";
import IncomeBreakDown from "../incomeBreakDown/IncomeBreakDown";
import IncomeDetails from "../incomeDetails/IncomeDetails";
import OrderAnalytics from "../ordersAnalytics/OrderAnalytics";
import ProductList from "../productList/ProductList";

const LeftNav = () => {
  return (
    <div className="leftNavColor">
      <div style={{ paddingTop: "30px" }}>
        <NavLink
          to="/"
          element={Dashboard}
          className={(navData) => (navData.isActive ? "active" : "link")}
        >
          <AreaChartOutlined /> Dashboard
        </NavLink>
        <br />
        <br />
        <NavLink
          to="/orderanalytics"
          element={OrderAnalytics}
          className={(navData) => (navData.isActive ? "active" : "link")}
        >
          <LineChartOutlined /> Order Analytics
        </NavLink>

        <br />
        <br />
        <NavLink
          to="/incomebreakdown"
          element={IncomeBreakDown}
          className={(navData) => (navData.isActive ? "active" : "link")}
        >
          <PieChartOutlined /> Income Break Down
        </NavLink>
        <br />
        <br />
        <NavLink
          to="/incomedetails"
          element={IncomeDetails}
          className={(navData) => (navData.isActive ? "active" : "link")}
        >
          <BarChartOutlined />  Income Details
        </NavLink>
        <br />
        <br />
        <NavLink
          to="/earning"
          element={Earning}
          className={(navData) => (navData.isActive ? "active" : "link")}
        >
          <RiseOutlined /> Earning
        </NavLink>
        <br />
        <br />

        <NavLink
          to="/productlist"
          element={ProductList}
          className={(navData) => (navData.isActive ? "active" : "link")}
        >
          <BarsOutlined /> Product List
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNav;
