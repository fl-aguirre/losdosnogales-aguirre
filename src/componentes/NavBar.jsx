import CartWidget from './CartWidget';
import logo from '../logo.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({alerta}) {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={alerta} className="navbar__font">Home</Nav.Link>
            <Nav.Link href="#sobrenosotros" onClick={alerta}>Sobre nosotros</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#nueces" onClick={alerta}>Nueces</NavDropdown.Item>
              <NavDropdown.Item href="#aceitunas" onClick={alerta}>Aceitunas</NavDropdown.Item>
              <NavDropdown.Item href="#dulces" onClick={alerta}>Dulces</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto" onClick={alerta}>Contáctenos</Nav.Link>
          </Nav>
          <CartWidget alerta={alerta}/>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar

