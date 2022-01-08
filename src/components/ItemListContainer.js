import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


 const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {
        setLoading(true)

        const URL = id ? `https://fakestoreapi.com/products/category/${id}` : 'https://fakestoreapi.com/products'
        const promesa = fetch(URL)
        promesa
        .then(res=>res.json())
        .then((productos)=>{
            setLoading(false)
            setProductos(productos)
        })
        .catch((error)=>{
            console.log(error)
        })

    },[id])

    const onAdd = () => { }


    return (
        <ItemList productos={productos}/>
    )
   
}

export default ItemListContainer