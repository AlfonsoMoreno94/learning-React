import React from 'react'

function Tarjeta({reyes}) {
const resultado = reyes.find(valor=> valor.nombre.substring(0,1) == "ñ" || valor.nombre.substring(0,1) == "Ñ");

    return (
    <div>
     {resultado == undefined ? "No se ha podido encontrar"
     : resultado.nombre} 
    </div>
  );
}

export default Tarjeta