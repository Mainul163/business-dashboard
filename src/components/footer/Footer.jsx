import React from 'react';
import { Row, Col, Image ,AutoComplete, Input,Collapse } from 'antd';


import image from '../../assets/Alpha_Logo.webp'
import './Footer.css'
import { NavLink } from 'react-router-dom';
// import { HiOutlinePhoneArrowUpRight } from 'react-icons/hi';
import { BsTelephoneInbound } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
    const { Panel } = Collapse;
    return (
        <div className='footerBody'>
            <Row justify='space-between' style={{ padding: '10px 0px' }}  >
                <Col xs={24} sm={24} md={24} lg={24} xl={3} xxl={2} >

                </Col>
                <Col xs={11} sm={11} md={11} lg={11} xl={6} xxl={7} style={{marginLeft:"10px"}}>
                    <Image
                        width={80}
                        src={image}
                    />
                    <p style={{ marginTop: '8px' }}>A business dashboard is a visual summary of key performance indicators (KPIs) or other key data points. It shows complex data sets in at-a-glance views so leaders know how their teams are doing and what actions to take.</p>
                    <div style={{ display: 'flex' }}>
                        <   BsTelephoneInbound style={{ fontSize: "25px" }} />
                       
                        <p style={{ paddingLeft: '8px' }}>01674472163</p>
                    </div>
                    <p>Copyright © Mainul All Rights Reserved</p>
                </Col>
                <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={0} >

                </Col>

                
                <Col xs={0} sm={0} md={0} lg={0} xl={6} xxl={6} >
                    <h2>Our Pages</h2>

                    <NavLink
                        to="/"

                        className={(navData) => (navData.isActive ? "active" : "link")}
                    >
                        Dashboard
                    </NavLink>
                    <br />
                    <br />
                    <NavLink
                        to="/orderanalytics"

                        className={(navData) => (navData.isActive ? "active" : "link")}
                    >
                        Order Analytics
                    </NavLink>

                    <br />
                    <br />
                    <NavLink
                        to="/incomebreakdown"

                        className={(navData) => (navData.isActive ? "active" : "link")}
                    >
                        Income Break Down
                    </NavLink>
                    <br />
                    <br />
                    <NavLink
                        to="/incomedetails"

                        className={(navData) => (navData.isActive ? "active" : "link")}
                    >
                        Income Details
                    </NavLink>
                    <br />
                    <br />
                    <NavLink
                        to="/earning"

                        className={(navData) => (navData.isActive ? "active" : "link")}
                    >
                        Earning
                    </NavLink>
                    <br />
                    <br />

                    <NavLink
                        to="/productlist"

                        className={(navData) => (navData.isActive ? "active" : "link")}
                    >
                        Product List
                    </NavLink>
                </Col>

                <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={0} >

                </Col>
                <Col xs={11} sm={11} md={11} lg={11} xl={6} xxl={6} >
                    <h2>Sign up for our e-mail to get latest news.</h2>
                    <AutoComplete
                            dropdownMatchSelectWidth={252}
                            style={{
                                width: 300,
                                paddingTop:"10px"
                            }}

                        >
                            <Input.Search size="large" placeholder="input here" enterButton />
                        </AutoComplete>
                        <div style={{paddingTop:'30px',display:'flex'}}>
                        <FaFacebookF style={{ fontSize: "25px",color:'#1890ff' }}/>
                        <FaYoutube style={{ fontSize: "25px",color:'red',marginLeft:'20px' }}/>
                        <AiFillLinkedin  style={{ fontSize: "25px",color:' #0e76a8',marginLeft:'20px' }}/>
                        </div>

                </Col>
            </Row>
        </div>
    );
};

export default Footer;