import React from 'react';
import { Col, Row, Tooltip, Avatar, Image, AutoComplete, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../../assets/Alpha_Logo.webp'
import './Header.css'
const Header = () => {
    return (
        <>
            <Row justify="space-around" align="middle" className='headerColor'>
                <Col span={11} className='logoText' style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <Image
                            width={50}
                            src={logo}
                        />
                    </div>
                    <div className='logeHeader'>
                        <h4 style={{ paddingLeft: '20px' }}>Business Development Dashboard</h4>
                    </div>

                </Col>
                <Col span={11} className='headerText'>
                    <Row justify='end' align="middle" gutter={[{ md: 12, lg: 12,xl:12,xxl:12 }, 8]}>
                  
                    <Col xs={0} sm={0} md={12} lg={12} xl={12} xxl={12} >
                    <AutoComplete
                            dropdownMatchSelectWidth={252}
                            style={{
                                width: 300,
                            }}

                        >
                            <Input.Search size="large" placeholder="input here" enterButton />
                        </AutoComplete>
                    </Col>

                    <Col  xs={12} sm={12} md={11} lg={6} xl={2} xxl={1} >
                    <Tooltip title="Admin" placement="top">
                            <Avatar
                                style={{
                                    backgroundColor: '#87d068',
                                }}
                                icon={<UserOutlined />}
                            />
                        </Tooltip>
                    </Col>
                    </Row>
                    {/* <div>
                      

                    </div> */}

                  

                </Col>
            </Row>
        </>
    );
};

export default Header;