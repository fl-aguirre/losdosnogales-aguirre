import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import ItemList from "../ItemList";
import {getItem} from "../servicios/getMocks";
import { getFirestore } from "../servicios/firebaseService";


function ItemListContainer() {

    const {categoryId} = useParams()

    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const dbQuery = getFirestore()
        if (categoryId === undefined){
            dbQuery.collection('items').where('price', '>=', 100).get()
            .then((respuesta)=>{
                console.log(respuesta)
                setItemList(respuesta.docs.map(item => ({...item.data(), id: item.id} )))
                setLoading(true)
            },error => console.log(error))
            .catch(error => console.log('Un error:' + error))
            // .finally(console.log('Se ejecuta igual'))
        }else {
            dbQuery.collection('items').where('category', '==', categoryId).get()
            .then((respuesta)=>{
                setItemList(respuesta.docs.map(item => ({...item.data(), id: item.id} )))
                setLoading(true)
            },error => console.log(error))
            .catch(error => console.log('Un error:' + error))
        }

    }, [categoryId])

    // useEffect(()=>{
    //     fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(data=> data.json())
    //     .then(res => console.log(res))
    // })

    return (
        !loading ? <Spinner animation="border"/> 
                    :
                    <CardGroup>
                        <Row className="mx-auto">
                            <ItemList 
                                list={itemList}
                            />
                        </Row>
                    </CardGroup>
    )

}

export default ItemListContainer
