import { Contenedor } from "../../ejemplos/contenedor/contenedor"
import { Item } from "../Item/Item"
import "./ItemList.scss"

export const ItemList = ( {productos} ) => {

    return (
        <Contenedor>    
            <h2>Productos</h2>   
            <div className="ProductosMain">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </Contenedor>
    )
}