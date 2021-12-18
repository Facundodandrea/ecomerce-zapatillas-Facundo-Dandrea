import { useState } from "react"

function ItemCount({initial = 0, stock = 5, onAdd = 0}) {
    
    const [contador, setContador] = useState(initial)
    
    
    const aumentarContador = () =>{
        setContador(contador + 1)
    }
    
    const disminuirContador = () =>{
        setContador(contador - 1)
    }

    const agregarCarrito = () =>{
        if(contador > 0 && contador <= stock){
            onAdd = onAdd + contador
            alert(onAdd + " productos agregados")
        }else{
            alert("No se puede sumar al carrito")
        }
    } 

    return (
        <>
                <div className="contadorContainer">
                    <div className="contador">
                        <p>Contador actual : {contador}</p>
                    </div>
                    <br/><hr />
                    <div className="stock">
                        <p>Stock disponible : {stock}</p> 
                    </div>
                    <div className="btnStock">
                        <button className="btn_Stock" onClick={disminuirContador} id="disminuir">Disminuir</button>
                        <button className="btn_Stock" onClick={aumentarContador} id="aumentar">Aumentar</button>
                    </div>
                    <div className="btnAgregar">
                        <button className="btn_Stock" onClick={agregarCarrito} id="agregar">Agregar</button>
                    </div>
                </div>
        </>
            )
    }
    
    export default ItemCount
    

