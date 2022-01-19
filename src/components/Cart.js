import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem';  

const Cart = () => {

    const { cartArray, clearCart, deleteItem } = useContext(CartContext);

    const clearFullCart = () =>{
      clearCart()
  }

    return (
        <div>
          {cartArray.length === 0 &&
            <div>
              <p>No hay productos aún</p>
              <Link to='/'>Ir al inicio</Link>
            </div>
          }
          {(cartArray.length > 0) && cartArray.map(prod => <CartItem key={prod.item.id} product={prod} deleteItem={deleteItem} />)}
          <div>
                <button className="clearButton"  onClick={clearFullCart}>Clear cart</button>
                <button className="finishButton"  onClick={clearFullCart}>Finish purchase</button>
            </div>
        </div>
      )
    }
    
    export default Cart