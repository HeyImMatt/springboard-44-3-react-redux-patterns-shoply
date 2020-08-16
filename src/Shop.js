import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap'
import ShopItem from './ShopItem';
import { ADD_TO_CART } from './actionTypes';

export default function Shop() {

  const dispatch = useDispatch();
  const inventory = useSelector(state => state.inventory);
  const shopArr = Object.entries(inventory).map((p) => ({ [p[0]]: p[1] }));
  const cart = useSelector(state => state.cart);
  const addItem = (id) => {
    dispatch({type: ADD_TO_CART, payload: { productId: id, quantity: 1 } })
  }

  const shopItems = shopArr.map((product) => {
    const prodId = Object.entries(product)[0][0];
    const prod = Object.entries(product)[0][1];

    return <ShopItem key={prodId} id={prodId} product={prod} addItem={addItem} />
  });

  const cartItems = cart.map((item) => ( `Item Name: ${inventory[item.productId].name}`  ))


  return (
    <Container>
      <Row>
        <Col className="text-center">
        <h1>SHOPLY</h1>
        <h3>Cart: {cartItems}</h3>
        <Row>
          {shopItems}
        </Row>
        </Col>
      </Row>
    </Container>
  );
}

