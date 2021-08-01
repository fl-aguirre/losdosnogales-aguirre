import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail";
import {getItem} from "../../getMocks";


function ItemDetailContainer() {

    const {detailId} = useParams()
    console.log(detailId)

    const [itemDetail, setItemDetail] = useState({})

    //Al resolver la promesa, devuelve el primer item de la lista y lo guarda en estado "itemDetail"
    useEffect(() => {
        getItem()
            .then((respuesta)=>{
                setItemDetail(respuesta.filter( item => item.id === parseInt(detailId)))
            },error => console.log(error))
            .catch(error => console.log('Un error:' + error))
    }, [detailId])

    console.log(itemDetail)

    //Renderiza el Item Detail con sus props (estados y funciones)

    if (Object.keys(itemDetail).length === 0){
        return null
    }else {
        return (
            <ItemDetail
                itemDetail = {itemDetail}
            />
        )
    }
}

export default ItemDetailContainer
