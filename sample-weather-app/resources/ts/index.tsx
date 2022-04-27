import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { DefaultApi } from '../typescript-axios/api/default-api';
import { History } from '../typescript-axios/model/history';
// import { Historys } from '../typescript-axios/model/historys';
import { Card, Image, Container, Row, Col, Breadcrumb, Navbar, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';

const App = () => {
    const api = new DefaultApi();
    const [datas, setDatas] = useState<History[]>([]);
    const getDates = async () => {
        const { data } = await api.fetchData();
        setDatas(data);
    }

    useEffect(() => {
        getDates();
        console.log(datas);
    },[])
    // console.log(datas);
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
                    <Card>
                        <Card.Img src="/assets/image/sydney.gif" alt="Card image" />
                        <Card.Body>
                            <Card.Title>SYDNEY</Card.Title>
                            <Row className="text-center">
                                <Col className="text-center border-end border-5 border-dark py-4 mt-1 mb-1">
                                    <Table responsive bordered size="sm">
                                        <thead>
                                            <tr>
                                            <th></th>
                                            <th>Weather</th>
                                            <th>Max temp</th>
                                            <th>Min temp</th>
                                            <th>Wind</th>
                                            <th>pressure</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {datas.map(( listValue: History, index: any ) => {
                                                if (listValue.city_id == 2147714) {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{moment(listValue.date).format('DD/MM')}</td>
                                                            <td>{listValue.main}<Image className="mb-2" width="30" height="30" src={`/assets/icon/${listValue.icon_id}.gif`} /></td>
                                                            <td>{listValue.temp_min}°C</td>
                                                            <td>{listValue.temp_max}°C</td>
                                                            <td>{listValue.wind_speed}m/s</td>
                                                            <td>{listValue.pressure}hPa</td>
                                                        </tr>
                                                    );
                                                }
                                            })}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs lg="6">
                    <Card>
                    <Card.Img src="/assets/image/melbourne.gif" alt="Card image" />
                        <Card.Body>
                            <Card.Title>MELBOURNE</Card.Title>
                            <Row className="text-center">
                                <Col className="text-center border-end border-5 border-dark py-4 mt-1 mb-1">
                                    <Table responsive bordered size="sm">
                                        <thead>
                                            <tr>
                                            <th></th>
                                            <th>Weather</th>
                                            <th>Max temp</th>
                                            <th>Min temp</th>
                                            <th>Wind</th>
                                            <th>pressure</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {datas.map(( listValue: History, index: any ) => {
                                                if (listValue.city_id == 2158177) {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{moment(listValue.date).format('DD/MM')}</td>
                                                            <td>{listValue.main}<Image className="mb-2" width="30" height="30" src={`/assets/icon/${listValue.icon_id}.gif`} /></td>
                                                            <td>{listValue.temp_min}°C</td>
                                                            <td>{listValue.temp_max}°C</td>
                                                            <td>{listValue.wind_speed}m/s</td>
                                                            <td>{listValue.pressure}hPa</td>
                                                        </tr>
                                                    );
                                                }
                                            })}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)