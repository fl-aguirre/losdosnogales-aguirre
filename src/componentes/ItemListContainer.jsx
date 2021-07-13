import Items from "./Items";
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from "./ItemCount";

function ItemListContainer() {
    const arrayProductos = ['Producto 1', 'Producto 2', 'Producto 3'];

    return (
        <CardGroup>
            <ItemCount 
                initial = {0}
                stock = {10}
            />
            <Items 
                productos={arrayProductos}
                greeting="La mejor garantía"
            />
        </CardGroup>
    )

}

export default ItemListContainer
