import React from 'react'
import Contacto from './Contacto'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Restaurantes extends React.Component{
    render(){
        return (
            <div className="restaurantes-body">
                <h1 className="restaruantes-main-title">Restaurantes:</h1>
                <div className="restarurantes-div">
                <Container >
                     <Row>
                        <h2 className="restaurantes-subtitle">Menús Digitales</h2>
                     </Row>
                     <Row className="restarutante-description">
                         <Col md={6}>
                            <p className="restaurantes-descripcion-servicios">Ayudo a Restarurantes a modernizarce creando una experiencia digitla Dando mejor imagen  y limpieza a tus clientes</p>
                         </Col>
                         <Col>
                         <img  className="restaurnate-image" src="https://i.pinimg.com/564x/64/3e/7a/643e7a0ef3bf6516678c98e946c23f8e.jpg" alt="Menu QR Restaurante La Era" />
                         </Col>
                     </Row>    
                  </Container>
                </div>
               
                <div className="restarurantes-div">
                <Container >
                     <Row>
                        <h2 className="restaurantes-subtitle-2">Marketing digital</h2>
                     </Row>
                     <Row className="restarutante-description">
                         <Col>
                            <Container>
                                
                             </Container>
                         </Col>
                         <Col md={6}>
                            <p className="restaurantes-descripcion-servicios">Consultoria Aprende a usar tus redes Ten asesoria cundo y donde lo necesites</p>
                         </Col>
                     </Row>    
                  </Container>
                </div>
                <Contacto></Contacto>
            </div>
        )
    }
    
}