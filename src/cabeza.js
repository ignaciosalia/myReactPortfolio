import React, { Component } from 'react' //libreria de react
import  Nav from 'react-bootstrap/Nav'
import Container  from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button' //agregar en index.js e index.html los links de bootstrap para poder usarlo 
import { Link } from "react-router-dom"

const Cabeza = () => {
    return(
    <>
        <Navbar collapseOnSelect className="main-navbar" expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' bg="rgba(212, 43, 275)" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link className="menuelement" as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link className="menuelement" as={Link} to="/Clients" >Clientes</Nav.Link>
                        <Nav.Link className="menuelement" as={Link} to="/ContactForm" >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
     )
}

export default Cabeza;

/*export default class Cabeza extends React.Component{ //indica que es una clase que se va exportar
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <a href="#" className="navbar-brand logo">IS</a>
                </Navbar.Header>
                <Navbar.Body>
                    
                </Navbar.Body>
            </Navbar>
        );
    }
}*/