import React, { useState } from 'react';
import { Col, Row, Tooltip, Avatar, Image, AutoComplete, Input,  Drawer,Space } from 'antd';
import { UserOutlined,LeftCircleOutlined,   MenuUnfoldOutlined } from '@ant-design/icons';
import logo from '../../assets/Alpha_Logo.webp'

import './Header.css'
import DrawerItem from '../drawer/Drawer';

const Header = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
        console.log('hkw');
    };
    return (
        <>       <div>
            {/* <Button type="primary" onClick={()=>showDrawer()}>
          Open
        </Button> */}
            {/* <Col span={11} className='mobileNav' xl={0} lg={0} style={{ display: 'flex', alignItems: 'center' }}>
                <MenuUnfoldOutlined  onClick={()=>showDrawer()}/>
                </Col> */}
           <DrawerItem open={open} setOpen={setOpen} onClose={onClose}/>
        </div>

            <Row justify="space-around" align="middle">

                <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
                    <Row justify="space-around" align="middle" className='headerColor'>

                        <Col span={11} className='logoText logeHeader' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='logeHeader'>
                                <Image
                                    width={50}
                                    src={logo}
                                />
                            </div>

                            <div>

                            </div>
                            <div className='logeHeader'>
                                <h4 style={{ paddingLeft: '20px' }}>Business Development Dashboard</h4>
                            </div>

                        </Col>
                        <Col span={11} className='headerText'>
                            <Row justify='end' align="middle" gutter={[{ md: 12, lg: 12, xl: 12, xxl: 12 }, 8]}>

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

                                <Col xs={12} sm={12} md={11} lg={6} xl={2} xxl={1} >
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




                        </Col>
                    </Row>
                </Col>
                {/* ************************mobile header nav******************** */}

                <Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0}>
                    <Row  justify="space-around" align="middle">
                        <Col span={18}>
                        <MenuUnfoldOutlined  onClick={()=>showDrawer()} style={{fontSize:'45px'}}/>
                        </Col>
                       <Col span={3} style={{ display: 'flex', alignItems: 'center' ,justifyItems:'center'}}>
                       <div style={{ display: 'flex', alignItems: 'center' ,justifyItems:'end',paddingLeft:'70px'}}>
                                <Image
                                    width={90}
                                    src={logo}
                                />
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>


        </>
    );
};

export default Header;