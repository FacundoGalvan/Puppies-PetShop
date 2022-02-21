import { Contenedor } from "../../ejemplos/contenedor/contenedor"
import { Item } from "../Item/Item"

export const ItemList = ( {productos} ) => {

    return (
        <Contenedor>    
            <h2>Productos</h2>   
            <hr/>
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </Contenedor>
    )
}