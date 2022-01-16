import { createContext, useState } from "react";

export const CartContext = createContext() 

const CartProvider = ({ children }) => {
    
    const [cartArray, setCartArray] = useState([])
    
    const addItem = (product, count) => {
    const newObj = {
        item: product,
        count
    }
        setCartArray([...cartArray, newObj])
    }

    const removeItem = (id) => {
        const updateCart = cartArray.filter(element => element.id !== id)
        setCartArray(updateCart)
    }

    const clear = () => {
        setCartArray([])
    }

    const isInCart = (id) => {
        return cartArray.some(element => element.id === id)
    }

    const value = {
        cartArray,
        addItem,
        removeItem,
        clear
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
