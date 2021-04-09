
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom'

export default class Experiencia extends React.Component{
    render(){
        return(
            <CardGroup>
                <Card style={{ width: '18rem', margin:'2em'}}>
                    <Card.Img variant="top" src={"https://pbs.twimg.com/profile_images/1380321175214071808/Arp6kg7Q_400x400.jpg"} />
                    <Card.Body>
                        <Card.Title className="cardtitle">
                            <Link to="/Carrera" > Mi carrera Profesional</Link>
                        </Card.Title>
                        <Card.Text className="cardtext">
                            Comencé mi carrera profesional y no he parado...
                        </Card.Text>
                        <Card.Footer className="cardfooter">
                            En lo personal soy enfocado y dedicado, soy puntal y en el link puedes conocer más lo que hago...
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin:'2em'}}>
                    <Card.Img variant="top" src={"https://unamglobal.unam.mx/wp-content/uploads/2017/05/LOGO-UNAM.png"} />
                    <Card.Body>
                        <Card.Title className="cardtitle">
                            <Link to="/Carrera" > UNAM FES Acatlan</Link>
                        </Card.Title>
                        <Card.Text className="cardtext">
                            Mi paso por la mejor universidad de México:
                        </Card.Text>
                        <Card.Footer className="cardfooter">
                            Me tomo mucho tiempo llegar hasta ahí pero no cambiaría mi viaje por nada, da click en el link para saber más...
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </CardGroup>
        );
    }
}