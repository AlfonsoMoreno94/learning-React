import React from 'react'


function MiComponente({rey, setTotal}) {
  const reservar = (e) => {
    setTotal((e) => e + Number(rey.precio));
    e.target.parentNode.style.display="none";

  }
  
    return (
    <div className='caja' style={{ backgroundColor: rey.color}} visibility = "visible">
        <h1>{rey.nombre}</h1>
        <img src={`https://www.html6.es/img/rey_${rey.nombre.toLowerCase()}.png`} alt={`${rey.nombre}`} />
        <p>Precio: {rey.precio} €</p>
        <button onClick={reservar}>Reservar </button>
    </div>
  )
}


export default MiComponente