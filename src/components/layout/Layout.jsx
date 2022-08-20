import React from 'react';
import Header from '../header/Header';
import { Row ,Col} from 'antd';
import LeftNav from '../leftNav/LeftNav';
const Layout = () => {
    return (
        <div>
            <Header/>
            <Row>
             <Col xs={0} sm={0} mg={4} lg={4} xl={4} xxl={3}>
             <LeftNav/>
             </Col>

            </Row>
        </div>
    );
};

export default Layout;