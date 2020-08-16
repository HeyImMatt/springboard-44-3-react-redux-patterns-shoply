import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';

const INITIAL_STATE = localStorage.getItem('userCart')
? JSON.parse(localStorage.getItem('userCart'))
: [];

export default function cartReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    default:
      return state;
  }
}


/*
Cart will look like:
[
  {
    productId: {prod obj},
    quantity: num
  }
]
*/