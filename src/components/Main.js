import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from './ItemDetailContainer'

const Main = () => {
    return (       
        <main>
            <ItemListContainer greeting={"Welcome / Bienvenidos"}/>
            <div className="detalleContainer">
                <ItemDetailContainer/>
            </div>
        </main>
    )
}

export default Main
