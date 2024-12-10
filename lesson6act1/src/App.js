import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState("");
  
  const change = () => {
    const url ="https://api.chucknorris.io/jokes/random";
    const peticion = fetch(url);
    peticion
    .then(datos => datos.json())
    .then(lectura => {
      setJoke(lectura.value)})
    .catch(() => console.log("Ha ocurrido un error"))
  }
  
  useEffect ( () => {
    change()
  }, []);


  
  return (
    <div className='App'>Broma
      <div>{joke}</div>
      <button onClick={change}>Cambiar chiste</button>
    </div>
  );
}

export default App;
