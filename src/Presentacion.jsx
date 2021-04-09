import React, { Component } from 'react'
import Contacto from './Contacto'
import ServicesResume from './ServicesResume'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


export default class Presentacion extends React.Component{
    render(){
        return(
            <div className="presentacion">
                <div className="myself">
                    <h1 className="yomero">Ignacio Salia</h1>
                    <p className="queChingaosHago">Creo sitios Web para Pymes, Frelancer</p>
                </div>
                <Card style={{ width: '18rem', margin:'2em'}}>
                    <Card.Img variant="top" src={"https://pbs.twimg.com/profile_images/1380321175214071808/Arp6kg7Q_400x400.jpg"} />
                    <Card.Body>
                        <Card.Title className="cardtitle">
                            <Link to="/Carrera"> Mi carrera Profesional</Link>
                        </Card.Title>
                        <Card.Text className="cardtext">
                            Comencé mi carrera profesional y no he parado...
                        </Card.Text>
                        <Card.Footer className="cardfooter">
                            En lo personal soy enfocado y dedicado, soy puntal y en el link puedes conocer más lo que hago...
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <div className="mycontact">
                    <Contacto></Contacto>
                </div>
                <ServicesResume></ServicesResume>
            </div>
        );
    }
}
/** add to this my fot and  */