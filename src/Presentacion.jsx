import React, { Component } from 'react'
import Contacto from './Contacto'
import ServicesResume from './ServicesResume'

export default class Presentacion extends React.Component{
    render(){
        return(
            <div className="presentacion">
                <div className="myself">
                    <h1 className="yomero">Ignacio Salia</h1>
                    <p className="queChingaosHago">Creo sitios Web para Pymes, Frelancer</p>
                </div>
                <div className="mycontact">
                    <Contacto></Contacto>
                </div>
                <ServicesResume></ServicesResume>
            </div>
        );
    }
}
/** add to this my fot and  */