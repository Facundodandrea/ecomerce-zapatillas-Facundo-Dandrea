import Featured from "../Featured"

const ItemListContainer = ({greeting}) =>{

    return(
        <div className="greeting">
            {greeting}!
            <div className="items">
                <Featured/>
            </div>
        </div>
    )
}

export default ItemListContainer