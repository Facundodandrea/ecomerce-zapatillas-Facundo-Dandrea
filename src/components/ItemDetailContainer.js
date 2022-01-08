import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams() 

    useEffect(() => {

    const promesa = fetch(`https://fakestoreapi.com/products/${id}`)
    promesa
    .then(res=>res.json())
    .then((producto)=>{
        setLoading(false)
        setProducto(producto)
    })
    .catch((error)=>{
        console.log(error)
    })
},[])

return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
)
}

export default ItemDetailContainer