import React, { Component } from 'react'
import axios from 'axios'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import Container  from 'react-bootstrap/Container'
import Contacto from './Contacto'
import  Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "./index.css"


export default class Jomati extends React.Component{
    render(){
        return(
            <div className="jomatiBody">
                 <h1 className="jomati">JoMaTi</h1>
                 <h2 className="subtitulo-jomati">Le damos vida a tus Ideas!</h2>

                 <Navbar className="jomatiMenu" sticky="top" expand="lg" bg="#f46c9d" variant="primary">
                     <Nav>
                        <Nav.Link className="linkJomati">Home</Nav.Link>
                        <Nav.Link className="linkJomati">Nosotros</Nav.Link>
                        <Nav.Link className="linkJomati">Contacto</Nav.Link>
                     </Nav>
                 </Navbar>
                <Container className="main-product-description">
                    <Row>
                        <Col className="product-card" xs={12} md={4}>
                            <h3 className="piezas-titulo tazas">Tazas</h3>
                            <Image className="piezas-imagen" src="https://i.pinimg.com/564x/b2/53/ab/b253ab6f74bc60c50a8c419439599fed.jpg" />
                            <p className="descripcion-producto">El regalo perfecto lo tenemos aqui, con varios tamaños de taza y con el diseño que más te gusta</p>
                            <button className="conoce-jomati">Conoce Más</button>
                        </Col>
                        <Col className="product-card" xs={12} md={4}>
                            <h3 className="piezas-titulo">Pasta Flexible</h3>
                            <Image className="piezas-imagen" src="https://i.pinimg.com/564x/a8/92/3f/a8923fe55cb373c0f598be7d6c22ac32.jpg"/>
                            <p className="descripcion-producto">Creamos, hermosas piezas de pasta flexible, desde recuerdos, centros de mesa, piezas únicas y para todos los presupuestos</p>
                            <button className="conoce-jomati">Conoce Más</button>
                        </Col>
                        <Col className="product-card" xs={12} md={4}>
                            <h3 className="piezas-titulo">Ceramica</h3>
                            <Image className="piezas-imagen" src="https://i.pinimg.com/564x/e4/c7/26/e4c7268b05aa4107798eb67752c6c6fb.jpg"/>
                            <p className="descripcion-producto">Contamo con gran variedad de piezas, tanto decoradas a mano como para pintar, hacemos pedidos desde 1 piezas y a mayoreo</p>
                            <button className="conoce-jomati">Conoce Más</button>
                        </Col>
                    </Row>
                </Container>
                <div className="nosotros-jomati-div">
                    <h4 className="nosotros-titulo-h4">Conocenos</h4>
                    <p className="nosotros-descripcion">Jomati es una empresa familiar, fundada por 2 hermanas y un hermano, que movidos por la pandemía comenzaron esta aventura</p>
                    <Image className="nosotros-imagen" src="https://i.pinimg.com/564x/44/92/84/44928437a0a80d3f50324efc5a902402.jpg"/>
                    <p className="nosotros-descripcion">Los tres somos enamorados de la creatividad y de dar vida nuestras creacioenes</p>
                </div>
                <div className="redes-jomati">
                    <h4 className="contacto-jomati">Dinos Hola</h4>
                </div>
            </div>
        );
    }
}