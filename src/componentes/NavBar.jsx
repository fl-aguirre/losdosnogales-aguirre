import {useState, useEffect, useContext} from "react";
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../logo.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CartContext} from './context/CartContext';
import { getFirestore } from "./servicios/firebaseService";

function NavBar() {

    const [categoryList, setCategoryList] = useState([]);
    const {cart} = useContext(CartContext)

    useEffect(() => {
        const dbQuery = getFirestore()
        dbQuery.collection('items').get()
            .then((respuesta)=>{
                let itemsArray = respuesta.docs.map(item => ({...item.data()} ))
                let itemsCategory = itemsArray.map(item => item.category)
                setCategoryList(itemsCategory.filter((item,index)=>(itemsCategory.indexOf(item) === index)))
                    
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
                        {categoryList.map((category)=>(
                        <NavDropdown.Item key={category+"Key"} as={Link} to={"/category/"+category}>{capitalize(category)}</NavDropdown.Item>
                        ))}
                </NavDropdown>
                    <Nav.Link as={Link} to="/">Contáctenos</Nav.Link>
                </Nav>
                {cart.length > 0 ? <CartWidget/> : <></>}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar

