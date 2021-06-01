import React, { Component } from 'react'
import axios from 'axios'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import Container  from 'react-bootstrap/Container'
import Contacto from './Contacto'


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
                <div>
                    <label htmlFor="name" className="cardtext">Nombre: </label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange.bind(this)} required />
                </div>
                <div>
                    <label htmlFor="email" className="cardtext">Email:  </label>
                    <input type="text" id="email" value={this.state.email} onChange={this.handleChange.bind(this)} required />
                </div>
                <div>
                    <label htmlFor="message" className="cardtext">Mensaje:  </label>
                    <textarea name="message" id="message" cols="30" rows="10" value={this.state.message} onChange={this.handleChange.bind(this)}
                     required/>
                </div>
                <button type="submit" onClick={this.handleSubmit.bind(this)}>{buttonText}</button>
             </form>
             <Contacto></Contacto>
            </Container>
            
        );
    }
}