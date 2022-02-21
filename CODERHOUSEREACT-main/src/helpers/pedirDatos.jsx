import { stock } from "../array/stock"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 1000)
    })
}