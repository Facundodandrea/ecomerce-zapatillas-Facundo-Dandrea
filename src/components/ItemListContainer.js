import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { collection, getDocs, getDoc } from "firebase/firestore"

 const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {
        setLoading(true)
        const colecionProductos = collection(db, "productos")
        const pedido = getDocs(colecionProductos)
        
        pedido
            .then((resultado) =>{
                const docs = resultado.docs
                const docs_formateado = docs.map(doc =>{  
                    const producto = {
                        id : doc.id,
                        ...doc.data()
                    }  
                    return producto;
                })
                setProductos(docs_formateado);
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error);
            })

       /*  const URL = id ? `https://fakestoreapi.com/products/category/${id}` : 'https://fakestoreapi.com/products'
        const promesa = fetch(URL)
        promesa
        .then(res=>res.json())
        .then((productos)=>{
            setLoading(false)
            setProductos(productos)
        })
        .catch((error)=>{
            console.log(error)
        })*/

    },[id]) 

    const onAdd = () => { }


    return (
        <ItemList productos={productos}/>
    )
   
}

export default ItemListContainer