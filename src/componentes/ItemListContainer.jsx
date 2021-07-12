import Items from "./Items";
import CardGroup from 'react-bootstrap/CardGroup';

function ItemListContainer() {
    const arrayProductos = ['Producto 1', 'Producto 2', 'Producto 3']

    return (
        <CardGroup>
            <Items 
            productos={arrayProductos}
            greeting="La mejor garantía"
            />
        </CardGroup>
    )

}

export default ItemListContainer
