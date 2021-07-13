import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';    

const Items = ({productos, greeting})=> {
    return productos.map((producto) => (
        <CardProduct 
            producto={producto}
            greeting ={greeting}
        />
    ));
}

const CardProduct = ({producto, greeting})=> {
    const compra = () => {
        alert("Gracias por su compra!");
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{producto}</Card.Title>
                <Card.Text>
                    {greeting}
                </Card.Text>
                <Button variant="primary" onClick={compra}>Comprar</Button>
            </Card.Body>
        </Card>
    )
}


export default Items
