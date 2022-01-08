import { Link } from "react-router-dom"
import { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({ producto, }) => {

    const { title, price, description, image } = producto
    const [mostrar, setMostrar] = useState(true)
    const [added, setAdded] = useState(false)

    const verQueOnda = (cantidad) => {
        setMostrar(false)
    }

    const onAdd = (count) =>{
        alert(`Agregaste ${title}, cantidad ${count}.`)
        setAdded(true)
    }

    if(mostrar){
        return (
            <div>
                <h2>{title}</h2>
                <img src={image} />
                <p>$ {price}</p>
                <p>{description}</p>
                {added ? <Link to='/cart'>Go to cart</Link> : <ItemCount initial={1} onAdd={onAdd} added={added}/>}
            </div>
        )
    }else{
        return (
            <div>
                <h2>{title}</h2>
                <img src={image} />
                <p>$ {price}</p>
                <p>{description}</p>
                <button>Confirmar</button>
            </div>
        )
    }
}

export default ItemDetail
