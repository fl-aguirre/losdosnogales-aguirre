import React from 'react'

function Titulo({nombre}) { //Funcion hijo
    return (
        <div className="title__container">
            <h1 className="title">{nombre}</h1>
        </div>
    )
}

function Title() { //Función padre. Es la que recibe los parámetros.
    return (
        <>
            <Titulo 
            nombre={'Los dos nogales - Productos regionales'} 
            />
        </>
    )   
}


export default Title
