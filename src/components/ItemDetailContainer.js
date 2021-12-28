import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    return (
        <div>
            <ItemDetail/>
            <div className="btn_detalles">
                <button className="btn_comprar">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetailContainer
