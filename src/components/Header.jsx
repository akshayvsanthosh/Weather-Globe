import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header() {
    return (
        <Navbar expand="lg" className="bg-transparent">
            <Container className='ms-4'>
                <Navbar.Brand href="/"><i className="fa-solid fa-cloud-sun-rain text-white fa-2xl mt-4"></i></Navbar.Brand>                
            </Container>
        </Navbar>
    )
}

export default Header