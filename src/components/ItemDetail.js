import { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({ producto }) => {

    const { title, price, description, image } = producto
    const [mostrar, setMostrar] = useState(true)

    const verQueOnda = (cantidad) => {
        setMostrar(false)
    }

    if(mostrar){
        return (
            <div>
                <h2>{title}</h2>
                <img src={image} />
                <p>$ {price}</p>
                <p>{description}</p>
                <ItemCount initial={1}/>
                <button>Confirmar</button>
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
