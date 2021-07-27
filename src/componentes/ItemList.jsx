import Item from "./Item";    

const ItemList = ({list})=> {
    return list.map((item) => (
        <Item 
            id={item.id}
            category={item.category}
            image={item.image}
            name={item.name}
            price={item.price}
        />
    ));
}


export default ItemList