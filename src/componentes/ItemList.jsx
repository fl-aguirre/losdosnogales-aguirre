import Item from "./Item";    

const ItemList = ({list})=> {
    return list.map((item) => (
        <Item
            key={'item'+ item.id} 
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
        />
    ));
}


export default ItemList