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
                    <CardGroup className="cardsCarrera">
                        <Row className="cardsCarrera">
                        <Card style={{ width: '25rem', margin:'2rem'}}>
                            <Card.Img variant="top" src={"https://ignaciosalia.github.io/images/Logo-JislCorp-sin-fondo.png"}/>
                            <Card.Body>
                            <Card.Title className="cardtitle"> <a href="https://www.facebook.com/JislcorpAtencionClientes">JislCorp</a> </Card.Title>
                            <Card.Text  className="cardtext">Desarrollador Web</Card.Text>
                            <Card.Footer className="cardfooter">Desde el 2020 he buscado constuir mi propia consultoria de desarrollo web y de comercio en linea 
                            </Card.Footer>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '25rem', margin:'2rem'}}>
                            <Card.Img variant="top" src={"https://ignaciosalia.github.io/images/Untitled-twitter-rosa-claro.jpg"}/>
                            <Card.Body>
                            <Card.Title className="cardtitle"> <p> Jomati</p></Card.Title>
                            <Card.Text  className="cardtext">
                            Desarrollador Web
                            </Card.Text>
                            <Card.Footer className="cardfooter">
                                Con Jomati he tenido la suerte de dejar expresar mi creativida y dejar ver lo que soy capaz. La pagina de Jomait y sus redes han sido un lugar 
                                en el que he aprendido mucho y ver como sus clientes se sienten contentos al ver todo lo que han logrado 
                            </Card.Footer>
                            </Card.Body>
                        </Card>
                        </Row>
                        <Row>
                        <Card style={{ width: '25rem', margin:'2rem'}}>
                            <Card.Img variant="top" src={"https://i.pinimg.com/564x/e0/f4/d5/e0f4d59cdc44225baacdf2e414019918.jpg"}/>
                            <Card.Body>
                            <Card.Title className="cardtitle"> <p> SMS México</p></Card.Title>
                            <Card.Text  className="cardtext">
                            Ingeniero Desarrollador Web
                            </Card.Text>
                            <Card.Footer className="cardfooter">
                                En SMS fui parte del equipo de ingeniría para la linea de ASUS, mi resposabilidad era generar material de entrenamiento, fui parte del equipo
                                que creo la platforma para entrenar a los tecnicos en las nuevas propuestas de la marca 
                            </Card.Footer>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '25rem', margin:'2rem'}}>
                            <Card.Img variant="top" src={"data:image/png;base64,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"}/>
                            <Card.Body>
                            <Card.Title className="cardtitle"> <p>Lypsa</p></Card.Title>
                            <Card.Text  className="cardtext">
                                Ingeniero
                            </Card.Text>
                            <Card.Footer className="cardfooter">
                                Me encargaba de la reparación y del mantenimiento de equipos celulares para la marca LG, entre mis responsabilidades estaba el diagnostico y presentación
                                de reportes de reparación del día, semana y del mes. 
                            </Card.Footer>
                            </Card.Body>
                        </Card>
                        </Row>
                        <Row>
                        <Card style={{ width: '54rem', margin:'2rem'}}>
                            <Card.Img variant="top" src={"https://i.pinimg.com/564x/c1/98/ce/c198ce48048489ed80ec232a530b5544.jpg"}/>
                            <Card.Body>
                            <Card.Title className="cardtitle"> <p>Tecnica 62</p></Card.Title>
                            <Card.Text  className="cardtext">
                                Desarrollador Web
                            </Card.Text>
                            <Card.Footer className="cardfooter">
                                EL sitio se construyo para que las escuelas del estado de México cumplieran con la reforma educativa, premitía a los profesores a llevar
                                un control de calificaciones, actividades y planes de trabajo, calculaba las calificaciones y promedios finales
                            </Card.Footer>
                            </Card.Body>
                        </Card>
                        </Row>

                </CardGroup>

                
                 </Container>
                 <div className="mycontact">
                    <Contacto></Contacto>
                </div>
            </div>
        );
    }
}