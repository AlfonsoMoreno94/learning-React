import React, { useContext } from 'react';
import { Context } from '../resources/Context';
import {Link} from "react-router-dom";

export default function Inicio() {
    const {reyes} = useContext(Context)

    const display = reyes.map(rey => (
        <div key={rey} className='rey'><Link to={`/${rey}`}> <img src={process.env.PUBLIC_URL + (`/resources/rey_${rey.toLowerCase()}.png`)} alt={rey} /></Link>
        <h1>{rey}</h1></div>
    ));

  
    return (
    <div className='cajaInicio'>{display}</div>
  )
}
