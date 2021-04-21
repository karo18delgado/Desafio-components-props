import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navb.css';

export default function NavB(props) {
    return (
        <Navbar className="fondo-nav nav-fluid w-100"  variant="dark" expand="lg">
            <Navbar.Brand href="#home">Pelis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.setSection('Películas')}>Películas</Nav.Link>
                    <Nav.Link onClick={() => props.setSection('Carrousel de estrenos')}>Carrousel de estrenos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
