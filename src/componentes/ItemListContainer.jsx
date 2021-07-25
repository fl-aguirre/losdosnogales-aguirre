import {useState, useEffect} from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import ItemList from "./ItemList";
import {getItem} from "../getMocks"


function ItemListContainer() {

    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        getItem()
            .then((respuesta)=>{
                setItemList(respuesta)
            },error => console.log(error))
            .catch(error => console.log('Un error:' + error))
            // .finally(console.log('Se ejecuta igual'))
    }, [])

    // useEffect(()=>{
    //     fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(data=> data.json())
    //     .then(res => console.log(res))
    // })

    return (
        <CardGroup>
            <ItemList 
                list={itemList}
            />
        </CardGroup>
    )

}

export default ItemListContainer
