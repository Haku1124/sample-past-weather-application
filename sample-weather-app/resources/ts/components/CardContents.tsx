import React, { useEffect, useState} from 'react';
import { DefaultApi } from '../../typescript-axios/api/default-api';
import { History } from '../../typescript-axios/model/history';
import TableBody from './../components/TableBody';
import TableHead from './../components/TableHead';
import { Card, Row, Col, Table} from 'react-bootstrap';


type Props = {
    cityNameUpperCase: String,
    cityNameLowerCase: String,
    cityId: number
}

const CardContents: React.FC<Props> = ({ cityNameUpperCase, cityNameLowerCase, cityId }) => {
    const api = new DefaultApi();
    const [datas, setDatas] = useState<History[]>([]);
    const getDates = async () => {
        const { data } = await api.fetchData();
        setDatas(data);
    }

    useEffect(() => {
        getDates();
    },[])


    return (
        <Card>
            <Card.Img src={`/assets/image/${cityNameLowerCase}.gif`} alt="Card image" />
            <Card.Body>
                <Card.Title>{cityNameUpperCase}</Card.Title>
                <Row className="text-center">
                    <Col className="text-center border-end border-5 border-dark py-4 mt-1 mb-1">
                        <Table responsive bordered size="sm">
                            <TableHead />
                            <TableBody datas={datas} cityId={cityId} />
                        </Table>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CardContents