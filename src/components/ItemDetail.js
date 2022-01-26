import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, onAdd, added }) => {
  return (
    <div>
          <img src={product.imagen} alt={product.titulo} width='500px' />
          <h3>{product.Titulo}</h3>
          <p>{product.descripcion}</p>
          <p>Precio ${product.precio}</p>
          {added ? <Link to='/cart'>Go to Cart</Link> : <ItemCount stock={product.stock} initial={1} onAdd={onAdd} /> }
    </div>
  )
}

export default ItemDetail;