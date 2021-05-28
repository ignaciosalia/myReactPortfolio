
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom'
import Contacto from './Contacto'

export default class Experiencia extends React.Component{
    render(){
        return(
            <div className="carrera"> 
                 <h1 className="yomero">Vida profesional, vida educativa</h1>
                <CardGroup>
                <Card style={{ width: '18rem', margin:'2em'}}>
                    
                    <Card.Body>
                        <Card.Title className="cardtitle">
                            <Link to="/Carrera" > Mi carrera Profesional</Link>
                        </Card.Title>
                        <Card.Text className="cardtext">
                            Comencé mi carrera profesional a los 18 y no he parado...
                        </Card.Text>
                        <Card.Footer className="cardfooter">
                            Me encantan ambientes de trabajo con desafios y con mucho movimiento, me encanta la presión y sentir que construyo algo que importa
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin:'2em'}}>
                    <Card.Img variant="top" src={"https://unamglobal.unam.mx/wp-content/uploads/2017/05/LOGO-UNAM.png"} />
                    <Card.Body>
                        <Card.Title className="cardtitle">
                            <p>UNAM FES Acatlan </p> 
                        </Card.Title>
                        <Card.Text className="cardtext">
                            Mi paso por la mejor universidad de México:
                        </Card.Text>
                        <Card.Text className="cardtext">
                            Estudié en la UNAM desde el verano del 2012 hasta 2016, me encanta las matemáticas y sobre todo los retos relacionados con la computación,
                            profesionalmente me interesa desarrollarme como desarrollador web
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <div className="mycontact">
                    <Contacto></Contacto>
                </div>
            </div>
            
            
        );
    }
}