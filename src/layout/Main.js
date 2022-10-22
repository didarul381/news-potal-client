import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sherd/Footer/Footer';
import Header from '../pages/sherd/Header/Header';
import LeftsideNav from '../pages/sherd/LeftsideNav/LeftsideNav';
import RightsideNav from '../pages/sherd/RightsideNav/RightsideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
           <Container>
           <Row>

            <Col lg="2" className='d-none  d-lg-block'>
              <LeftsideNav>
                
              </LeftsideNav>
            </Col>
            <Col lg="7">
              <Outlet></Outlet>
            </Col>
            <Col lg="3">
            <RightsideNav></RightsideNav>
            </Col>
           </Row>
           </Container>
           <Footer></Footer>
        </div>
    );
};

export default Main;