import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const CartItem = ({ product, deleteItem }) => {
  return (
    <Card body>
      <Container>
        <Row>
          <Col>
            {product.item.Titulo}
          </Col>
          <Col>
            Cantidad :{product.count}
          </Col>
          <Col>
            ${product.item.precio}
          </Col>
          <Col>
          <Button variant='danger' onClick={() => deleteItem(product.item.id)}>Delete</Button>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default CartItem;