import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const footerData = {
    copyright : "Copyright © 2021",
    author : "Facundo E. D'Andrea"
}

function App(){
    return(
        <>
        <Header/>
        <Main/>
        <Footer data={footerData}/>
        </>
    )
}

export default App;
