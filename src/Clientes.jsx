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
                <h2 className="subtitulo-clientes">Proyectos</h2>
                <CardGroup className="cards-clientes">
                <Card className="clientCard" style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://i.pinimg.com/originals/39/20/61/392061934f6b4ff787d1fec400096abd.jpg"}/>
                    <Card.Body>
                    <Card.Title className="cardtitle"  > <Link to="/restaurantes">Restaurantes</Link> </Card.Title>
                    <Card.Text  className="cardtext">Da Click y conoce más</Card.Text>
                    <Card.Footer className="cardfooter">Este cliente necesitaba una manera higienica de presentar su menú. Ahora la tiene y sus clientes conectan y recomiendan más...
                    </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="clientCard" style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://ignaciosalia.github.io/images/Untitled-twitter-rosa-claro.jpg"}/>
                    <Card.Body>
                    <Card.Title className="cardtitle">  <Link to="/Jomati"> Jomati</Link></Card.Title>
                    <Card.Text  className="cardtext">
                       Da click y conoce más
                    </Card.Text>
                    <Card.Footer className="cardfooter">
                        Jomati, es una pequeña empresa de diseño de piezas de decoración, tiene un estilo único y necesitaban que sus redes lo reflejaran
                    </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="clientCard" style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://i.pinimg.com/originals/b3/93/ef/b393efaf00fc379ddbe3aa13fec07409.jpg"}/>
                    <Card.Body>
                    <Card.Title className="cardtitle"> <a href="">José Ruben</a></Card.Title>
                    <Card.Text  className="cardtext">
                        Conoce el caso de José y como su tarjete ayudo a crecer sus ventas
                    </Card.Text>
                    <Card.Footer className="cardfooter">
                        Para los profesionales de las ventas, una tarjeta digital ayuda a crecer sus ventas.
                    </Card.Footer>
                    </Card.Body>
                </Card>
                </CardGroup>
                <Carrera></Carrera>
            </div>
        );
    }
}