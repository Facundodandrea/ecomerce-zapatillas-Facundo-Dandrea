import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";   
import CartProvider from "./context/CartContext";

function App(){
    return(
        <CartProvider>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App;
