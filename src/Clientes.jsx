import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import { CardImg } from 'react-bootstrap'

/**Todo this is where I don't know if I should use or not popovers to show case this part, maybe I will make a test, or maybe toast
 * 
 */
export default class Clientes extends React.Component{
    render(){
        return(
            <div className="ultimosClientes">
                <h2 className="subtitulo">Clientes</h2>
                <CardGroup>
                <Card style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://ignaciosalia.github.io/images/menu-la-era.png"}/>
                    <Card.Body>
                    <Card.Title> <a href="">Restarurante La era</a> </Card.Title>
                    <Card.Text>Da Click en la imagen y ve como puede ser tú menu</Card.Text>
                    <Card.Footer>Creo menús digitales con código QR para facilitar las consultas de los usuarios, los menús están pensados en
                                ser ligeros y adaptables a cualquier dispositivo, en la compra del diseño del menú está incluido un codigo QR.
                                Éste código no caduca y se puede imprimir de modo que se quiera.
                    </Card.Footer>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://ignaciosalia.github.io/images/Untitled-twitter-rosa-claro.jpg"}/>
                    <Card.Body>
                    <Card.Title> <a href="">Jomati</a>
                    </Card.Title>
                    <Card.Text>
                        Da click para ver como puede ayudar a tu negocio a crecer en la red
                    </Card.Text>
                    <Card.Footer>Haz que tus clientes te conozcan y tus productos de manera más rápida y sencilla, haz que te encuentren y a tus productos con la mejor presentación
                    </Card.Footer>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://ignaciosalia.github.io/images/v-card-example.png"}/>
                    <Card.Body>
                    <Card.Title> <a href="">José Salia</a></Card.Title>
                    <Card.Text>
                        Conoce el caso de José y como su tarjete ayudo a crecer sus ventas
                    </Card.Text>
                    <Card.Footer>Para los profesionales que quieren compartir sus datos de manera rápida y eficaz, eres vendedor es la manera más rapida de comportir tú contacto.</Card.Footer>
                    </Card.Body>
                </Card>
                </CardGroup>
            </div>
        );
    }
}