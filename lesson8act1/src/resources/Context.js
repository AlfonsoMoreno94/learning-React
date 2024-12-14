import React, { createContext, useState } from 'react'

export const Context = createContext();

export const Datos = ({ children}) => {
    const [reyes] = useState(["Atanagildo", "Ataúlfo", "Ervigio", "Leovigildo", "Recesvinto", "Sisebuto"])


return (
    <Context.Provider value={{reyes}}>
        {children}
    </Context.Provider>
  )
}
