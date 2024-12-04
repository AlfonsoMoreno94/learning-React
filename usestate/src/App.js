import { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]

  const [nombre, setNombre] = useState("");
  const [aficion, setAficion] = useState("");
  const refCajaTexto = useRef("cajaTexto")

  const cambiarTexto = () => {
    if (nombre == reyesGodos[0].nombre) {
      setNombre([reyesGodos[1].nombre]);
      setAficion([reyesGodos[1].aficion]);
    } else if (nombre == reyesGodos[1].nombre) {
      setNombre([reyesGodos[2].nombre]);
      setAficion([reyesGodos[2].aficion]);
    } else {
      setNombre([reyesGodos[0].nombre]);
      setAficion([reyesGodos[0].aficion])
    };
    
    refCajaTexto.current.style.visibility = "visible";
  }

  return (
    <>
    <div className="cajaTexto" ref={refCajaTexto}>La afición principal de <span style={{color: "red"}}> {nombre}</span> es <span style={{color:"green"}}>{aficion}</span></div>
    <button onClick={cambiarTexto}>Ver siguiente</button>
    </>
  )
}
export default App;
