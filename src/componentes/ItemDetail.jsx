import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';

function ItemDetail({itemDetail, addCart}) {
    
    console.log(itemDetail)

    //Renderiza el item con sus detalles
    return itemDetail.map((item) => (
        <Card style={{ width: '30rem' }} className="mx-auto mt-5" key={'itemDetail'+ item.id}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    Descripción: {item.description}<br/>
                    <strong>Precio: {item.price}</strong>
                </Card.Text>
                <ItemCount
                    itemDetail={item}
                />
                <Button size="sm" onClick={addCart}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    ));
}

export default ItemDetail
