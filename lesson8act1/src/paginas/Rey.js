import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { Context } from '../resources/Context';

export default function Rey() {
  const {rey}= useParams();
  const {reyes} = useContext(Context);
  const navigate = useNavigate();
  const [indice, setIndice] = useState();

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});}

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

useEffect(() => {
    const normalizedReyes = reyes.map(e =>
        removeDiacritics(toTitleCase(e)));
    const normalizedRey = removeDiacritics(toTitleCase(rey));
    const foundIndex = normalizedReyes.indexOf(normalizedRey);

     if (foundIndex !== -1) {
        setIndice(foundIndex);
    } else {
        navigate("/error");
     }
    }, [rey, reyes, navigate]);
    
    if (indice === null) {
        return null;}

    console.log(reyes)
    console.log(rey)
    return (
        
        <div className='cajaRey'><img className="imgRey" src={process.env.PUBLIC_URL + (`/resources/rey_${rey.toLowerCase()}.png`)} alt={reyes[indice]} />
        <h1>{reyes[indice]}</h1></div>
  )
}