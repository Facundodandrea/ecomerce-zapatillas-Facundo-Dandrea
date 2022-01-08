import { Link } from "react-router-dom"

const Item = ({producto/* :{nombre,precio} */}) => {

    const {title,price,description,image,id} = producto

    return (
        <article class="sneaker">
                <img src={image} alt="" class="sneaker__img"/>
                <span class="sneaker__name">{title}</span>
                <span class="sneaker__preci">$ {price}</span>
                <Link to={`/item/${id}`} class="button-light">See more<i class="bx bx-right-arrow-alt"></i></Link>                  
        </article>
    )
}

export default Item

