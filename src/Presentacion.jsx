import React, { Component } from 'react'
import Contacto from './Contacto'
import Clientes from './Clientes'
import ServicesResume from './ServicesResume'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'

export default class Presentacion extends React.Component{
    render(){
        return(
            <div className="presentacion">
                <Container className="firstImpresion">
                    <Row>
                        <Col>
                        <div className="myself">
                            <h1 className="yomero">Ignacio Salia</h1>
                            <p className="queChingaosHago">Creo sitios Web que atraen clientes</p>
                        </div>
                        </Col>
                        <Col md="auto" >
                        <Card className="myface">
                            <Card.Img   variant="top" src={"https://pbs.twimg.com/profile_images/1380321175214071808/Arp6kg7Q_400x400.jpg"} />
                            <Card.Body >
                                <Card.Title className="cardtitle">
                                    <Link to="/Carrera"> Me dedico a crear experiencias en linea</Link>
                                </Card.Title>
                                <Card.Text className="cardtext">
                                    Ayudo a que ganes la confianza de tus clientes
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                <div className="mycontact">
                    <Contacto></Contacto>
                </div>
                <Clientes></Clientes>
                </Container>
            </div>
        );
    }
}
/** add to this my fot and  */