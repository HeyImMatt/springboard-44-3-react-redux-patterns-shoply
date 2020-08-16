import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap'
import ShopItem from './ShopItem';

export default function Shop() {

  const inventory = useSelector(state => state.inventory);
  const shopItems = inventory.map((product) => (<ShopItem key={product.id} product={product} />))

  return (
    <Container>
      <Row>
        <Col className="text-center">
        <h1>SHOPLY</h1>
        <Row>
          {shopItems}
        </Row>
        </Col>
      </Row>
    </Container>
  );
}

