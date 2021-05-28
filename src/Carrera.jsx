import React, { Component } from 'react'
import Container  from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'
import CardGroup from 'react-bootstrap/CardGroup'
import Contacto from './Contacto'

export default class Carrera extends React.Component{
    render(){
        return(
            <div className="carrera">
                 <Container className="firstImpresion">
                    <h1 className="yomero">Mi vida profesional</h1>
                    <p className="queChingaosHago">La he dedicado a las IT</p>
                    <CardGroup>
                    <Card style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://ignaciosalia.github.io/images/Logo-JislCorp-sin-fondo.png"}/>
                    <Card.Body>
                    <Card.Title className="cardtitle"> <a href="https://www.facebook.com/JislcorpAtencionClientes">JislCorp</a> </Card.Title>
                    <Card.Text  className="cardtext">Da Click y conoce más</Card.Text>
                    <Card.Footer className="cardfooter">Desde el 2020 he buscado constuir mi propia consultoria de desarrollo web y de comercio en linea 
                    </Card.Footer>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://lh3.googleusercontent.com/proxy/LETSB_p4b7YYmOAUYX4GmB6N9SaEFRWXuBmJriHLW6_Ro9QuISyLcYuW5a_fSN8xRnKweYuFe7A1GKYy0UVWgZ6R5mfTmOJx9Ytizt9DqfgHcT-vWcqfrQ"}/>
                    <Card.Body>
                    <Card.Title className="cardtitle"> <p> SMS México</p></Card.Title>
                    <Card.Text  className="cardtext">
                       Ingeniero
                    </Card.Text>
                    <Card.Footer className="cardfooter">
                        En SMS fui parte del equipo de ingeniría para la linea de ASUS, mi resposabilidad era generar material de entrenamiento, fui parte del equipo
                        que creo la platforma para entrenar a los tecnicos en las nuevas propuestas de la marca 
                    </Card.Footer>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin:'2rem'}}>
                    <Card.Img variant="top" src={"https://lh3.googleusercontent.com/proxy/D-0H-kYBttql465nm-VE7LmslphpLWP5670uvk00fmxbRgp-ZVCwMgW2dHK1BQzAYGX_W0guU9Ykoik"}/>
                    <Card.Body>
                    <Card.Title className="cardtitle"> <p>Lypsa</p></Card.Title>
                    <Card.Text  className="cardtext">
                        Ingeniero celular
                    </Card.Text>
                    <Card.Footer className="cardfooter">
                        Me encargaba de la reparación y del mantenimiento de equipos celulares para la marca LG, entre mis responsabilidades estaba el diagnostico y presentación
                        de reportes de reparación del día, semana y del mes. 
                    </Card.Footer>
                    </Card.Body>
                </Card>
                
                </CardGroup>

                
                 </Container>
                 <div className="mycontact">
                    <Contacto></Contacto>
                </div>
            </div>
        );
    }
}