import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Cart() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="d-inline-block ml-5">
    <Button color="secondary" onClick={toggle}>Cart</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
        <ModalBody>
          Items
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Checkout</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
