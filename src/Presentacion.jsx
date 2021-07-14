import React, { Component } from 'react'
import Contacto from './Contacto'
import Clientes from './Clientes'
import ContactForm from './ContactForm'
import ServicesResume from './ServicesResume'
import Card from 'react-bootstrap/Card'
import { Link } from     'react-router-dom'
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
                            <p className="queChingaosHago">Your Ideas matter, lets create something awesome </p>
                            <button className="buton-presentacion-contacto"> <Link to="/ContactForm" className="link-presentaction"> Lets Start! </Link></button>
                        </div>
                        </Col>
                        <Col md="auto" >
                        <Card className="myface">
                            <Card.Img  className="presentacion-mi-cara" variant="top" src={"https://pbs.twimg.com/profile_images/1380321175214071808/Arp6kg7Q_400x400.jpg"} />
                            <Card.Body >
                                <Card.Title className="cardtitle">
                                    <Link className="presentacion-link-carrera" to="/Carrera"> Know all my experience</Link>
                                </Card.Title>
                                <Card.Text className="cardtext">
                                    I help you grow your only presences, and your business
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    </Container>
                <Clientes className="clientedesktop" ></Clientes> 
            </div>
        );
    }
}
/** add to this my fot and  */