import React from 'react'

function Titulo({nombre}) {
    return (
        <div className="title__container">
            <h1 className="title">{nombre}</h1>
        </div>
    )
}

function Title() {
    return (
        <>
            <Titulo 
            nombre={'Los dos nogales - Productos regionales'} 
            />
        </>
    )   
}


export default Title
