import React, { Component } from 'react'
import axios from 'axios'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import Container  from 'react-bootstrap/Container'
import Contacto from './Contacto'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


export default class ContactForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            message:"",
            status: "Submit"
        }
    }

    handleChange(event){
        const field = event.target.id
        if(field === "name"){
            this.setState({name: event.target.value});
        }else if(field === "email"){
            this.setState({email: event.target.value});
        }else if(field === "message"){
            this.setState({message: event.target.value});
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({ status: "Fallo :( "});
        alert("Le siento está en Construcción, usa mis redes");
      /*  axios({
            method: "POST",
            url:"http://localhost:5000/contact",
            data: this.state,
        }).then((response) => {
            if (response.data.status == "sent"){
                alert("Message Sent");
                this.setState({name: "", email: "", message:"", status: "Submit"});
            } else if(response.data.status === "faild"){
                alert("Message faild");
            }
        });*/   
    }

    render(){
        let buttonText = this.state.status;
        return(
            <Container className="firstImpresion">
                <form action="">
                <Form className="contac-form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="contact-text">Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Nombre"/>
                        <Form.Label className="contact-text">Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted" />
                        <Form.Label className="contact-text">Mensaje</Form.Label>
                        <Form.Control as="textarea" row={3}/>
                    </Form.Group>
                    <button className="contact-button" type="submit" onClick={this.handleSubmit.bind(this)}>{buttonText}</button>
                </Form>
             </form>
             <Contacto></Contacto>
            </Container>
            
        );
    }
}