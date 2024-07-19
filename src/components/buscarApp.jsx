import { useState } from "react"

export const Buscar = ({ setNombre }) =>{
    const [valor, setValor] = useState('')
    const cambioInput = (e) =>{
        setValor(e.target.value)
    }
    const agregar = (e) =>{
        e.preventDefault()
        setNombre(valor)
    }
    return (
        <>
        <form onSubmit={agregar}>
            <input type="text" className="form-control" value={valor} 
                onChange={cambioInput} />
        </form>
        </>
    )
}