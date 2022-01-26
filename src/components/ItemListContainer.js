import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

 const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {
        setLoading(true)
        const coleccionProductos = collection(db,"productos")
        
        let pedido 
        
        if(id){
            const filtro = where("categoria","==",id)
            const consulta = query(coleccionProductos,filtro)
             pedido = getDocs(consulta)
        }else {
             pedido = getDocs(coleccionProductos)
        }

        pedido
            .then((resultado)=>{
                setProductos(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                setLoading(false) 
            })
            .catch((error)=>{
                console.log(error)
            })


    },[id])


    return (
        <ItemList productos={productos}/>
    )
   
}

export default ItemListContainer