import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Cart() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const cart = useSelector(state => state.cart);
  const inventory = useSelector(state => state.inventory);
  const cartItems = cart.map((item) => ( {...inventory[item.productId], quantity: item.quantity} ))
  const cartTotal = cartItems.reduce((acc, item) => {
    return acc += item.price * item.quantity;
  }, 0)
  const displayItems = cartItems.map((item) => (
    <>
      <p><b>{item.name}</b></p>    
      <p>${item.price}</p>    
      <p>Quantity: {item.quantity}</p>
    </>
  ))

  return (
    <div className="d-inline-block ml-5">
    <Button color="secondary" onClick={toggle}>Cart</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
        <ModalBody>
          {displayItems}
          <span className="d-block text-right">Total: ${cartTotal}</span>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Checkout</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
