import React from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Input,
  Tag,
  Space,
  Table,
  Popover,
} from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
const ProductList = () => {
  const layout = {
    labelCol: {
      xs: { span: 20 },
      sm: { span: 4 },
      md: { span: 3 },
      lg: { span: 6 },
      xl: { span: 8 },
      xxl: { span: 8 },
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
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (id) => <Tag color="magenta">{id}</Tag>,
    },
    {
      title: "Product Name",
      dataIndex: "productname",
      key: "productname",
      render: (productname) => <Tag color="red">{productname}</Tag>,
    },

    {
      title: "Product Price",
      dataIndex: "productprice",
      key: "productprice",
      render: (productprice) => <Tag color="volcano">{productprice}</Tag>,
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
      render: (quantity) => <Tag color="gold">{quantity}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Popover content="update product" trigger="hover">
            {" "}
            <FormOutlined style={{ color: "blue" }} />
          </Popover>
          <Popover content="Delete product" trigger="hover">
            {" "}
            <DeleteOutlined style={{ color: "red" }} />{" "}
          </Popover>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      id: 1001,
      productname: "John Brown",
      productprice: 32,
      quantity: 200,
    },
    {
      key: "2",
      id: 1002,
      productname: "John Brown",
      productprice: 32,
      quantity: 200,
    },
    {
      key: "3",
      id: 1003,
      productname: "John Brown",
      productprice: 32,
      quantity: 200,
    },
    {
      key: "4",
      id: 1004,
      productname: "John Brown",
      productprice: 32,
      quantity: 200,
    },
  ];
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "bold" }}>Product List</h2>
      </div>

      <Row style={{ marginTop: "80px" }} gutter={[{ md: 8, lg: 8 }, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11}>
          <Table columns={columns} dataSource={data} />
        </Col>

        <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11}>
          <div style={{ textAlign: "center", marginLeft: "70px" }}>
            <h2 style={{ fontWeight: "bold" }}> Product List Information</h2>
          </div>
          <Form
            {...layout}
            onFinish={onFinish}
            layout="horizontal"
            initialValues={{
              size: "large",
            }}
            size="large"
          >
            <Form.Item
              label="Product Name"
              name="productname"
              rules={[
                { required: true, message: "Please Fill Up Your Input!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Product Price"
              name="productprice"
              rules={[
                { required: true, message: "Please Fill Up Your Input!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[
                { required: true, message: "Please Fill Up Your Input!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ProductList;
