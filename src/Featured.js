import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

const Featured = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(
                    <ItemList/>
                )
            },2000)
        })

        promesa.then((productos) => {
            setLoading(false)
            setProductos(productos)
        })
    },[])

    if(loading) {
        return(
            <h3 className="titulo_cargando">Cargando...</h3>
        )
    }else{
        return(
            <>
            <div className="featured">
                <ItemList/>
            </div>
            </>
        )
    }
}

export default Featured