import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Contacto extends React.Component{
    render(){
        /**Agegar los iconos con awesome font usando React awesome */
        return (
            <div className="redes">
                <h2 className="subtitulo">Aquí me encuentras</h2>
                <Container>
                    <Row>
                        <Col> <a href="">Profesional</a> </Col>
                        <Col> <a href="https://www.facebook.com/JislCorp-293709961299868">Facebook</a> </Col>
                        <Col> <a href="https://twitter.com/IgnacioSalia">Twitter</a> </Col>
                    </Row>
                </Container>
                <p className="textos">Sí toda via le faltan los detalles pero en esto links me encuentran :P</p>
            </div>
        );
    }
}