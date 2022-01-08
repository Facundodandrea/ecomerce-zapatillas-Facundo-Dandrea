import { useState } from "react"


const ItemCount = ({ stock , initial , onAdd }) => {
    
    const [contador, setContador] = useState(initial)
    
    const aumentarContador = () => {
        setContador(contador + 1)
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }

    const confirmarCantidad = () => {
        console.log(`Confirmando cantidad: ${contador}`)
        onAdd(contador)
    }

    return (
        <div>
            <p>Contador Actual : {contador}</p>
            <button onClick={disminuirContador}>disminuir</button>
            <button onClick={confirmarCantidad}>confirmar</button>
            <button onClick={aumentarContador}>aumentar</button>
        </div>
    )
}

export default ItemCount
