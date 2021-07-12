import CartWidget from './CartWidget';
import logo from '../logo.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({alerta}) {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand href="#home">
            <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" onClick={alerta} className="navbar__font">Home</Nav.Link>
            <Nav.Link href="#pricing" onClick={alerta}>Sobre nosotros</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={alerta}>Nueces</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={alerta}>Aceitunas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={alerta}>Dulces</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets" onClick={alerta}>Contáctenos</Nav.Link>
          </Nav>
          <CartWidget alerta={alerta}/>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar

