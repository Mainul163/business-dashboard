import React from "react";
import { Pie } from '@ant-design/plots';
import { Row, Col, Form, Button,  Input, DatePicker,Tag } from 'antd';
import TableComponent from './../table/Table';
const IncomeBreakDown = () => {

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
      type: '2016',
      value: 27,
    },
    {
      type: '2017',
      value: 25,
    },
    {
      type: '2018',
      value: 18,
    },
    {
      type: '2020',
      value: 15,
    },
    {
      type: '2021',
      value: 10,
    },]
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.8,
      label: {
        type: 'outer',
      },
      interactions: [
        {
          type: 'element-active',
        },
      ],
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
        title: 'Income',
        dataIndex: 'income',
        key: 'income',
        render: (income) => <Tag color="orange">{income}</Tag>,
      }]
      const dataSource=[
        {
          key:1,
          year:2020,
          income:1202,
         
        },
        {
          key:2,
          year:2020,
          income:1202,
         
        },
        {
          key:3,
          year:2020,
          income:1202,
        
        }
      ]
  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "bold" }}>Income Break Down</h2>
      </div>

      <Row style={{ marginTop: '80px' }} justify='center' gutter={[{ md: 8, lg: 8 }, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11}>
        <Pie {...config} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11} >
       <div style={{textAlign:'center',marginLeft:'70px'}}>
       <h2 style={{ fontWeight: "bold" }}> Income Break Down Information</h2>
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
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11}  style={{marginTop:'40px'}}>
        <TableComponent columns={columns} data={dataSource} headerText={'Income Break Down Table'}/>
        </Col>
      </Row>
     
   
    </div>
  );
};

export default IncomeBreakDown;
