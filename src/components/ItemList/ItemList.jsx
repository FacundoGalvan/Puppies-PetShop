import { Contenedor } from "../../contenedor/contenedor"
import { Item } from "../Item/Item"
import "./ItemList.scss"

export const ItemList = ( {productos} ) => {

    return (
        <Contenedor>    
            <h2>Alimentos Balanceados</h2>   
            <div className="ProductosMain">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </Contenedor>
    )
}