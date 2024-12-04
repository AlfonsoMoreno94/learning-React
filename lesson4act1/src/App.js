import MiComponente from "./components/MiComponente"
import './App.css';
import { useState } from "react";

function App() {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]
  
  const [total, setTotal] = useState(0);

  return (
    <>
    <h2>Total a pagar: {total} €</h2>

    <div className="cajaComponentes">
      <MiComponente rey={reyes[0]} setTotal={setTotal}/>
      <MiComponente rey={reyes[1]} setTotal={setTotal}/>
      <MiComponente rey={reyes[2]} setTotal={setTotal}/>
      <MiComponente rey={reyes[3]} setTotal={setTotal}/>
      <MiComponente rey={reyes[4]} setTotal={setTotal}/>
      <MiComponente rey={reyes[5]} setTotal={setTotal}/>
    </div>
    </>
  );
}

export default App;
