import React, { useRef, useState } from 'react'

function Tarjeta({reyes}) {
  
    const [filteredReyes, setFilteredReyes] = useState(reyes.filter(valor => !valor.nombre.includes("g")));
    
    const borrar = (index) => {
      setFilteredReyes(filteredReyes.filter((_, i) => i !== index));
    };
        

    return (
    <div >
        {filteredReyes.map((valor, index) => (
          <div className="espacioBoton"  key={index}>
          <div className='tarjeta'>{valor.nombre}</div>
          <button onClick={() => borrar(index)}>Borrar</button>
        </div>
        ))}
    </div>
  );
}

export default Tarjeta