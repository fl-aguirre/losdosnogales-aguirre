import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import ItemList from "../ItemList";
import { getFirestore } from "../servicios/firebaseService";
import LoadSpinner from "../LoadSpinner";


function ItemListContainer() {

    const {categoryId} = useParams()

    //Estados
    const [loading, setLoading] = useState() //Para el loading (spinner)
    const [itemList, setItemList] = useState([]) //Para guardar los items traidos de firebase

    useEffect(() => {
        setLoading(false)
        const dbQuery = getFirestore()
        if (categoryId === undefined){
            dbQuery.collection('items').where('price', '>=', 100).get()
            .then((respuesta)=>{
                setItemList(respuesta.docs.map(item => ({...item.data(), id: item.id} )))
                setLoading(true)
            },error => console.log(error))
            .catch(error => console.log('Un error:' + error))
        }else {
            dbQuery.collection('items').where('category', '==', categoryId).get()
            .then((respuesta)=>{
                setItemList(respuesta.docs.map(item => ({...item.data(), id: item.id} )))
                setLoading(true)
            },error => console.log(error))
            .catch(error => console.log('Un error:' + error))
        }
    }, [categoryId])

    return (
        !loading ? <LoadSpinner/>
                    :
                    <section>
                        <CardGroup>
                            <Row className="mx-auto">
                                <ItemList 
                                    list={itemList}
                                />
                            </Row>
                        </CardGroup>
                    </section>
    )

}

export default ItemListContainer
