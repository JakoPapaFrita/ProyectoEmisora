import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import Header from '../../components/header'

export default function PedirCancion() {
    const [cancion, setCancion] = useState("");
    const [link, setLink] = useState("");

    return(
        <div className="container">
            <Link to="/appBody">
                <svg 
                    width="1em" 
                    height="1em" 
                    viewBox="0 0 16 16" 
                    className="bi bi-arrow-left" 
                    fill="currentColor" 
                    style={{color:'white', position:'absolute', top:'25px'}}
                    xmlns="http://www.w3.org/2000/svg">
                    <path 
                        fillRule="evenodd" 
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </Link>
            <div className="d-flex flex-column align-items-center justify-content-center">
                
                <Header />

                <div style={{width:'90%', marginTop:'70px'}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{color:'white'}}>Nombre Canción</Form.Label>
                            <Form.Control 
                                type="email"
                                value={cancion}
                                onChange={e => setCancion(e.target.value)}
                                style={{
                                    color:'white' ,
                                    background:'none', 
                                    border:'none', 
                                    borderBottom:'1px solid white', 
                                    borderRadius:'1px'}}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{color:'white'}}>Link (opcional)</Form.Label>
                            <Form.Control 
                                type="password"
                                value={link}
                                onChange={e => setLink(e.target.value)}
                                style={{
                                    color:'white', 
                                    background:'none', 
                                    border:'none', 
                                    borderBottom:'1px solid white', 
                                    borderRadius:'1px'
                                }} 
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div style={{width:'90%', marginTop:'50px'}}>
                    <Link to="/cancionPedida" style={{width:'100%'}}>
                        <Button className="mt-3 mb-4" style={{background:'white', border:'1px solid white', color:'#373737', width:'100%'}}>
                            <strong>
                                Enviar
                            </strong>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}