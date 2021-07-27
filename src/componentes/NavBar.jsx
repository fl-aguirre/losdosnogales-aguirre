import {Link} from 'react-router-dom'
import CartWidget from './CartWidget';
import logo from '../logo.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Navbar.Brand as={Link} to="/">
                <img src={logo} alt="logo" className="img-fluid" width="50"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" className="navbar__font">Home</Nav.Link>
                    <Nav.Link as={Link} to="/">Sobre nosotros</Nav.Link>
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/category/nueces" >Nueces</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/category/aceitunas">Aceitunas</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/category/dulces">Dulces</NavDropdown.Item>
                </NavDropdown>
                    <Nav.Link as={Link} to="/">Contáctenos</Nav.Link>
                </Nav>
                <CartWidget/>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar

