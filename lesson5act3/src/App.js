import React from 'react'
import "./App.css"
import Tarjeta from "./componentes/Tarjeta"

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


  return (
    <div>
        <h1>Actividad 3:</h1>
        <div>
          <Tarjeta reyes={reyes}></Tarjeta>
        </div>
    </div> 
  )
}

 export default App
