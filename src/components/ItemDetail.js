import new2 from "./img/new2.png"

const items = [
    {stock: 35, id: 1, nombre: "Yeezy Boost 350", marca: "Adidas", desc: "Yeezy Boost 350 V2 Beluga", descLarga:"Tenis Yeezy Boost 350 V2 Beluga en algodón de color gris de adidas YEEZY con Primeknit en la parte superior, puntera redonda, agujetas en la parte delantera y suela de goma.", precio: 9499, img: new2},
]

const ItemDetail = () => {
    return (
        items.map((elemento, indice) => {
            return(
            <>
            <h2>Detalles</h2>
                <div className="detalles" key={indice}>
                    <img className="detalle_img" src={elemento.img} alt="producto" />
                    <div className="detalle_producto">
                        <p className="detalle_name">{elemento.nombre}</p>
                        <p className="detalle_descripcion">{elemento.descLarga}</p>
                        <p className="detalle_precio">${elemento.precio}</p>
                        <p className="detalle_stock">Stock disponible: {elemento.stock}</p>
                    </div>
                </div>
            </>
            )
        })
    )
}

export default ItemDetail
