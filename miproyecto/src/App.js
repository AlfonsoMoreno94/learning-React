import './App.css';
import imagen0 from "./images/rey_atanagildo.png"
import imagen1 from "./images/rey_ataulfo.png"
import imagen2 from "./images/rey_ervigio.png"
import imagen3 from "./images/rey_incognito.png"

function App() { 
  let nombres=["Atanagildo", "Ataulfo", "Ervigio"];
  
  const cambiarImagen = (e) => {
    if (e.target.src.includes("incognito")) {
      e.target.style.visibility = "hidden";
      e.target.alt= "";
    } else {
      e.target.src = imagen3;
      e.target.parentNode.style.backgroundColor= "white";
      e.target.parentNode.style.border= 0;
    }
  }

  const cambiarTexto = (e) => {
    if (e.target.innerHTML == "Visto") {
      e.target.innerHTML = "";
    } else {
      e.target.innerHTML = "Visto";
    }
  }

  return (
    <div className="contenedor">
      <div className="caja">
      <img className="imagen" src= {imagen0} alt="none" onClick={cambiarImagen}/>
      <br/>
      <div className="nombre" onClick={cambiarTexto}>{nombres[0]}</div></div>
        
      <div className="caja">
      <img className="imagen" src= {imagen1} alt="Imagen de otro rey" onClick={cambiarImagen}/>
      <br/>
      <div className="nombre" onClick={cambiarTexto}>{nombres[1]}</div></div>

      <div className="caja">
      <img className="imagen" src= {imagen2} alt="Imagen del último rey" onClick={cambiarImagen}/>
      <br/>
      <div className="nombre" onClick={cambiarTexto}>{nombres[2]}</div></div>

    </div>
  );
}

export default App;
