import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import CardContents from './components/CardContents';
import { Container, Row, Col, Breadcrumb, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light" className="ml-0">
            <   Navbar.Brand href="#">Past Weather in Sydney/Melbourne</Navbar.Brand>
            </Navbar>
            <Breadcrumb >
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Row className="justify-content-md-center py-5 h-100">
                <Col xs lg="6">
                    <CardContents cityNameUpperCase={"SYDNEY"} cityNameLowerCase={"sydney"} cityId={Number(process.env.MIX_CITY_SYDNEY)} />
                </Col>
                <Col xs lg="6">
                    <CardContents cityNameUpperCase={"MELBOURNE"} cityNameLowerCase={"melbourne"} cityId={Number(process.env.MIX_CITY_MELBOURNE)} />
                </Col>
            </Row>
        </Container>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)