import new2 from "./img/new2.png"
import new3 from "./img/new3.png"
import new4 from "./img/new4.png"


const items = [
    {stock: 35, id: 1, nombre: "Yeezy Boost 350", marca: "Adidas", desc: "Yeezy Boost 350 V2 Beluga", precio: 9499, img: new2},
    {stock: 40, id: 2, nombre: "Yeezy Boost 350", marca: "Adidas", desc: "Yeezy Boost 350 V2 Oreo", precio: 9499, img: new3},
    {stock: 20, id: 3, nombre: "Yeezy Boost 350", marca: "Adidas", desc: "Yeezy Boost 350 V2 Zebra", precio: 9499, img: new4},
]

const Item = () => {
    return (
        items.map((elemento, indice) => {
            return(
                <>
                <article key={indice} className="sneaker">
                    <img className="sneaker_img" src={elemento.img} alt="producto" />
                    <div className="info_producto">
                        <p className="sneaker_name">{elemento.nombre}</p>
                        <p className="sneaker_descripcion">{elemento.desc}</p>
                        <p className="sneaker_precio">${elemento.precio}</p>
                        <p className="sneaker_stock">Stock disponible: {elemento.stock}</p>
                    </div>
                </article>
                </>
            )
        })
    )
}

export default Item