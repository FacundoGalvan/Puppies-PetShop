import { Boton } from "../boton/Boton"
import { useState, useEffect } from 'react'

export const Clicker = () => {
       
    const [clicks, setClicks] = useState(0) //array desestructurado 

    const sumarClick = () => {
        setClicks( clicks + 1) //al set clicks le genero nuevo valor del estado
    }

    useEffect(() => { //dentro de una base de datos uso el use effect

        const aumentar = () => {
            console.log("click")
        }

        window.addEventListener('click', aumentar)

        return () => { //esto hace que este desmontado (abandona el dom)
            window.removeEventListener('click', aumentar)
        }

    }, [])


    return (
        <>
            <Boton click={sumarClick}>Click me!</Boton>
            <p>Clicks: {clicks}</p>
            <p>Fecha y Hora último click: { new Date().toLocaleString() }</p>
        </>
    )
}