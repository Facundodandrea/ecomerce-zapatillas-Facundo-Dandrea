import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) =>{

    return(
        <div className="greeting">
            {greeting}!
            <div className="items">
                <ItemList/>
            </div>
        </div>
    )
}

export default ItemListContainer