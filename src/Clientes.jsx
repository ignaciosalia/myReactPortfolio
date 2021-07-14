import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import { CardImg } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { ExternalLink } from 'react-external-link'
import Carrera from './Carrera'

/**Todo this is where I don't know if I should use or not popovers to show case this part, maybe I will make a test, or maybe toast
 * 
 */
export default class Clientes extends React.Component{
    render(){
        return(
            <div className="ultimosClientes">
                <h2 className="subtitulo-clientes">Projects</h2>
                <CardGroup className="cards-clientes">
                <Card className="clientCard" style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://i.pinimg.com/564x/09/b8/a0/09b8a09ff572aa6805d7e913a2406d99.jpg"}/>
                    <Card.Body>
                    <Card.Title className="cardtitle"  > <Link to="/restaurantes">Small Businesses</Link> </Card.Title>
                    <Card.Text  className="cardtext">Click and Know more ...</Card.Text>
                    <Card.Footer className="cardfooter">
                        I help small businesses get an online presence, I create sites that a just to their budget
                    </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="clientCard" style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://ignaciosalia.github.io/images/Untitled-twitter-rosa-claro.jpg"}/>
                    <Card.Body>
                    <Card.Title className="cardtitle">  <Link to="/Jomati"> Jomati</Link></Card.Title>
                    <Card.Text  className="cardtext">
                    Click and Know more ...
                    </Card.Text>
                    <Card.Footer className="cardfooter">
                        Jomati, is my sisters and I family business, they create amazing interior design ceramic pieces, expoxy decorations and more
                    </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="clientCard" style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://i.pinimg.com/564x/de/bb/ae/debbae60c83bd768b9440582b6d9005c.jpg"}/>
                    <Card.Body>
                    <Card.Title className="cardtitle"> <a href="">Consulting and Marketing</a></Card.Title>
                    <Card.Text  className="cardtext">
                    Click and Know more ...
                    </Card.Text>
                    <Card.Footer className="cardfooter">
                        Sometimes other developers and teams need help with their projects, and here I'm to help them
                    </Card.Footer>
                    </Card.Body>
                </Card>
                </CardGroup>
                <Carrera></Carrera>
            </div>
        );
    }
}