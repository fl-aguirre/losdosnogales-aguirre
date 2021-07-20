import Item from "./Item";    

const ItemList = ({list})=> {
    return list.map((item) => (
        <Item 
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            initial = {1}
            stock = {item.quantity}
        />
    ));
}


export default ItemList