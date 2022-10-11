import React,{useState} from 'react';
import { Drawer ,Space} from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import {
    AreaChartOutlined,
    LineChartOutlined,
    BarChartOutlined,
    RiseOutlined,
    PieChartOutlined,
    BarsOutlined,
  } from "@ant-design/icons";
  import { NavLink } from "react-router-dom";
import './Drawer.css'
import Dashboard from './../dashboard/Dashboard';
import OrderAnalytics from './../ordersAnalytics/OrderAnalytics';
import IncomeBreakDown from './../incomeBreakDown/IncomeBreakDown';
import IncomeDetails from './../incomeDetails/IncomeDetails';
import Earning from './../earning/Earning';
import ProductList from './../productList/ProductList';
const DrawerItem = ({open,setOpen,onClose}) => {
    // const [close, setClose] = useState(false);




  

 
 
    return (
        <div>
     <Drawer
                title="Business Dashboard"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={open}
                extra={
                    <Space>
                      <LeftCircleOutlined onClick={onClose} style={{color:"red",fontSize:'30px'}}/> 
                 
                    </Space>
                  }
            >
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
            </Drawer>

          
        </div>
    );
};

export default DrawerItem;