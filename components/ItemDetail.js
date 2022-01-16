import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, onAdd, added }) => {
  return (
    <div>
          <img src={product.image} alt={product.title} width='500px' />
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>Precio ${product.price}</p>
          <p>{product.description}</p>
          {added ? <Link to='/cart'>Go to Cart</Link> : <ItemCount stock={5} initial={1} onAdd={onAdd} /> }
    </div>
  )
}

export default ItemDetail;