import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail";
import LoadSpinner from "../LoadSpinner";
import { getFirestore } from "../servicios/firebaseService";


function ItemDetailContainer() {

    const {detailId} = useParams()

    const [itemDetail, setItemDetail] = useState({})

    //Al resolver la promesa, devuelve el primer item de la lista y lo guarda en estado "itemDetail"
    useEffect(() => {
        const dbQuery = getFirestore()
        dbQuery.collection('items').doc(detailId).get()
            .then(respuesta => {
                setItemDetail({id: respuesta.id, ...respuesta.data()})
            },error => console.log(error))
            .catch(error => console.log('Un error:' + error))
    }, [detailId])

    //Renderiza el Item Detail con sus props (estados y funciones)

    if (Object.keys(itemDetail).length === 0){
        return <LoadSpinner/>
    }else {
        return (
            <section>
                {itemDetail.name === undefined ?
                <h2 className="text-center">Ups! El producto no existe!</h2>
                :
                <ItemDetail
                    item = {itemDetail}
                />
                }
            </section>
        )
    }
}

export default ItemDetailContainer
