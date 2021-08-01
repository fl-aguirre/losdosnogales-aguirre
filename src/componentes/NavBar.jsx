import {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget';
import logo from '../logo.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {getItem} from "../getMocks";

function NavBar() {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getItem()
            .then((respuesta)=>{
                let array = respuesta.map(item=>(item.category))
                setCategoryList(array.filter((item,index)=>(array.indexOf(item) === index)))
            },error => console.log(error))
            .catch(error => console.log('Un error:' + error))
    }, [])

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
      }

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
                        {console.log(categoryList)}
                        {categoryList.map((category)=>(
                        <NavDropdown.Item key={category+"Key"} as={Link} to={"/category/"+category}>{capitalize(category)}</NavDropdown.Item>
                        ))}
                </NavDropdown>
                    <Nav.Link as={Link} to="/">Contáctenos</Nav.Link>
                </Nav>
                <CartWidget/>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar

