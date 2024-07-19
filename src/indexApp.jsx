import { useState } from "react"
import { Buscar } from "./components/buscarApp"
import { Listar } from "./components/listarApp"

export const Index = () => {
    const [nombre, setNombre] = useState('')   
    return (
        <>
            <h1 className="bg-danger p-5 text-center text-white">
                Mi PokeApi
            </h1>
            <div className="container">
                <div className="text-center">
                    <Buscar setNombre={setNombre} />
                </div>
                <div className="text-center mt-5">
                    <Listar nombre={nombre} />
                </div>
            </div>
        </>
    )
}