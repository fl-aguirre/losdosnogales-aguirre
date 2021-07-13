import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import Title from './componentes/Title';
import ItemListContainer from './componentes/ItemListContainer';


function App() {

    const alerta = () => {
        console.log('Evento')
    }

    return (
        <>
            <NavBar alerta={alerta}/>
            <Title/>
            <ItemListContainer/>

        </>
    );
    }

    export default App;
