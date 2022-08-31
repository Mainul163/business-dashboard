import React from "react";
import { Line } from "@ant-design/plots";
import { Row, Col, Form, Button, Select, Input, DatePicker,Tag } from 'antd';
import TableComponent from "../table/Table";
import './OrderAnalytics.css'
const OrderAnalytics = () => {
  const data = [{
    "name": "United Kingdom",
    "year": "2001",
    "gdp": 1640246149417.01
  },
  {
    "name": "United Kingdom",
    "year": "2002",
    "gdp": 1784473920863.31
  },
  {
    "name": "United Kingdom",
    "year": "2003",
    "gdp": 2053018775510.2
  },
  {
    "name": "United Kingdom",
    "year": "2004",
    "gdp": 2416931526913.22
  },
  {
    "name": "United States",
    "year": "2009",
    "gdp": 14448933025000
  },
  {
    "name": "United States",
    "year": "2010",
    "gdp": 14992052727000
  },
  {
    "name": "United States",
    "year": "2011",
    "gdp": 15542581104000
  },
  {
    "name": "United States",
    "year": "2012",
    "gdp": 16197007349000
  },
  {
    "name": "United States",
    "year": "2013",
    "gdp": 16784849190000
  },
  {
    "name": "United States",
    "year": "2014",
    "gdp": 17521746534000
  },
  {
    "name": "United States",
    "year": "2015",
    "gdp": 18219297584000
  },
  {
    "name": "United States",
    "year": "2016",
    "gdp": 18707188235000
  },
  {
    "name": "United States",
    "year": "2017",
    "gdp": 19485393853000
  },
  {
    "name": "United States",
    "year": "2018",
    "gdp": 20544343456936.5
  },
  {
    "name": "United Kingdom",
    "year": "2000",
    "gdp": 1657816613708.58
  },];
  const config = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };
  const layout = {
    labelCol: {
      xs: { span: 20 },
      sm: { span: 4 },
      md: { span: 3 },
      lg: { span: 6 },
      xl: { span: 8 },
      xxl: { span: 8 }

    },
    wrapperCol: {
      md: { span: 16 },
      lg: { span: 16 },

      span: 16,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 4,
      },
      md: {
        span: 3,
        offset: 3,
      },
      lg: {
        span: 10,
        offset: 6,
      },
      xl: {
        span: 10,
        offset: 8,
      },
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      render: (year) => <Tag color="magenta">{year}</Tag>,
    },{
      title: 'Total Order',
      dataIndex: 'totalOrder',
      key: 'totalOrder',
      render: (totalOrder) => <Tag color="orange">{totalOrder}</Tag>,
    },{
      title: 'Cancel Order',
      dataIndex: 'cancelOrder',
      key: 'cancelOrder',
      render: (cancelOrder) => <Tag color="red">{cancelOrder}</Tag>,
    },]
    const dataSource=[
      {
        key:1,
        year:2020,
        totalOrder:1202,
        cancelOrder:120
      },
      {
        key:2,
        year:2020,
        totalOrder:1202,
        cancelOrder:120
      },
      {
        key:3,
        year:2020,
        totalOrder:1202,
        cancelOrder:120
      }
    ]
  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "bold" }}> Order Analytics</h2>
      </div>
      <Row style={{ marginTop: '80px' }} gutter={[{ md: 8, lg: 8 }, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11}>
          <Line {...config} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11} >
       <div style={{textAlign:'center'}}>
       <h2 style={{ fontWeight: "bold" }}> Order Analytics Information</h2>
       </div>
          <Form
            {...layout}
            onFinish={onFinish}
            layout="horizontal"
            initialValues={{
              size: 'large',
            }}

            size='large'
          >

            <Form.Item label="Order Type" name='orderType' rules={[{ required: true, message: 'Please Fill Up Your Option!' }]}>
              <Select>
                <Select.Option value="total order">Total Order</Select.Option>
                <Select.Option value="cancel order">Cancel Order</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Amount" name='amount' rules={[{ required: true, message: 'Please Fill Up Your Input!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Year" name='year' rules={[{ required: true, message: 'Please Fill Up Your Input!' }]}>
              <DatePicker picker="year" />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row justify="center" style={{marginTop:'100px'}}>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11}>
        <TableComponent columns={columns} data={dataSource} headerText={'Order Analytics Tablee'}/>
        </Col>
      </Row>
    </div>
  );
};

export default OrderAnalytics;
