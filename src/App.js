// import {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import Title from './componentes/Title';
import ItemListContainer from './componentes/containers/ItemListContainer';
import ItemDetailContainer from './componentes/containers/ItemDetailContainer';
import Cart from './componentes/Cart';


function App() {

    return (
        <Router>
            <NavBar/>
            <Title/>
            <div>
            <Switch>
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/category/:categoryId">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/item/:detailId" component={ItemDetailContainer}/>
                    <Route exact path="/cart" component={Cart} />
            </Switch>
            </div>
        </Router>
    );
    }

    export default App;
