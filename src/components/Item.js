import { Link } from "react-router-dom"

const Item = ({producto/* :{nombre,precio} */}) => {

    const {Titulo,precio,description,imagen,id,categoria} = producto

    return (
        <article class="sneaker">
                <img src={imagen} alt="" class="sneaker__img"/>
                <span class="sneaker__name">{Titulo}</span>
                <span class="sneaker__preci">$ {precio}</span>
                <Link to={`/item/${id}`} class="button-light">See more<i class="bx bx-right-arrow-alt"></i></Link>                  
        </article>
    )
}

export default Item

