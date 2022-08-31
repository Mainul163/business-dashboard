import React from 'react';
import Header from '../header/Header';
import { Row ,Col} from 'antd';
import LeftNav from '../leftNav/LeftNav';
import Home from '../home/Home';
import Footer from '../footer/Footer';
const Layout = () => {
    return (
        <div>
            <Header/>
            <Row>
             <Col xs={0} sm={0} mg={4} lg={4} xl={4} xxl={3}>
             <LeftNav/>
             </Col>
             <Col xs={24} sm={24} mg={20} lg={20} xl={20} xxl={21}>
             <Home/>
             </Col>
            </Row>
            <Footer/>
        </div>
    );
};

export default Layout;