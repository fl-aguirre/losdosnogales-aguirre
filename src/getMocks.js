import nueces1 from './images/nueces1.jpeg';

//Lista de productos (base de datos)
export const productsList = [
    {
        id:1, 
        name: 'Nueces tradicionales',
        category: 'nueces', 
        description: 'Nueces confitadas rellenas de dulce de leche y cubiertas con fondant.', 
        price: 100, 
        stock: 3, 
        image: nueces1},  
    {
        id:2, 
        name: 'Nueces de chocolate',
        category: 'nueces', 
        description: 'Nueces confitadas rellenas de dulce de leche y cubiertas con chocolate blanco y negro.', 
        price: 200, 
        stock: 5, 
        image: "https://http2.mlstatic.com/D_NQ_NP_987850-MLA31336489393_072019-O.jpg"},
    {
        id:3, 
        name: 'Aceitunas',
        category: 'aceitunas', 
        description: 'Aceitunas catamarqueñas al natural en frascos de medio y un kilo.', 
        price: 300, 
        stock: 6, 
        image: "https://estaticos.miarevista.es/media/cache/1000x590_thumb/uploads/images/gallery/5a2ea52b5cafe85ba93c9869/aceitunas-interior.jpg"},
    {
        id:4, 
        name: 'Dulces',
        category: 'dulces', 
        description: 'Dulces regionales de cayote, membrillo o lima.', 
        price: 400, 
        stock: 10, 
        image: "https://www.soyceliaconoextraterrestre.com/wp-content/uploads/2021/06/Dulce-de-cayote-casero-1024x683.jpg"}
];

//Promesa que resuelve la lista de productos en 2 segundos
const task = new Promise((resolve,reject)=>{
    let status = 200
    if (status===200){
        setTimeout(()=>{resolve(productsList)},2000)
    }else{
        reject('Rechazado')
    }
})

export const getItem=()=>{
    return task
}