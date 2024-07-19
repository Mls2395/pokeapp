import { useEffect, useState } from "react"
import { getPokemon } from "./getPokemon"

export const useFetchApi = (nombre) =>{
    //useState sirve para manejar el estado. En este caso asignamos el estado inicial 
    //de un arreglo vacío
    const [estado, setEstado] = useState([])
    //useEffect es un hook que se ejecuta al renderizar el componente o actualizar. En
    //este caso se ejecuta la función setPokemon(que consume la api), y asigna el resultado 
    //a la variable estado
    useEffect(()=>{
        getPokemon(nombre).then((item) =>{
            setEstado(item)
        })
    },[nombre])

    return estado
}