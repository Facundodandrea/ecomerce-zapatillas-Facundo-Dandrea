import { useContext } from "react";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "./Firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);

    const coleccionProductos = collection(db,"productos")
        const docRef = doc(coleccionProductos,id)
        const pedido = getDoc(docRef)

        pedido
        .then((resultado)=>{
            const producto = resultado.data()
            setProduct(producto)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id])

  const onAdd = (count) => {
    addToCart(product, count);
    setAdded(true);
  }

  return (
    <>
      {loading ? <Loader /> : <ItemDetail onAdd={onAdd} product={product} added={added} />}
    </>
  );
}

export default ItemDetailContainer;