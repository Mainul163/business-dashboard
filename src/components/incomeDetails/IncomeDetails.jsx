import React from "react";
import { Column } from '@ant-design/plots';
import { Row, Col, Form, Button, Select, Input, DatePicker, Tag } from 'antd';
import TableComponent from './../table/Table';
const IncomeDetails = () => {
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

  const data = [
    {
      name: 'London',
      year: 2020,
      月均降雨量: 18.9,
    },
    {
      name: 'London',
      year: 2021,
      value: 28.8,
    },
    {
      name: 'London',
      year: 2022,
      value: 39.3,
    },
    {
      name: 'Berlin',
      year: 2019,
      value: 34.5,
    },
    {
      name: 'Berlin',
      year: 2020,
      value: 99.7,
    },
    {
      name: 'Berlin',
      year: 2021,
      value: 52.6,
    },
    {
      name: 'Berlin',
      year: 2022,
      value: 35.5,
    },
  ]
  const config = {
    data,
    isGroup: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'name',

    
    label: {
    
      position: 'middle',
      
      layout: [
     
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        }, 
        {
          type: 'adjust-color',
        },
      ],
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
      title: 'Total Income',
      dataIndex: 'totalincome',
      key: 'totalincome',
      render: (totalOrder) => <Tag color="orange">{totalOrder}</Tag>,
    },{
      title: 'Pending',
      dataIndex: 'pending',
      key: 'pending',
      render: (cancelOrder) => <Tag color="red">{cancelOrder}</Tag>,
    },]

    const dataSource=[
      {
        key:1,
        year:2020,
        totalincome:1202,
        pending:120
      },
      {
        key:2,
        year:2020,
        totalincome:1202,
        pending:120
      },
      {
        key:3,
        year:2020,
        totalincome:1202,
        pending:120
      }
    ]
  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "bold" }}>Income Details</h2>
      </div>


      <Row style={{ marginTop: '80px' }} gutter={[{ md: 8, lg: 8 }, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11}>
        <Column {...config} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11} >
          <div style={{ textAlign: 'center', marginLeft: '70px' }}>
            <h2 style={{ fontWeight: "bold" }}> Income Details Information</h2>
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
                <Select.Option value="total order">Total Income</Select.Option>
                <Select.Option value="cancel order">Pending</Select.Option>
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
        <TableComponent columns={columns} data={dataSource} headerText={'Income Details Tablee'}/>
        </Col>
      </Row>
    </div>
  );
};

export default IncomeDetails;
