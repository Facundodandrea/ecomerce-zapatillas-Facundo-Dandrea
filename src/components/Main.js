import Home from "./Home";
import AllProducts from "./AllProducts";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

const Main = (props) => {
    return (       
        <main>
            
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                {/*<Route path="/carrito" element=""/>*/}
            </Routes>
        </main>
    )
}

export default Main
