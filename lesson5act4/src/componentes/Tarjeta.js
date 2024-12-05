import React from 'react'

function Tarjeta({reyes}) {
const reyesFiltrados = reyes.filter(e => e.vacasComidas >= 10 && e.reinado >= 10);

const aumentar = (e) => {
  e.target.innerHTML = Number(e.target.innerHTML) +1;
}

const resultado = reyesFiltrados.map((valor, index) => (
  <div key={index}>
    <div className='tarjeta'>{valor.nombre}</div>
    <p onClick={aumentar}>0</p>
  </div>
));

  return (
    <div>
      {resultado}
    </div>
  );
}

export default Tarjeta