import React, { Component } from 'react'
import axios from 'axios'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import Container  from 'react-bootstrap/Container'
import Contacto from './Contacto'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class Jomati extends React.Component{
    render(){
        return(
            <div className="jomatiBody">
                 <h1 className="jomati">JoMaTi</h1>
                 <Nav defaultActiveKey="/home" className="flex-column, jomatiMenu">
                    <Nav.Link className="linkJomati">Home</Nav.Link>
                    <Nav.Link className="linkJomati">Nosotros</Nav.Link>
                    <Nav.Link className="linkJomati">Contacto</Nav.Link>
                 </Nav>
                <Container>
                    <Row>
                        <Col className="product-card" xs={12} md={4}>
                            <h3 className="piezas-titulo tazas">Tazas</h3>
                            <Image className="piezas-imagen" src="https://i.pinimg.com/564x/b2/53/ab/b253ab6f74bc60c50a8c419439599fed.jpg" />
                            <p className="descripcion-producto">El regalo perfecto lo tenemos aqui, con varios tamaños de taza y con el diseño que más te gusta</p>
                            <button className="conoce-jomati">Conoce Más</button>
                        </Col>
                        <Col className="product-card" xs={12} md={4}>
                            <h3 className="piezas-titulo">Pasta Flexible</h3>
                        </Col>
                        <Col className="product-card" xs={12} md={4}>
                            <h3 className="piezas-titulo">Ceramica</h3>
                        </Col>
                    </Row>
                </Container>
                <div className="redes-jomati">
                    <h4 className="contacto-jomati">Dinos Hola</h4>
                </div>
            </div>
        );
    }
}