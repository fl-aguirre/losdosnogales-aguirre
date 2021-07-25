import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';

function ItemDetail({itemDetail, addCart}) {
    

    //Renderiza el item con sus detalles
    return (
        <Card style={{ width: '30rem' }} className="mx-auto mt-5" key={'itemDetail'+ itemDetail.id}>
            <Card.Img variant="top" src={itemDetail.image} />
            <Card.Body>
                <Card.Title>{itemDetail.name}</Card.Title>
                <Card.Text>
                    Descripción: {itemDetail.description}<br/>
                    <strong>Precio: {itemDetail.price}</strong>
                </Card.Text>
                <ItemCount
                    itemDetail={itemDetail}
                />
                <Button size="sm" onClick={addCart}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
