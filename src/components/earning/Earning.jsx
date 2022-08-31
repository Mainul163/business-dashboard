import React from "react";
import { Pie } from '@ant-design/plots';
import { Row, Col, Form, Button,  Input, DatePicker,Tag } from 'antd';
import TableComponent from './../table/Table';
const Earning = () => {
  
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
      year: 2021,
      value: 27,
    },
    {
      year: 2022,
      value: 25,
    },
    {
      year: 2022,
      value: 55,
    },
    {
      year: 2020,
      value: 18,
    },]

    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'year',
      radius: 1,
      innerRadius: 0.6,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
      },
      interactions: [
        {
          type: 'element-selected',
        },
        {
          type: 'element-active',
        },
      ],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          content: 'Details',
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
      title: 'Earning',
      dataIndex: 'earning',
      key: 'earning',
      render: (income) => <Tag color="orange">{income}</Tag>,
    }]
    const dataSource=[
      {
        key:1,
        year:2020,
        earning:1202,
       
      },
      {
        key:2,
        year:2020,
        earning:1202,
       
      },
      {
        key:3,
        year:2020,
        earning:1202,
      
      }
    ]
  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "bold" }}>Earning</h2>
      </div>



      <Row style={{ marginTop: '80px' }} gutter={[{ md: 8, lg: 8 }, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11}>
        <Pie {...config} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11} >
       <div style={{textAlign:'center',marginLeft:'70px'}}>
       <h2 style={{ fontWeight: "bold" }}> Earning Information</h2>
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
      </Row>
      <Row justify="center" style={{marginTop:'100px'}}>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11}>
        <TableComponent columns={columns} data={dataSource} headerText={'Earning Table'}/>
        </Col>
      </Row>
    </div>
  );
};

export default Earning;
