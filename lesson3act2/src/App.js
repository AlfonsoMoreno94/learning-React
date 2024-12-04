import { useState } from 'react';
import './App.css';

function App() {
  const [pesoArgentino, setPesoArgentino] = useState("");
  const [pesoColombiano, setPesoColombiano] = useState("");
  const [pesoMexicano, setPesoMexicano] = useState("");
  const [dolar, setDolar] = useState("");
  const [euro, setEuro] = useState(0);

  const convertir = (e) => {
    const euroValue = Number(e.target.value);
    setEuro(euroValue);
    actualizar(euroValue);
  }
  const actualizar = (euro) => {
    
    setPesoArgentino(euro * 118.6);
    setPesoColombiano(euro * 4543.5);
    setPesoMexicano(euro * 23.2);
    setDolar(euro * 1.14);
  }
  
  return (
    <div className="display">
      <label htmlFor="euro">Euro</label>
      <input id="euro" value={euro} onChange={convertir} type="number" />

      <label htmlFor="pesoArgentino">Peso argentino</label>
      <input id="pesoArgentino" value={pesoArgentino} readOnly/>

      <label htmlFor="pesoColombiano">Peso colombiano</label>
      <input id="pesoColombiano" value={pesoColombiano} readOnly/>

      <label htmlFor="pesoMexicano">Peso mexicano</label>
      <input id="pesoMexicano"  value={pesoMexicano} readOnly/>

      <label htmlFor="dolar">Dólar</label>
      <input id="dolar" value={dolar} readOnly/>
    </div>
  );
}

export default App;
