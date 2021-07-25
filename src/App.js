import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import Title from './componentes/Title';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';


function App() {

    const alerta = () => {
        console.log('Evento')
    }

    return (
        <>
            <NavBar alerta={alerta}/>
            <Title/>
            <ItemListContainer/>
            <ItemDetailContainer />

        </>
    );
    }

    export default App;
