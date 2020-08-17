import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap'
import ShopItem from './ShopItem';
import Cart from './Cart'
import { ADD_TO_CART } from './actionTypes';

export default function Shop() {

  const dispatch = useDispatch();
  const inventory = useSelector(state => state.inventory);
  const shopArr = Object.entries(inventory).map((p) => ({ [p[0]]: p[1] }));

  const addItem = (id) => {
    dispatch({type: ADD_TO_CART, payload: { productId: id, quantity: 1 } })
  }

  const shopItems = shopArr.map((product) => {
    const prodId = Object.entries(product)[0][0];
    const prod = Object.entries(product)[0][1];

    return <ShopItem key={prodId} id={prodId} product={prod} addItem={addItem} />
  });

  return (
    <Container>
      <Row>
        <Col className="text-center">
        <h1 className='d-inline-block'>SHOPLY</h1>
        <Cart />
        <Row>
          {shopItems}
        </Row>
        </Col>
      </Row>
    </Container>
  );
}

