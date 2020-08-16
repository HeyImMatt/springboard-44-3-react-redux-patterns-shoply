import React from 'react';
import { useSelector } from 'react-redux';
import ShopItem from './ShopItem';

export default function Shop() {

  const inventory = useSelector(state => state.inventory);
  const shopItems = inventory.map((product) => (<ShopItem key={product.id} product={product} />))

  return (
    <div>
      Welcome to the shop!
      {shopItems}
    </div>
  );
}

