import React from 'react';

const Producto1 = ({title, price}) => {
    return(
        <>
            <h1>{title}</h1>
            <p> Precio: {price}</p>
        </>
    )
}

export default Producto1