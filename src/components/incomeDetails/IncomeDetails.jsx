import React, { useEffect,useState } from "react";
import { Column } from '@ant-design/plots';
import { Row, Col, Form, Button, Select, Input, DatePicker, Tag } from 'antd';
import TableComponent from './../table/Table';
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { get_dataOfIncomeDetails, post_dataOfIncomeDetails } from "../../dataStore/incomeDetails/IncomeDetailsAction";
import errorMessage from './../message/ErrorMessage';
import PaginationComponent from "../pagination/PaginationComponent";

const IncomeDetails = () => {
  const [current,setCurrent]=useState(1)
  const [pageSize, setPageSize] = useState(3);
  const [form] = Form.useForm();
  const incomeDetailsList = useSelector(data => data?.incomeDetailsList)
  const dispatch = useDispatch()
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

  let incomeDetailsFun = async () => {
    dispatch(await get_dataOfIncomeDetails())
  }

  useEffect(() => {
    incomeDetailsFun()
  }, [])
  const data = incomeDetailsList?.incomeDetails
  const config = {
    data,
    isGroup: true,
    xField: 'year',
    yField: 'amount',
    seriesField: 'orderType',


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
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current > moment().startOf('day');
  }
  const onFinish = async (values) => {
    const test = moment(values?.year).format('YYYY');
    values.year = test

    if (isNaN(parseInt(values.amount)) === true) {
      errorMessage('your amount not a number')

    } else {
      dispatch(await post_dataOfIncomeDetails(values))
      form.resetFields();
    }

  };

  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      render: (year) => <Tag color="magenta">{year}</Tag>,
    }, {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (totalOrder) => <Tag color="orange">{totalOrder} BDT</Tag>,
    }, {
      title: 'Order Type',
      dataIndex: 'orderType',
      key: 'orderType',
      render: (cancelOrder) => <Tag color="red">{cancelOrder}</Tag>,
    },]

 
  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "bold" }}>Income Details</h2>
      </div>


      <Row style={{ marginTop: '80px' }} justify='center' gutter={[{ md: 8, lg: 8 }, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11}>
          <Column {...config} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11} >
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
            form={form}
          >

            <Form.Item label="Order Type" name='orderType' rules={[{ required: true, message: 'Please Fill Up Your Option!' }]}>
              <Select>
                <Select.Option value="total income">Total Income</Select.Option>
                <Select.Option value="pending">Pending</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Amount" name='amount' rules={[{ required: true, message: 'Please Fill Up Your Input & input should be number !' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Year" name='year' rules={[{ required: true, message: 'Please Fill Up Your Input!' }]}>
              <DatePicker picker="year" disabledDate={disabledDate} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={11} xxl={11} style={{ marginTop: '40px' }}>
          <TableComponent columns={columns} data={incomeDetailsList?.incomeDetails} headerText={'Income Details Table'} />
          <PaginationComponent total={incomeDetailsList?.incomeDetails?.length} current={current} pageSize={pageSize} setCurrent={setCurrent} setPageSize={setPageSize} />
        </Col>
      </Row>

    </div>
  );
};

export default IncomeDetails;
