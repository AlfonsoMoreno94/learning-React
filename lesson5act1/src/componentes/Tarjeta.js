import React, { useEffect, useState } from 'react'

function Tarjeta({rey}) {
  const [vacasTotales, setVacasTotales] = useState();
    
  useEffect(() => { setVacasTotales(rey.vacasComidas * rey.reinado * 365); }, [rey.vacasComidas, rey.reinado]);
    
    return (
    <div className='tarjeta'>
        <span style={{color: 'orange'}}>{rey.nombre.toUpperCase()}</span> ha comido {vacasTotales} vacas en sus {rey.reinado} años de reinado.
        <img src={`https://www.html6.es/img/rey_${rey.nombre.toLowerCase()}.png`}/>
    </div>
  )
}

export default Tarjeta