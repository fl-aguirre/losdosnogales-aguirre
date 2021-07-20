import {useState, useEffect} from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import ItemList from "./ItemList";

const productsList = [
    {id:1, name: 'Producto 1', description: 'Producto 1', price: 100, quantity: 3},
    {id:2, name: 'Producto 2', description: 'Producto 2', price: 200, quantity: 5},
    {id:3, name: 'Producto 3', description: 'Producto 3', price: 300, quantity: 6},
    {id:4, name: 'Producto 4', description: 'Producto 4', price: 400, quantity: 10}
];

function ItemListContainer() {


    const [itemList, setItemList] = useState([]);


    useEffect(() => {
    
        const getPromiseTask=()=>{
            return task
        }
    
        const task = new Promise((resolve,reject)=>{
            let status = 200
            if (status===200){
                setTimeout(()=>{resolve(productsList)},2000)
            }else{
                reject('rechazado')
            }
        })

        getPromiseTask()
            .then((respuesta)=>{
                setItemList(respuesta)
            },err=>console.log(err))
            .catch(err=>console.log('Un error'))
            .finally(console.log('Se ejecuta igual'))
    }, [])

    return (
        <CardGroup>
            <ItemList 
                list={itemList}
            />
        </CardGroup>
    )

}

export default ItemListContainer
