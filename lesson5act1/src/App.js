import React from 'react'
import Tarjeta from "./componentes/Tarjeta"
import "./App.css"

function App() {
  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]

  const rey=reyes.map(valor =>{
    console.log(valor);
    return valor;
  });
  
  return (
    <div>
      <h1>Actividad 1:</h1>
      <div className='cajaCentral'>
        <Tarjeta rey={rey[0]} />
        <Tarjeta rey={rey[1]} />
        <Tarjeta rey={rey[2]} />
        <Tarjeta rey={rey[3]} />
        <Tarjeta rey={rey[4]} />
        <Tarjeta rey={rey[5]} />
        <Tarjeta rey={rey[6]} />
      </div>
    </div>
  )
}

export default App
