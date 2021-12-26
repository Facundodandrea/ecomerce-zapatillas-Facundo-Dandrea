import new2 from "./img/new2.png"

const items = [
    {stock: 35, id: 1, nombre: "Yeezy Boost 350", marca: "Adidas", desc: "Yeezy Boost 350 V2 Beluga", precio: 9499, img: new2},
]

const Item = () => {
    return (
        items.map((elemento, indice) => {
            return(
                <article key={indice} className="sneaker">
                    <img className="sneaker_img" src={elemento.img} alt="producto" />
                    <div className="info_producto">
                        <p className="sneaker_name">{elemento.nombre}</p>
                        <p className="sneaker_descripcion">{elemento.desc}</p>
                        <p className="sneaker_precio">${elemento.precio}</p>
                        <p className="sneaker_stock">Stock disponible: {elemento.stock}</p>
                    </div>
                </article>
            )
        })
    )
}

export default Item