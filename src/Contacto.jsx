import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

export default class Contacto extends React.Component{
    render(){
        /**Agegar los iconos con awesome font usando React awesome */
        return (
            <div className="redes-all">
                  <div className="redes">
                  <h2 className="subtitulo-contacto">You can find me here!</h2>
                <Container >
                    <Row>
                        <Col className="rowContactMember"> <Link to="/Experiencia"> <i className="fa fa-address-card"></i> </Link> </Col>
                        <Col className="rowContactMember"> <a href="https://www.facebook.com/JislCorp-293709961299868"> <i className="fa fa-facebook"> </i></a> </Col>
                        <Col className="rowContactMember"> <a href="https://twitter.com/IgnacioSalia"><i className="fa fa-twitter"> </i></a> </Col>
                        <Col className="rowContactMember"> <a href="https://www.linkedin.com/in/jorge-ignacio-salia-982686162/"><i className="fa fa-linkedin"> </i></a></Col>
                        <Col className="rowContactMember"> <a href="https://www.instagram.com/ignaciosalia/"><i className="fa fa-instagram"> </i></a></Col>
                    </Row>
                </Container>
                  </div>
                
            </div>
        );
    }
}