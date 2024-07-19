import { useRef } from "react"
import { useFetchApi } from "../helpers/useFetchApi"
import { Tipo } from "./tipoApp"
import '../../public/estilo.css'

export const Listar = ({ nombre }) => {
    const poke = useFetchApi(nombre)
    const sonido = useRef(null)
    //si hay sonido lo reproduce
    const play = () =>{
        if(sonido.current)
            sonido.current.play()
    }
    //si no hay datos no realiza ninguna operación
    if (poke.length == 0)
        return (<></>)
    return (
        <>
            <h3>{poke.num} {poke.nom}</h3>
            <hr />
            {poke.tipo.map((item, index) => (
                // <h4 key={index}>Tipo: {item.type.name}</h4>
                <Tipo item={item} key={index} />
            ))}
            <div>
                <audio src={poke.sonido} ref={sonido} />
                <img src={poke.img} alt="" onMouseEnter={play} />
                <img src={poke.img2} alt="" onMouseEnter={play} />
            </div>
            {/* TAREA(5 decimas): traer los stats y mostrarlos en una tabla(utilizar map), 
            desde otro componente. algo similar a la siguiente tabla: */}
             <table className="table table-bordered table-hover">
                <thead className="table table-primary">
                    <tr>
                        <th>Nombre</th>
                        <th>Stat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HP</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>STR</td>
                        <td>50</td>
                    </tr>
                </tbody>
             </table>
        </>
    )
}